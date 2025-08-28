"use client";
import { useState } from "react";
import { useGeneralContext } from "../../context/GeneralContext";

export default function AuthContainer() {
  const { showAuthContainer, setShowAuthContainer } = useGeneralContext();

  const [activeTab, setActiveTab] = useState("login");

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black/50"
      onClick={() => setShowAuthContainer(false)}
    >
      <div className="fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] bg-bgMuted rounded-xl p-6 text-white" onClick={(e) => e.stopPropagation()} >
        {/* Tabs */}
        <div className="flex justify-around mb-6 border-b border-gray-600">
          <button
            className={`pb-2 font-heading text-lg transition-colors ${
              activeTab === "login"
                ? "text-color-accentGold border-b-2 border-color-accentGold"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`pb-2 font-heading text-lg transition-colors ${
              activeTab === "signup"
                ? "text-color-accentGold border-b-2 border-color-accentGold"
                : "text-gray-400"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Forms */}
        {activeTab === "login" ? <LoginForm /> : <SignUpForm />}

        {/* Extra links */}
        <div className="mt-4 text-center text-sm text-gray-400">
          {activeTab === "login" ? (
            <p>
              Don’t have an account?{" "}
              <button
                onClick={() => setActiveTab("signup")}
                className="text-highlight hover:underline"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setActiveTab("login")}
                className="text-highlight hover:underline"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <form className="flex flex-col gap-4 font-body">
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 rounded-lg bg-bgSoft text-white outline-none border border-gray-600 focus:border-color-accentGold"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 rounded-lg bg-bgSoft text-white outline-none border border-gray-600 focus:border-color-accentGold"
      />
      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-highlight font-heading tracking-wide hover:opacity-90 transition"
      >
        Login
      </button>
    </form>
  );
}

function SignUpForm() {
  return (
    <form className="flex flex-col gap-4 font-body">
      <input
        type="text"
        placeholder="Username"
        className="w-full px-4 py-2 rounded-lg bg-bgSoft text-white outline-none border border-gray-600 focus:border-color-accentGold"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 rounded-lg bg-bgSoft text-white outline-none border border-gray-600 focus:border-color-accentGold"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 rounded-lg bg-bgSoft text-white outline-none border border-gray-600 focus:border-color-accentGold"
      />
      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-highlight font-heading tracking-wide hover:opacity-90 transition"
      >
        Sign Up
      </button>
    </form>
  );
}
