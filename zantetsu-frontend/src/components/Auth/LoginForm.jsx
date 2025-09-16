"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../lib/validation/authSchemas";
import { useLogin } from "../../hooks/useAuth";
import { useAuthContext } from "../../context/AuthContext";
import { BeatLoader } from "react-spinners";
import { Bounce, toast } from "react-toastify";

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
        console.log(err);
        toast.error("Login failed", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      },
      onSuccess: (user) => {
        toast.success("Login successful", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
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
        {isPending ? <BeatLoader color="white" /> : "Login"}
      </button>

      {error && (
        <p className="text-red-400 text-sm">
          {error.response?.data?.message || error.message}
        </p>
      )}
    </form>
  );
}
