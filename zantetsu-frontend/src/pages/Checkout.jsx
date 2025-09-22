import { useCartContext } from "../context/CartContext";
import FloatingInput from "../components/Common/FloatingInput";
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema } from "../lib/validation/checkoutSchema";
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { usePlaceOrder } from "../hooks/useOrders";
import { useGeneralContext } from "../context/GeneralContext";
import { BeatLoader } from "react-spinners";

export default function Checkout() {
  const { cart } = useCartContext();
  const { user, setShowAuthContainer } = useAuthContext();
  const { mutate: placeOrder, isPending, isError } = usePlaceOrder();
  const { navigate } = useGeneralContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      payment: "cod",
    },
  });

  const subtotal = cart.reduce(
    (acc, item) => acc + item.discountedPrice * item.qty,
    0
  );

  const shipping = subtotal > 0 ? 5.99 : 0; // flat shipping example
  const total = subtotal + shipping;

  const onSubmit = (data) => {
    if (!user) {
      setShowAuthContainer(true);
      toast.warning("Please login to place your order", {
        position: "bottom-right",
      });
      return;
    }

    const products = cart.map((item) => ({
      product: item.id,
      quantity: item.qty,
      price: item.discountedPrice,
    }));

    const orderData = {
      products,
      totalAmount: subtotal,
      shippingAddress: {
        fullName: data.name,
        email: data.email,
        address: data.address,
        city: data.city,
        postalCode: data.postalCode,
      },
      paymentMethod: data.payment.toUpperCase(),
    };

    placeOrder(orderData, {
      onSuccess: (order) => {
        sessionStorage.setItem("lastOrderId", order._id);
        navigate(`/order-confirmation/${order._id}`);
      },
      onError: (err) => {
        console.error(err);
        toast.error("Something went wrong placing your order", {
          position: "bottom-right",
        });
      },
    });
  };

  return (
    <div className="min-h-screen bg-bgSoft text-bgLight font-body p-6">
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left: Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="xs:px-6">
          <h1 className="font-heading text-3xl mb-4">Checkout</h1>
          <div className="space-y-6">
            {/* Name */}
            <div>
              <FloatingInput label="Full Name" {...register("name")} />
              {errors.name && (
                <p className="text-red-400 text-xs ps-2 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <FloatingInput
                type="email"
                label="Email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-400 text-xs ps-2 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <FloatingInput
                textarea
                placeholder="Enter your address"
                rows={3}
                {...register("address")}
              />
              {errors.address && (
                <p className="text-red-400 text-xs ps-2 mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* City + Postal */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <FloatingInput label="City" {...register("city")} />
                {errors.city && (
                  <p className="text-red-400 text-xs ps-2 mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div>
                <FloatingInput
                  label="Postal Code"
                  {...register("postalCode")}
                />
                {errors.postalCode && (
                  <p className="text-red-400 text-xs ps-2 mt-1">
                    {errors.postalCode.message}
                  </p>
                )}
              </div>
            </div>

            {/* Payment */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Payment Method
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-bgMuted rounded-lg cursor-pointer hover:bg-bgDark/30 transition">
                  <input
                    type="radio"
                    value="cod"
                    {...register("payment")}
                    className=" peer"
                  />
                  <FaMoneyBillWave className="text-green-400 text-lg" />
                  <span>Cash on Delivery</span>
                </label>

                <label className="flex items-center gap-3 p-3 bg-bgMuted rounded-lg cursor-pointer hover:bg-bgDark/30 transition">
                  <input
                    type="radio"
                    value="card"
                    {...register("payment")}
                    className=" peer"
                  />
                  <FaCreditCard className="text-blue-400 text-lg" />
                  <span>Credit / Debit Card</span>
                </label>

                <label className="flex items-center gap-3 p-3 bg-bgMuted rounded-lg cursor-pointer hover:bg-bgDark/30 transition">
                  <input
                    type="radio"
                    value="upi"
                    {...register("payment")}
                    className=" peer"
                  />
                  <SiGooglepay className="text-purple-400 text-lg" />
                  <span>UPI</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-highlight text-white py-3 mt-4 rounded-lg font-medium hover:bg-accentGold hover:text-bgDark transition"
          >
            {isPending ? <BeatLoader color="white" /> : "Place Order"}
          </button>
        </form>

        {/* Right: Order Summary */}
        <div className="xs:p-6 h-fit sticky top-6">
          <h2 className="font-heading text-xl mb-4">Order Summary</h2>

          <div className="space-y-4 max-h-64 overflow-y-auto pr-2 hide-scrollbar">
            {cart.length > 0 ? (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex gap-4 items-center">
                    <div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 rounded"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-400">Qty: {item.qty}</p>
                    </div>
                  </div>
                  <p className="font-medium">
                    ${(item.discountedPrice * item.qty).toFixed(2)}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-400">Your cart is empty~</p>
            )}
          </div>

          <div className="border-t border-bgMuted mt-4 pt-4 space-y-2 text-lg">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-accentGold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-accentGold text-black font-medium rounded text-base py-2 cursor-pointer hover:bg-accentGold/80 transition duration-200">
              ADD COUPON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
