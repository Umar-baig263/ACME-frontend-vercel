import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  const [wishlistAnimate, setWishlistAnimate] = useState(false);
  const [wishlistPopup, setWishlistPopup] = useState(false);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Animation trigger function
  const triggerWishlistAnimation = () => {
    setWishlistAnimate(false); // reset
    setTimeout(() => setWishlistAnimate(true), 10); // start animation
    setTimeout(() => setWishlistAnimate(false), 1010); // stop after 1s
    setWishlistPopup(true);
    setTimeout(() => setWishlistPopup(false), 2000); // popup 2s
  };

  const addToWishlist = (product) => {
    const exist = wishlist.find((p) => p.id === product.id);
    if (!exist) {
      setWishlist([
        ...wishlist,
        { ...product, quantity: 1, price: Number(product.price) || 0 },
      ]);
      triggerWishlistAnimation();
    }
  };

  const removeFromWishlist = (id) =>
    setWishlist(wishlist.filter((p) => p.id !== id));

  const clearWishlist = () => setWishlist([]);

  const updateQuantity = (id, qty) => {
    setWishlist(
      wishlist.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, qty) } : p,
      ),
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        updateQuantity,
        wishlistAnimate,
        wishlistPopup,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
