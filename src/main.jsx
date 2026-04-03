import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { ContextProvider } from "./contexts/contextProvider";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./contexts/cartContext";
import { WishlistProvider } from "./contexts/wishlistContext";
// import React from "react";

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <ContextProvider>
      <CartProvider>
        <WishlistProvider>
          <RouterProvider router={router} />
        </WishlistProvider>
      </CartProvider>
    </ContextProvider>
  </StrictMode>,
);
