import { AnimatePresence } from "motion/react";
import { useGeneralContext } from "../../context/GeneralContext";
import CartSection from "../Cart/CartSection";
import AuthContainer from "./AuthContainer";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useAuthContext } from "../../context/AuthContext";
import { ToastContainer } from "react-toastify";
import { useCartContext } from "../../context/CartContext";
import { Outlet } from "react-router-dom";

export default function MainLayout({ children }) {
  const { showSidebar } = useGeneralContext();
  const { showCart } = useCartContext();
  const { showAuthContainer } = useAuthContext();

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
      <Outlet />
      <Footer />
      {showAuthContainer && <AuthContainer />}
      <AnimatePresence>
        {showCart && <CartSection />}
        {showSidebar && <Sidebar />}
      </AnimatePresence>
      <ToastContainer />
    </div>
  );
}
