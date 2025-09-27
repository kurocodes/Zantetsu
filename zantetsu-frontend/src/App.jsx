import MainLayout from "./components/Layouts/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ReturnPolicy from "./pages/ReturnPolicy";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/Layouts/ScrollToTop";
import OrderConfirmation from "./pages/OrderConfirmation";
import CheckoutPage from "./pages/CheckoutPage";

export default function App() {
  return (
    <MainLayout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/return-and-refund" element={<ReturnPolicy />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation/:id" element={<OrderConfirmation />} />
      </Routes>
    </MainLayout>
  );
}
