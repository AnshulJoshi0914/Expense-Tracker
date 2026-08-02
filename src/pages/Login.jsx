import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Wallet, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

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

  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 flex">
      {/* LEFT */}

      <div className="hidden lg:flex w-1/2 items-center justify-center p-14">
        <div className="max-w-lg">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white">
              <Wallet size={32} />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-white">Ledgerly</h1>

              <p className="text-slate-400">Smart Expense Tracking</p>
            </div>
          </div>

          <h2 className="mt-16 text-6xl leading-tight font-bold text-white">
            Track.
            <br />
            Save.
            <br />
            Grow.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-300">
            Take control of your personal finances with beautiful analytics,
            budgets and expense tracking.
          </p>
        </div>
      </div>

      {/* RIGHT */}

      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md rounded-[36px] bg-white p-10 shadow-[0_25px_70px_rgba(0,0,0,.25)]">
          <h2 className="text-4xl font-bold text-slate-800">Welcome Back 👋</h2>

          <p className="mt-3 text-slate-500">
            Sign in to continue to your dashboard.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label className="text-sm font-medium text-slate-600">
                Email Address
              </label>

              <div className="relative mt-2">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:bg-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-600">
                Password
              </label>

              <div className="relative mt-2">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-14 outline-none transition focus:border-emerald-500 focus:bg-white"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 text-sm text-slate-600">
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
                className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 py-4 font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Sign In
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>

              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-sm text-slate-400">OR</span>
              </div>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 py-4 font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>
          </form>

          <p className="mt-8 text-center text-slate-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
