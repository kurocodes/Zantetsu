import { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", form);
    alert("Your order has been placed! ⚔️");
  };

  return (
    <div className="min-h-screen bg-bgSoft text-bgLight font-body p-6">
      <h1 className="font-heading text-3xl text-accentGold mb-6">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-bgMuted p-6 rounded-2xl shadow-lg max-w-2xl mx-auto space-y-4"
      >
        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-bgSoft text-bgLight focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-bgSoft text-bgLight focus:outline-none"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1 text-sm font-medium">Address</label>
          <textarea
            name="address"
            rows="3"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-bgSoft text-bgLight focus:outline-none"
          />
        </div>

        {/* City + Postal */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-bgSoft text-bgLight focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-bgSoft text-bgLight focus:outline-none"
            />
          </div>
        </div>

        {/* Payment */}
        <div>
          <label className="block mb-2 text-sm font-medium">Payment Method</label>
          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-bgSoft text-bgLight focus:outline-none"
          >
            <option value="cod">Cash on Delivery</option>
            <option value="card">Credit / Debit Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-highlight text-white py-3 rounded-lg font-medium hover:bg-accentGold hover:text-bgDark transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
