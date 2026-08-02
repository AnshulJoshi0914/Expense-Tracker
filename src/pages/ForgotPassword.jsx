// import { Mail, ArrowLeft, Send, Wallet } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// function ForgotPassword() {
//   const [email, setEmail] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(email);
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 flex items-center justify-center p-8">

//       <div className="w-full max-w-md rounded-[36px] bg-white p-10 shadow-[0_25px_70px_rgba(0,0,0,.25)]">

//         <div className="flex items-center gap-4 mb-8">

//           <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white">

//             <Wallet size={26} />

//           </div>

//           <div>

//             <h2 className="text-2xl font-bold text-slate-800">
//               Forgot Password
//             </h2>

//             <p className="text-slate-500 text-sm">
//               We'll send a reset link.
//             </p>

//           </div>

//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6"
//         >

//           <div>

//             <label className="text-sm font-medium text-slate-600">
//               Email Address
//             </label>

//             <div className="relative mt-2">

//               <Mail
//                 size={18}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//               />

//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 outline-none transition focus:border-emerald-500 focus:bg-white"
//                 required
//               />

//             </div>

//           </div>

//           <button
//             type="submit"
//             className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 py-4 text-white font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition"
//           >

//             <Send size={18} />

//             Send Reset Link

//           </button>

//         </form>

//         <Link
//           to="/"
//           className="mt-8 flex items-center justify-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
//         >

//           <ArrowLeft size={18} />

//           Back to Login

//         </Link>

//       </div>

//     </div>
//   );
// }

// export default ForgotPassword;

import { useState } from "react";
import {
  Wallet,
  Mail,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  KeyRound,
} from "lucide-react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
  }
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

                <h1 className="text-5xl font-black text-white">

                  Ledgerly

                </h1>

                <p className="mt-2 uppercase tracking-[0.35em] text-emerald-300">

                  Smart Finance

                </p>

              </div>

            </div>

            <h2 className="mt-24 text-7xl font-black leading-[0.92] text-white">

              Recover.
              <br />
              Reset.
              <br />
              Continue.

            </h2>

            <p className="mt-10 max-w-xl text-xl leading-10 text-slate-300">

              Forgot your password? Don't worry. We'll send a secure reset link
              so you can access your account again.

            </p>

            <div className="mt-16 grid grid-cols-2 gap-5">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                <TrendingUp
                  size={30}
                  className="text-emerald-400"
                />

                <h3 className="mt-5 text-4xl font-bold text-white">

                  24/7

                </h3>

                <p className="mt-2 text-slate-300">

                  Account Recovery

                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                <ShieldCheck
                  size={30}
                  className="text-cyan-400"
                />

                <h3 className="mt-5 text-4xl font-bold text-white">

                  Secure

                </h3>

                <p className="mt-2 text-slate-300">

                  Reset Process

                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="flex w-full justify-center lg:w-[42%]">

          <div className="w-full max-w-lg rounded-[38px] border border-white/20 bg-white p-10 shadow-[0_35px_80px_rgba(0,0,0,.35)]">

            <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">

              Password Recovery 🔐

            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900">

              Forgot Password

            </h2>

            <p className="mt-3 text-lg leading-8 text-slate-500">

              Enter your email address and we'll send you a password reset link.

            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-7"
            ><div>

  <label className="mb-2 block text-sm font-semibold text-slate-700">

    Email Address

  </label>

  <div className="relative">

    <Mail
      size={20}
      className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
    />

    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="john@example.com"
      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-14 pr-5 text-[15px] outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
      required
    />

  </div>

</div>

<button
  type="submit"
  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 py-4 text-lg font-bold text-white shadow-[0_20px_45px_rgba(16,185,129,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(16,185,129,.45)]"
>

  Send Reset Link

  <ArrowRight
    size={20}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />

</button>

<div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">

  <div className="flex items-start gap-4">

    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white">

      <KeyRound size={22} />

    </div>

    <div>

      <h3 className="font-semibold text-slate-800">

        Secure Password Reset

      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">

        We'll send a secure password reset link to your registered email address. The link expires after a limited time for your security.

      </p>

    </div>

  </div>

</div>

</form>

<div className="mt-10 border-t border-slate-200 pt-8">

  <p className="text-center text-slate-500">

    Remember your password?

  </p>

  <Link
    to="/login"
    className="mt-5 flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 py-4 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
  >

    Back to Login

  </Link>

</div>

<div className="mt-8 flex items-center justify-center gap-8 border-t border-slate-100 pt-6 text-sm text-slate-400">

  <span className="flex items-center gap-2">

    🔒 Secure

  </span>

  <span className="flex items-center gap-2">

    ⚡ Fast

  </span>

  <span className="flex items-center gap-2">

    📧 Instant Email

  </span>

</div>

</div>

</div>

</div>
</div>);
}

export default ForgotPassword;