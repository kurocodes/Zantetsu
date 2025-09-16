"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../lib/validation/authSchemas";
import { useRegister } from "../../hooks/useAuth";
import { useAuthContext } from "../../context/AuthContext";
import { BeatLoader } from "react-spinners";

export function SignUpForm() {
  const { mutate: signup, isPending, error } = useRegister();
  const { setShowAuthContainer } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data) => {
    signup(data, {
      onError: (err) => {
        console.log(err);
        toast.error("Signup failed", {
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
        toast.success("Signup successful", {
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
        // redirect
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
          type="text"
          placeholder="Username"
          {...register("username")}
          className="w-full px-4 py-2 rounded-lg bg-bgSoft text-white outline-none border border-gray-600 focus:border-color-accentGold"
        />
        {errors.username && (
          <p className="text-red-400 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>
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
        {isPending ? <BeatLoader color="white" /> : "Sign Up"}
      </button>

      {error && (
        <p className="text-red-400 text-sm">
          {error.response?.data?.message || error.message}
        </p>
      )}
    </form>
  );
}
