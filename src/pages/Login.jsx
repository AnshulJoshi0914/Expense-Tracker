import { useState } from "react";
import {
  Wallet,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
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

    try {
      setLoading(true);

      const { data } = await api.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login Successful 🎉");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#061610] via-[#0b2b22] to-[#061610]">
      <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-emerald-500/20 blur-[160px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8 py-10 lg:px-16">
        <div className="hidden w-[48%] flex-col justify-between lg:flex">
          <div>
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-[30px] bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-[0_20px_60px_rgba(16,185,129,.35)]">
                <Wallet size={38} />
              </div>

              <div>
                <h1 className="text-5xl font-black tracking-tight text-white">
                  Ledgerly
                </h1>

                <p className="mt-2 uppercase tracking-[0.35em] text-emerald-300">
                  Smart Finance
                </p>
              </div>
            </div>

            <h2 className="mt-24 text-7xl font-black leading-[0.92] tracking-tight text-white">
              Spend.
              <br />
              Save.
              <br />
              Grow.
            </h2>

            <p className="mt-10 max-w-xl text-xl leading-10 text-slate-300">
              Manage your money effortlessly with beautiful analytics,
              intelligent budgeting and real-time expense tracking.
            </p>

            <div className="mt-16 grid grid-cols-3 gap-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <TrendingUp size={30} className="text-emerald-400" />

                <h3 className="mt-5 text-4xl font-bold text-white">+28%</h3>

                <p className="mt-2 text-slate-300">Monthly Savings</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <ShieldCheck size={30} className="text-cyan-400" />

                <h3 className="mt-5 text-4xl font-bold text-white">100%</h3>

                <p className="mt-2 text-slate-300">Secure</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <BarChart3 size={30} className="text-yellow-400" />

                <h3 className="mt-5 text-4xl font-bold text-white">AI</h3>

                <p className="mt-2 text-slate-300">Insights</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-[42%]">
          <div className="w-full max-w-lg rounded-[28px] border border-slate-200 bg-white/95 p-10 shadow-[0_35px_80px_rgba(0,0,0,.35)] backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95">
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
              Welcome Back 👋
            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Sign In
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-500 dark:text-slate-400">
              Continue to your dashboard and manage your finances.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-7">
              {" "}
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
                    placeholder="Enter your email"
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
                    placeholder="Enter your password"
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
              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                    className="h-4 w-4 accent-emerald-600"
                  />
                  Remember Me
                </label>

                <Link
                  to="/forgot-password"
                  className="font-semibold text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 py-4 text-lg font-bold text-white shadow-[0_20px_45px_rgba(16,185,129,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(16,185,129,.45)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing In..." : "Sign In"}

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
                      Your financial information is encrypted and protected
                      using modern security standards.
                    </p>
                  </div>
                </div>
              </div>
            </form>

            <div className="mt-10 border-t border-slate-200 pt-8 dark:border-slate-700">
              <p className="text-center text-slate-500 dark:text-slate-400">
                Don't have an account?
              </p>

              <Link
                to="/signup"
                className="mt-5 flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 py-4 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                Create Free Account
              </Link>
            </div>

            <div className="mt-8 flex justify-center gap-8 border-t border-slate-100 pt-6 text-sm text-slate-400 dark:border-slate-700 dark:text-slate-500">
              <span>🔒 Secure</span>

              <span>⚡ Fast</span>

              <span>💳 Trusted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
