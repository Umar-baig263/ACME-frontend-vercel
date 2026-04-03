import { Outlet, useLocation } from "react-router-dom";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { getScrollPosition } from "../utils/scrollPositions";
import RouteChangeListener from "../utils/RouteChangeListener";
import Header from "../views/Website/components/main/Header/Header";
import Footer from "../views/Website/components/main/Footer/Footer";
// import Header from "../views/webComponents/header/Header";
// import Footer from "../views/webComponents/footer/Footer";

export default function WebsiteLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMenu, setMoblieMenu] = useState("Menu");

  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <RouteChangeListener />
      {/* <Header /> */}
      <Header/>
      <Outlet />
      <Footer/>
      {/* <Footer /> */}
      {/* <ChatbotComponent setMoblieMenu={setMoblieMenu} setIsMobileMenuOpen={setIsMobileMenuOpen} mobileMenu={mobileMenu} isMobileMenuOpen={isMobileMenuOpen} /> */}
    </div>
  );
}
