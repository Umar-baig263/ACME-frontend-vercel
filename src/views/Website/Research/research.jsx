import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, TransformControls, Html } from "@react-three/drei";
import { v4 as uuidv4 } from "uuid";

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

function makeTextTexture({
  text,
  fontSize = 140,
  color = "#111827",
  fontFamily = "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
  fontWeight = 800,
  padding = 48,
}) {
  const size = 1024;
  const c = document.createElement("canvas");
  c.width = size; c.height = size;
  const ctx = c.getContext("2d");
  if (!ctx) return null;
  const content = typeof text === "string" && text.length ? text : "TEXT";
  ctx.clearRect(0, 0, size, size);
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  let fs = Number.isFinite(fontSize) ? fontSize : 140;
  for (; fs >= 12; fs -= 4) {
    ctx.font = `${clamp(fontWeight,100,900)} ${fs}px ${fontFamily}`;
    const w = ctx.measureText(content).width;
    if (w <= size - padding * 2) break;
  }
  ctx.font = `${clamp(fontWeight,100,900)} ${fs}px ${fontFamily}`;
  ctx.fillStyle = color;
  ctx.fillText(content, size / 2, size / 2);
  const tex = new THREE.CanvasTexture(c);
  tex.anisotropy = 8; tex.flipY = false; tex.needsUpdate = true;
  return tex;
}

function isValidTexture(tex) {
  return !!(tex && typeof tex === "object" && tex.isTexture && (tex.image || (tex.source && tex.source.data)));
}

function useTextureFromFile(file) {
  const [texture, setTexture] = useState(null);
  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      (tex) => {
        if (isValidTexture(tex)) {
          tex.anisotropy = 8; tex.flipY = false; tex.needsUpdate = true;
          setTexture(tex);
        }
        URL.revokeObjectURL(url);
      },
      undefined,
      () => {
        URL.revokeObjectURL(url);
      }
    );
  }, [file]);
  return texture;
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1} castShadow />
      <directionalLight position={[-5, 3, -2]} intensity={0.4} />
      <Environment preset="studio" />
    </>
  );
}

const ShirtMesh = React.forwardRef(function ShirtMesh({ color = "#e5e7eb", onPointerDown }, ref) {
  const meshRef = useRef();
  useFrame(() => {
    if (!meshRef.current) return;
    const t = performance.now() * 0.0003;
    meshRef.current.scale.y = 1.05 + Math.sin(t) * 0.01;
  });
  return (
    <mesh
      ref={(node) => {
        meshRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      castShadow
      receiveShadow
      onPointerDown={onPointerDown}
    >
      <sphereGeometry args={[1.25, 64, 64]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.9}
        metalness={0}
        clearcoat={0.3}
        clearcoatRoughness={0.8}
      />
    </mesh>
  );
});

function Decal({ item, selected, onObjectReady }) {
  const ref = useRef();
  const texture = item.texture;
  const mat = useMemo(() => {
    if (!isValidTexture(texture)) return null;
    const m = new THREE.MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false });
    return m;
  }, [texture]);
  useEffect(() => { if (onObjectReady && ref.current) onObjectReady(ref.current); }, [onObjectReady]);
  if (!isValidTexture(texture) || !mat) return null;
  return (
    <mesh ref={ref} position={item.position} rotation={item.rotation} scale={item.scale} renderOrder={selected ? 2 : 1}>
      <planeGeometry args={[1, 1]} />
      <primitive object={mat} attach="material" />
    </mesh>
  );
}

function CameraRig() {
  const { camera, size } = useThree();
  useEffect(() => {
    camera.position.set(0, 0.6, 3.6);
    camera.near = 0.01; camera.far = 100;
    camera.updateProjectionMatrix();
  }, [camera, size.width, size.height]);
  return null;
}

