import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART
  const addToCart = (product) => {
    const customizationHash = product.customization ? JSON.stringify(product.customization) : "default";

    const cartProduct = {
      ...product,
      price: Number(product.price) || 0, // <-- ensure price is number
      qty: product.qty || 1, // <-- default quantity
      cartKey: `${product.id}-${product.selectSize || "default"}-${
        product.selectColor || "default"
      }-${customizationHash}`,
    };

    setCart((prevCart) => {
      const exist = prevCart.find((p) => p.cartKey === cartProduct.cartKey);

      if (exist) {
        return prevCart.map((p) =>
          p.cartKey === cartProduct.cartKey
            ? { ...p, qty: p.qty + cartProduct.qty }
            : p,
        );
      } else {
        return [...prevCart, cartProduct];
      }
    });
  };

  const updateCartItemQty = (cartKey, type) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.cartKey === cartKey) {
          const newQty =
            type === "inc" ? item.qty + 1 : Math.max(item.qty - 1, 1);
          return { ...item, qty: newQty };
        }
        return item;
      }),
    );
  };

  const removeFromCart = (cartKey) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartKey !== cartKey));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        updateCartItemQty,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
