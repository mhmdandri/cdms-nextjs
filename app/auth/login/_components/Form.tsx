"use client";
import { signIn } from "next-auth/react";
import { Container, Eye, EyeOff, Loader, Lock, User } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Form = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        username,
        password,
        rememberMe,
        redirect: false,
      });
      console.log(res);
      if (res?.error) {
        if (res?.error === "CredentialsSignin") {
          setError("Username atau password salah");
        } else {
          setError("Terjadi kesalahan saat login");
        }
        return;
      }
      router.push("/dashboard");
      toast.success("Berhasil masuk, melanjutkan ke dashboard...");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Terjadi kesalahan saat login");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full max-w-md">
      <div className="lg:hidden text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1E3A8A] rounded-2xl mb-4">
          <Container className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">CDMS</h2>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign In</h2>
          <p className=" text-gray-600">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="mb-6 flex items-center justify-center">
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="username"
                autoComplete="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="johndoe"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="rememberMe" className="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <button
              type="button"
              className="text-sm text-[#1E3A8A] hover:text-blue-800 font-medium"
            >
              Forgot password?
            </button>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1E3A8A] text-white py-3 rounded-lg hover:bg-blue-800 transition-colors font-medium shadow-lg shadow-blue-500/30"
          >
            {isLoading ? (
              <div>
                <Loader className="animate-spin w-5 h-5 text-white mx-auto" />
              </div>
            ) : (
              <div>Masuk</div>
            )}
          </button>
        </form>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            Need help?{" "}
            <button className="text-[#1E3A8A] hover:text-blue-800 font-medium">
              Contact Support
            </button>
          </p>
        </div>
      </div>
      <p className="text-center text-xs text-gray-500 mt-8">
        © 2026 CDMS. All rights reserved.
      </p>
    </div>
  );
};

export default Form;
