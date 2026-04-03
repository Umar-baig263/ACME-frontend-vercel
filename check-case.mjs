import fs from 'fs';
import path from 'path';

function getTruePath(filePath) {
    const parts = path.resolve(filePath).split(path.sep);
    let currentPath = parts[0];
    if (currentPath.endsWith(':')) currentPath += path.sep; // Handle Windows drive letters properly

    for (let i = 1; i < parts.length; i++) {
        if (!parts[i]) continue;
        try {
            const dir = fs.readdirSync(currentPath);
            const trueCase = dir.find(d => d.toLowerCase() === parts[i].toLowerCase());
            if (!trueCase) return null;
            currentPath = path.join(currentPath, trueCase);
        } catch (e) {
            return null;
        }
    }
    return currentPath;
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                traverse(fullPath);
            }
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
            let match;
            while ((match = importRegex.exec(content)) !== null) {
                const importPath = match[1];
                if (importPath.startsWith('.')) {
                    let resolvedBase = path.resolve(path.dirname(fullPath), importPath);
                    let exts = ['', '.jsx', '.js', '.png', '.jpg', '.svg', '.json', '/index.js', '/index.jsx'];
                    
                    for (let ext of exts) {
                        let toCheck = resolvedBase + ext;
                        // For paths like /index.js, handle properly
                        if (ext.startsWith('/')) {
                           toCheck = path.join(resolvedBase, ext.substring(1));
                        }
                        
                        // We check via case-insensitive way if the file exists by getting true path
                        let trueCase = getTruePath(toCheck);
                        if (trueCase) {
                            if (toCheck !== trueCase) {
                                console.log(`Case mismatch in ${fullPath}`);
                                console.log(`  Imported: "${importPath}"`);
                                console.log(`  True Path: ${trueCase}`);
                            }
                            break;
                        }
                    }
                }
            }
        }
    }
}

traverse(path.join(process.cwd(), 'src'));
