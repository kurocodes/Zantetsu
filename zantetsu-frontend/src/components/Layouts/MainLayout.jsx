import { AnimatePresence } from "motion/react";
import { useGeneralContext } from "../../context/GeneralContext";
import CartSection from "../Cart/CartSection";
import AuthContainer from "./AuthContainer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  const {
    showAuthContainer,
    setShowAuthContainer,
    showCart,
    setShowCart,
    showSidebar,
  } = useGeneralContext();

  useEffect(() => {
    if (showCart || showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
      {showAuthContainer && <AuthContainer />}
      <AnimatePresence>
        {showCart && <CartSection />}
        {showSidebar && <Sidebar />}
      </AnimatePresence>
    </div>
  );
}
