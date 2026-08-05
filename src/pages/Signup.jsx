import { useState } from "react";
import {
  Wallet,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    if (!form.agree) {
      return toast.error("Please accept Terms & Conditions");
    }

    try {
      setLoading(true);

      const { data } = await api.post("/auth/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Account Created Successfully 🎉");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#071A16]">
      <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-emerald-500/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#10b98115,transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8 py-10 lg:px-16">
        <div className="hidden w-[48%] lg:block">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-[30px] bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-[0_25px_70px_rgba(16,185,129,.35)]">
              <Wallet size={36} />
            </div>

            <div>
              <h1 className="text-5xl font-black tracking-tight text-white">
                Ledgerly
              </h1>

              <p className="mt-2 text-sm uppercase tracking-[0.35em] text-emerald-300">
                Personal Finance
              </p>
            </div>
          </div>

          <h2 className="mt-24 text-7xl font-black leading-[0.92] tracking-tight text-white">
            Join.
            <br />
            Track.
            <br />
            Grow.
          </h2>

          <p className="mt-10 max-w-xl text-xl leading-10 text-slate-300">
            Create your free account and start tracking expenses, managing
            budgets and building healthier financial habits.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <TrendingUp size={28} className="text-emerald-400" />

              <h3 className="mt-5 text-4xl font-bold text-white">50K+</h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Happy Users
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <ShieldCheck size={28} className="text-cyan-400" />

              <h3 className="mt-5 text-4xl font-bold text-white">100%</h3>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Secure Platform
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-[42%]">
          <div className="w-full max-w-xl rounded-[40px] border border-slate-200 bg-white p-10 shadow-[0_40px_90px_rgba(0,0,0,.35)] dark:border-slate-700 dark:bg-slate-900">
            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Create Account ✨
            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Sign Up
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-500 dark:text-slate-400">
              Create your account and start managing your finances smarter.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Full Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-5 text-[15px] shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-slate-800 dark:focus:ring-emerald-900/40"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Email Address
                </label>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-5 text-[15px] shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-slate-800 dark:focus:ring-emerald-900/40"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Create Password"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-14 text-[15px] shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-slate-800 dark:focus:ring-emerald-900/40"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:text-slate-500 dark:hover:bg-slate-700 dark:hover:text-white"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-14 text-[15px] shadow-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-slate-800 dark:focus:ring-emerald-900/40"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:text-slate-500 dark:hover:bg-slate-700 dark:hover:text-white"
                  >
                    {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 accent-emerald-600"
                />

                <span>
                  I agree to the{" "}
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    Terms
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    Privacy Policy
                  </span>
                </span>
              </label>
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 py-4 text-lg font-bold text-white shadow-[0_20px_45px_rgba(16,185,129,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(16,185,129,.45)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Account"}

                {!loading && (
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                </div>

                <div className="relative flex justify-center">
                  <span className="bg-white px-5 text-sm font-medium text-slate-400 dark:bg-slate-900 dark:text-slate-500">
                    OR
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white py-4 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-6 w-6"
                />
                Continue with Google
              </button>

              <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5 dark:border-emerald-900/40 dark:bg-emerald-900/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800 dark:text-white">
                      Bank-Level Security
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      Your account is protected with bank-level encryption and
                      secure authentication.
                    </p>
                  </div>
                </div>
              </div>
            </form>

            <div className="mt-10 border-t border-slate-200 pt-8 dark:border-slate-700">
              <p className="text-center text-slate-500 dark:text-slate-400">
                Already have an account?
              </p>

              <Link
                to="/login"
                className="mt-5 flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 py-4 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                Sign In
              </Link>
            </div>

            <div className="mt-8 flex justify-center gap-8 border-t border-slate-100 pt-6 text-sm text-slate-400 dark:border-slate-700 dark:text-slate-500">
              <span>🔒 Secure</span>

              <span>⚡ Fast</span>

              <span>🚀 Free Forever</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