export default function Research() {
  const [shirtColor, setShirtColor] = useState("#e5e7eb");
  const [mode, setMode] = useState("translate");
  const [placing, setPlacing] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [snapBgTransparent, setSnapBgTransparent] = useState(true);

  const sceneRef = useRef();
  const shirtRef = useRef();
  const controlsRef = useRef();
  const selectedObjRef = useRef();
  const canvasRef = useRef();
  const rendererRef = useRef();

  const onShirtClick = (e) => {
    if (!placing || !isValidTexture(placing.texture)) return;
    e.stopPropagation();
    const point = e.point.clone();
    const normal = e.face?.normal?.clone() || new THREE.Vector3(0, 0, 1);
    const worldNormal = normal.clone().transformDirection(e.object.matrixWorld);
    const id = uuidv4();
    const baseScale = 0.6;
    const newItem = {
      id,
      type: placing.type,
      texture: placing.texture,
      position: point.add(worldNormal.multiplyScalar(0.01)),
      rotation: new THREE.Euler(0, 0, 0),
      scale: new THREE.Vector3(baseScale, baseScale, 1),
      name: placing.type === "text" ? `Text: ${placing.label}` : (placing.label || "Image"),
      visible: true,
    };
    setItems((arr) => [...arr, newItem]);
    setSelectedId(id);
    setPlacing(null);
  };

  useEffect(() => {
    const obj = selectedObjRef.current;
    if (controlsRef.current && obj) controlsRef.current.attach(obj);
    if (controlsRef.current && !obj) controlsRef.current.detach();
  }, [selectedId, items, mode]);

  useEffect(() => {
    if (selectedId && !items.find((i) => i.id === selectedId)) setSelectedId(null);
  }, [items, selectedId]);

  const downloadPNG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "tshirt-preview.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const [uploadFile, setUploadFile] = useState(null);
  const uploadTex = useTextureFromFile(uploadFile);
  useEffect(() => {
    if (isValidTexture(uploadTex)) setPlacing({ type: "image", texture: uploadTex, label: uploadFile?.name || "Image" });
  }, [uploadTex, uploadFile]);

  const [textInput, setTextInput] = useState("YOUR TEXT");
  const [textColor, setTextColor] = useState("#111827");
  const [textSize, setTextSize] = useState(140);
  const [textWeight, setTextWeight] = useState(800);

  const makeText = () => {
    const tex = makeTextTexture({ text: textInput, color: textColor, fontSize: clamp(Number(textSize)||140, 24, 200), fontWeight: clamp(Number(textWeight)||800, 100, 900) });
    if (isValidTexture(tex)) setPlacing({ type: "text", texture: tex, label: (textInput || "Text").slice(0, 18) });
  };

  const selected = items.find((i) => i.id === selectedId) || null;
  const [rightOpen, setRightOpen] = useState(true);

  useEffect(() => {
    const gl = rendererRef.current;
    if (!gl) return;
    if (snapBgTransparent) gl.setClearAlpha(0);
    else gl.setClearAlpha(1);
  }, [snapBgTransparent]);

  useEffect(() => {
    const t1 = clamp(-5, 0, 10) === 0;
    const t2 = clamp(5, 0, 10) === 5;
    const t3 = clamp(50, 0, 10) === 10;
    const txt = makeTextTexture({ text: "TEST" });
    const t4 = isValidTexture(txt);
    console.assert(t1 && t2 && t3, "clamp tests failed");
    console.assert(t4, "makeTextTexture test failed");
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gray-900" />
            <h1 className="text-lg sm:text-xl font-semibold">3D T‑Shirt Customizer</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button onClick={() => setRightOpen((v) => !v)} className="inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium border border-gray-300 hover:bg-gray-100">{rightOpen ? "Hide" : "Show"} Controls</button>
            <button onClick={downloadPNG} className="inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold bg-gray-900 text-white hover:opacity-90">Download PNG</button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-6 px-0 lg:px-6">
        <section className={`${rightOpen ? "lg:col-span-8" : "lg:col-span-12"} order-2 lg:order-1 bg-white lg:rounded-2xl shadow lg:my-6 h-[70vh] sm:h-[72vh] md:h-[74vh] lg:h-[78vh]`}>
          <Canvas
            gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
            onCreated={({ gl }) => { canvasRef.current = gl.domElement; rendererRef.current = gl; }}
            shadows
            camera={{ position: [0, 0.6, 3.6], fov: 45 }}
          >
            {!snapBgTransparent && <color attach="background" args={[0xf8fafc]} />}
            <Lights />
            <CameraRig />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.3, 0]} receiveShadow>
              <planeGeometry args={[30, 30]} />
              <shadowMaterial opacity={0.25} />
            </mesh>
            <group ref={sceneRef}>
              <ShirtMesh ref={shirtRef} color={shirtColor} onPointerDown={onShirtClick} />
              {items.map((it) => (
                <SelectableDecal
                  key={it.id}
                  item={it}
                  isSelected={it.id === selectedId}
                  onSelect={() => setSelectedId(it.id)}
                  selectedObjRef={selectedId === it.id ? selectedObjRef : null}
                />
              ))}
              {selected && (
                <TransformControls
                  ref={controlsRef}
                  mode={mode}
                  enabled
                  showX showY showZ
                  size={0.9}
                  onMouseDown={(e) => e.stopPropagation()}
                  onPointerDown={(e) => e.stopPropagation()}
                />
              )}
            </group>
            <OrbitControls makeDefault enableDamping dampingFactor={0.05} minDistance={2.2} maxDistance={5.5} />
            {placing && (
              <Html center>
                <div className="px-3 py-1.5 rounded-full bg-black/70 text-white text-xs sm:text-sm shadow">Tap the shirt to place your {placing.type}</div>
              </Html>
            )}
          </Canvas>
        </section>

        <aside className={`order-1 lg:order-2 ${rightOpen ? "block" : "hidden"} lg:col-span-4`}>
          <div className="lg:my-6 bg-white rounded-none lg:rounded-2xl shadow border border-gray-100">
            <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-base font-semibold">Controls</h2>
              <div className="flex items-center gap-2">
                <label className="inline-flex items-center gap-2 text-xs"><input type="checkbox" className="accent-black" checked={snapBgTransparent} onChange={(e)=>setSnapBgTransparent(e.target.checked)} /> Transparent PNG</label>
              </div>
            </div>

            <div className="p-4 sm:p-5 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Shirt Color</label>
                <div className="flex items-center gap-3">
                  <input type="color" value={shirtColor} onChange={(e)=>setShirtColor(e.target.value)} className="h-10 w-14 rounded-lg border border-gray-200" />
                  <input type="text" value={shirtColor} onChange={(e)=>setShirtColor(e.target.value)} className="flex-1 h-10 px-3 rounded-lg border border-gray-300" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Add Image (PNG/JPG/SVG)</label>
                <div className="flex items-center gap-2">
                  <input type="file" accept="image/*" onChange={(e)=> setUploadFile(e.target.files?.[0] || null)} className="block w-full text-sm file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border file:border-gray-300 file:bg-gray-50 file:hover:bg-gray-100" />
                  <button onClick={()=> setPlacing(isValidTexture(uploadTex) ? { type: "image", texture: uploadTex, label: uploadFile?.name||"Image" } : null)} disabled={!isValidTexture(uploadTex)} className="px-3 py-2 rounded-lg border border-gray-300 text-sm disabled:opacity-50">Place</button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Add Text</label>
                <input value={textInput} onChange={(e)=>setTextInput(e.target.value)} className="w-full h-10 px-3 rounded-lg border border-gray-300" placeholder="Type here" />
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-gray-600">Color</label>
                    <input type="color" value={textColor} onChange={(e)=>setTextColor(e.target.value)} className="w-full h-10 rounded-lg border border-gray-200" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600">Size</label>
                    <input type="number" min={24} max={200} value={textSize} onChange={(e)=>setTextSize(parseInt(e.target.value||"140"))} className="w-full h-10 px-2 rounded-lg border border-gray-300" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600">Weight</label>
                    <input type="number" min={100} max={900} step={100} value={textWeight} onChange={(e)=>setTextWeight(parseInt(e.target.value||"800"))} className="w-full h-10 px-2 rounded-lg border border-gray-300" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={makeText} className="px-3 py-2 rounded-lg border border-gray-300 text-sm">Create & Place</button>
                  {placing?.type === "text" && <span className="text-xs text-gray-500">Tap shirt to place…</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Transform Mode</label>
                <div className="grid grid-cols-3 gap-2">
                  {(["translate", "rotate", "scale"]).map((m) => (
                    <button key={m} onClick={()=>setMode(m)} className={`h-10 rounded-lg border text-sm ${mode===m?"bg-gray-900 text-white border-gray-900":"border-gray-300"}`}>{m}</button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Layers</label>
                <div className="max-h-56 overflow-auto rounded-lg border border-gray-200 divide-y divide-gray-100">
                  {items.length === 0 && (
                    <div className="p-4 text-sm text-gray-500">No layers yet — add an image or text, then click the shirt to place it.</div>
                  )}
                  {items.map((it)=> (
                    <div key={it.id} className={`flex items-center gap-2 p-3 ${selectedId===it.id?"bg-gray-50":""}`}>
                      <button onClick={()=> setSelectedId(it.id)} className="flex-1 text-left text-sm truncate">{it.name}</button>
                      <button onClick={()=> setItems(arr=> arr.map(a=> a.id===it.id?{...a, visible:!a.visible}:a))} className="text-xs rounded-lg border px-2 py-1">{it.visible?"Hide":"Show"}</button>
                      <button onClick={()=> setItems(arr=> arr.filter(a=> a.id!==it.id))} className="text-xs rounded-lg border px-2 py-1 text-red-600 border-red-200">Del</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="fixed bottom-4 inset-x-0 px-4 md:hidden pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-md bg-white border border-gray-200 shadow-lg rounded-2xl flex items-center justify-between px-3 py-2">
          <label className="text-xs flex items-center gap-2"><span>Color</span><input type="color" value={shirtColor} onChange={(e)=>setShirtColor(e.target.value)} className="h-7 w-10 rounded" /></label>
          <button onClick={()=> setRightOpen(true)} className="text-xs px-3 py-1.5 rounded-xl border">Open Controls</button>
          <button onClick={downloadPNG} className="text-xs px-3 py-1.5 rounded-xl bg-gray-900 text-white">PNG</button>
        </div>
      </div>
    </div>
  );
}

function SelectableDecal({ item, isSelected, onSelect, selectedObjRef }) {
  const localRef = useRef();
  const handleReady = (obj) => {
    if (localRef.current !== obj) localRef.current = obj;
    if (isSelected && selectedObjRef) selectedObjRef.current = obj;
  };
  useEffect(()=>{ if (isSelected && selectedObjRef && localRef.current) selectedObjRef.current = localRef.current; }, [isSelected, selectedObjRef]);
  if (!item.visible) return null;
  return (
    <group onPointerDown={(e)=>{ e.stopPropagation(); onSelect(); }}>
      <Decal item={item} selected={isSelected} onObjectReady={handleReady} />
    </group>
  );
}
