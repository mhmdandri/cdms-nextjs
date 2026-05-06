"use client";
import { signIn } from "next-auth/react";
import { Container, Eye, EyeOff, Loader, Lock, User } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "@bprogress/next/app";

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

      if (res?.error) {
        if (res?.error === "CredentialsSignin") {
          setError("Credentials does not match");
        } else {
          setError("Something went wrong!");
        }
        return;
      }

      router.push("/dashboard", { scroll: false, startPosition: 0.3 });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong!");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <div className="lg:hidden text-center mb-8">
        <div
          className="inline-flex items-center justify-center w-16 h-16 
          bg-primary rounded-2xl mb-4 shadow-sm"
        >
          <Container className="w-10 h-10 text-primary-foreground" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground">CDMS</h2>
      </div>

      {/* Card */}
      <div className="bg-card border border-border rounded-2xl shadow-lg p-8">
        <div className="mb-2">
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Sign In
          </h2>
          <p className="text-muted-foreground">
            Enter your credentials to access your account
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 text-center">
            <p className="text-sm text-destructive">{error}</p>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="johndoe"
                className="w-full pl-10 pr-4 py-3 
                bg-background border border-border 
                rounded-lg text-foreground 
                focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full pl-10 pr-12 py-3 
                bg-background border border-border 
                rounded-lg text-foreground 
                focus:outline-none focus:ring-2 focus:ring-ring"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-primary"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-sm text-primary hover:opacity-80 font-medium"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-lg font-medium 
            bg-primary text-primary-foreground 
            hover:bg-primary/90 
            transition-all duration-200 
            shadow-sm hover:shadow-md"
          >
            {isLoading ? (
              <Loader className="animate-spin w-5 h-5 mx-auto" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            Need help?{" "}
            <button className="text-primary hover:opacity-80 font-medium">
              Contact Support
            </button>
          </p>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-8">
        © 2026 CDMS. All rights reserved.
      </p>
    </div>
  );
};

export default Form;
