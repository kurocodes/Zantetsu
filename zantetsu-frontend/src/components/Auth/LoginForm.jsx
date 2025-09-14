"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../lib/validation/authSchemas";
import { useLogin } from "../../hooks/useAuth";
import { useAuthContext } from "../../context/AuthContext";

export function LoginForm() {
  const { mutate: login, isPending, error } = useLogin();
  const { setShowAuthContainer } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    login(data, {
      onError: (err) => {
        console.error("Login failed:", err);
        // show toast / error message
      },
      onSuccess: (user) => {
        console.log("Login success:", user);
        setShowAuthContainer(false);
        // redirect to admin if user is admin
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 font-body"
    >
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full px-4 py-2 rounded-lg bg-bgSoft text-white outline-none border border-gray-600 focus:border-color-accentGold"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="w-full px-4 py-2 rounded-lg bg-bgSoft text-white outline-none border border-gray-600 focus:border-color-accentGold"
        />
        {errors.password && (
          <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full py-2 rounded-lg bg-highlight font-heading tracking-wide hover:opacity-90 transition"
      >
        {isPending ? "Logging in..." : "Login"}
      </button>

      {error && (
        <p className="text-red-400 text-sm">
          {error.response?.data?.message || error.message}
        </p>
      )}
    </form>
  );
}
