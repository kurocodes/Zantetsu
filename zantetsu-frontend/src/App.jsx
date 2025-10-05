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

import ProtectedRoute from "./admin/utils/ProtectedRoute";
import AdminLayout from "./admin/components/Layouts/AdminLayout";
import DashboardPage from "./admin/pages/DashboardPage";
import OrdersPage from "./admin/pages/OrdersPage";
import ProductsPage from "./admin/pages/ProductsPage";

export default function App() {
  const isAdmin = true;

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* User-facing routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/return-and-refund" element={<ReturnPolicy />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/order-confirmation/:id"
            element={<OrderConfirmation />}
          />
        </Route>

        {/* admin routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute isAdmin={isAdmin}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </>
  );
}
