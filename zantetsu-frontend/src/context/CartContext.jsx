import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      let newCart;
      if (exists) {
        // If already exists, increase qty
        newCart = prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        newCart = [
          ...prev,
          {
            id: product.id,
            title: product.title,
            discountedPrice: product.discountedPrice,
            image: product.images[0],
            qty: product.qty || 1,
          },
        ];
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
    toast.success("Product added to cart", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateStorage(updatedCart);
  };

  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    updateStorage(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } : item
    );
    updateStorage(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
