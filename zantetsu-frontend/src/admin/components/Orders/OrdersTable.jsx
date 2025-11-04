import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function OrdersTable({ orders = [] }) {
  // For now, let's keep mock data until backend integration
  const sampleOrders = [
    {
      _id: "ORD2632",
      user: "Brooklyn Zoe",
      amount: 1000,
      payment: "COD",
      status: "Pending",
      date: "1 Nov 2025",
    },
    {
      _id: "ORD2633",
      user: "Aiden Frost",
      amount: 2150,
      payment: "UPI",
      status: "Delivered",
      date: "3 Nov 2025",
    },
    {
      _id: "ORD2634",
      user: "Miyu Aihara 💋",
      amount: 1450,
      payment: "CARD",
      status: "Processing",
      date: "4 Nov 2025",
    },
  ];

  const data = orders.length > 0 ? orders : sampleOrders;

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500/20 text-yellow-300";
      case "Processing":
        return "bg-blue-500/20 text-blue-300";
      case "Shipped":
        return "bg-purple-500/20 text-purple-300";
      case "Delivered":
        return "bg-green-500/20 text-green-300";
      case "Cancelled":
        return "bg-red-500/20 text-red-300";
      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="hidden md:grid grid-cols-[repeat(6,1fr)_auto] px-4 py-3 bg-[hsl(0,0%,23%)] rounded-md text-sm font-semibold text-bgLight/80">
        <span>Order ID</span>
        <span>User</span>
        <span>Amount</span>
        <span>Payment</span>
        <span>Status</span>
        <span>Date</span>
        <span>Actions</span>
      </div>

      {/* Rows */}
      {data.map((order) => (
        <div
          key={order._id}
          className="grid grid-cols-[1fr_1fr_auto] md:grid-cols-[repeat(6,1fr)_auto] items-center gap-2 px-4 py-3 border-2 border-[hsl(0,0%,23%)] rounded-md text-sm text-bgLight/70 hover:bg-[hsl(0,0%,15%)] transition"
        >
          <span className="font-medium">{order._id}</span>
          <span>{order.user}</span>
          <span className="hidden md:block">₹{order.amount.toLocaleString()}</span>
          <span className="hidden md:block">{order.payment}</span>
          <span className={`hidden md:inline-block max-w-30 w-full px-3 py-1 rounded-full text-xs font-semibold text-center ${getStatusColor(order.status)}`}>
            {order.status}
          </span>
          <span className="hidden md:block">{order.date}</span>
          <div className="flex items-center gap-3 text-base">
            <button className="hover:text-blue-400 transition">
              <FiEdit2 />
            </button>
            <button className="hover:text-red-400 transition">
              <FiTrash2 />
            </button>
          </div>
        </div>
      ))}

      {/* If no orders */}
      {data.length === 0 && (
        <div className="text-center py-6 text-sm text-bgLight/60 italic">
          No orders found~
        </div>
      )}
    </div>
  );
}
