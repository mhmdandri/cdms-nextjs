"use client";
import {
  Building,
  Container,
  Eye,
  EyeOff,
  Loader,
  Lock,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { useRouter } from "@bprogress/next";
import React, { useState } from "react";
import { toast } from "sonner";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      setError("");

      if (!agreeTerms) {
        setError("Harap ceklist syarat dan ketentuan");
        return;
      }

      if (password !== confirmPassword) {
        setError("Password tidak cocok");
        return;
      }

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          username,
          fullname: fullName,
          password,
          confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      setTimeout(() => {
        router.push("/auth/login");
        router.refresh();
      }, 3000);

      toast.success("Akun berhasil dibuat, sedang menuju ke halaman login");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan, silahkan coba lagi",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="flex-1 flex items-center justify-center p-8 
      bg-linear-to-b from-background to-muted/40 overflow-y-auto"
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="lg:hidden text-center mb-8">
          <div
            className="inline-flex items-center justify-center w-16 h-16 
            bg-primary rounded-2xl mb-4"
          >
            <Container className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">CDMS</h2>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-2xl shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Create Account
            </h2>
            <p className="text-muted-foreground">Start your free trial today</p>
          </div>

          {error && (
            <div
              className="bg-destructive/10 border border-destructive/30 
              rounded-lg p-3 mb-4"
            >
              <p className="text-destructive text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* SECTION */}
            <div className="border border-border rounded-2xl p-4">
              <h1 className="font-semibold text-foreground mb-2">
                Company Information
              </h1>

              <div className="space-y-3">
                {[
                  {
                    id: "company",
                    icon: Building,
                    value: name,
                    setter: setName,
                    placeholder: "Your company name",
                  },
                  {
                    id: "email",
                    icon: Mail,
                    value: email,
                    setter: setEmail,
                    placeholder: "your.email@company.com",
                  },
                  {
                    id: "phone",
                    icon: Phone,
                    value: phone,
                    setter: setPhone,
                    placeholder: "+1 (555) 000-0000",
                  },
                ].map((field) => (
                  <div key={field.id}>
                    <div className="relative">
                      <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        value={field.value}
                        onChange={(e) => field.setter(e.target.value)}
                        disabled={isLoading}
                        placeholder={field.placeholder}
                        className="w-full pl-10 pr-4 py-3 
                        bg-background border border-border 
                        rounded-lg text-foreground 
                        focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ACCOUNT */}
            <div className="border border-border rounded-2xl p-4">
              <h1 className="font-semibold text-foreground mb-2">
                Account Information
              </h1>

              <div className="space-y-3">
                {/* Username */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    disabled={isLoading}
                    className="focus:outline-none w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-ring"
                  />
                </div>

                {/* Fullname */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name"
                    disabled={isLoading}
                    className="focus:outline-none w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-ring"
                  />
                </div>

                {/* Password */}
                {[
                  {
                    value: password,
                    setter: setPassword,
                    show: showPassword,
                    setShow: setShowPassword,
                  },
                  {
                    value: confirmPassword,
                    setter: setConfirmPassword,
                    show: showConfirmPassword,
                    setShow: setShowConfirmPassword,
                  },
                ].map((field, i) => (
                  <div key={i} className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type={field.show ? "text" : "password"}
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      placeholder={i === 0 ? "Password" : "Confirm password"}
                      className="focus:outline-none w-full pl-10 pr-12 py-3 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-ring"
                    />
                    <button
                      type="button"
                      onClick={() => field.setShow(!field.show)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {field.show ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 accent-primary"
              />
              I agree to the{" "}
              <span className="text-primary cursor-pointer">Terms</span> and{" "}
              <span className="text-primary cursor-pointer">Privacy</span>
            </label>

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg font-medium 
              bg-primary text-primary-foreground 
              hover:bg-primary/90 transition-all shadow-sm"
            >
              {isLoading ? (
                <Loader className="animate-spin mx-auto" />
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/auth/login")}
              className="text-primary font-medium"
            >
              Sign In
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          © 2026 CDMS. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Form;
