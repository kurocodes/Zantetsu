import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function OrderConfirmation() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const lastOrderId = sessionStorage.getItem("lastOrderId");
    if (!lastOrderId || lastOrderId !== id) {
      // Not a valid order flow → kick user out
      navigate("/");
    }
  }, [id, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgSoft text-bgLight font-body px-4">
      <div className="bg-bgMuted p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="font-heading text-3xl text-accentGold mb-4">
          🎉 Order Placed!
        </h1>
        <p className="text-sm text-bgLight/80">
          Your order ID:
          <span className="block font-mono text-lg mt-1 text-highlight">
            {id}
          </span>
        </p>
        <p className="mt-4 text-bgLight/70">
          We’ll process your order soon. Thank you 💖
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full flex items-center justify-center gap-2 py-3 bg-highlight text-white rounded-lg font-medium hover:bg-accentGold hover:text-bgDark transition"
        >
          Continue Shopping <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
