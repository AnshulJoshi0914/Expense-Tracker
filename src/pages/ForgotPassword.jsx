import { Mail, ArrowLeft, Send, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 flex items-center justify-center p-8">

      <div className="w-full max-w-md rounded-[36px] bg-white p-10 shadow-[0_25px_70px_rgba(0,0,0,.25)]">

        <div className="flex items-center gap-4 mb-8">

          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white">

            <Wallet size={26} />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-slate-800">
              Forgot Password
            </h2>

            <p className="text-slate-500 text-sm">
              We'll send a reset link.
            </p>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:bg-white"
                required
              />

            </div>

          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 py-4 text-white font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition"
          >

            <Send size={18} />

            Send Reset Link

          </button>

        </form>

        <Link
          to="/"
          className="mt-8 flex items-center justify-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
        >

          <ArrowLeft size={18} />

          Back to Login

        </Link>

      </div>

    </div>
  );
}

export default ForgotPassword;