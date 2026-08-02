import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Bell,
  Moon,
  IndianRupee,
  Save,
  Shield,
  Camera,
} from "lucide-react";

function Settings() {
  const [form, setForm] = useState({
    name: "Anshu Joshi",
    email: "anshu@example.com",
    currency: "INR",
    notifications: true,
    darkMode: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="space-y-8">

      <div className="rounded-[32px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-[0_20px_50px_rgba(15,23,42,.18)]">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-slate-300">

              Account Settings

            </p>

            <h1 className="text-4xl font-bold mt-3">

              Manage Your Profile ⚙️

            </h1>

            <p className="text-slate-300 mt-3 max-w-xl leading-7">

              Update your personal information, security settings and
              application preferences.

            </p>

          </div>

          <div className="relative">

            <div className="h-28 w-28 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-4xl font-bold">

              AJ

            </div>

            <button className="absolute bottom-1 right-1 h-10 w-10 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg">

              <Camera size={18} />

            </button>

          </div>

        </div>

      </div>

      <div className="grid xl:grid-cols-3 gap-7">

        <div className="rounded-[32px] bg-white border border-slate-200 shadow-[0_12px_40px_rgba(15,23,42,.06)] p-7">

          <div className="flex flex-col items-center text-center">

            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-3xl font-bold text-white">

              AJ

            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-800">

              Anshu Joshi

            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-1">

              Premium User

            </p>

            <div className="mt-6 w-full rounded-2xl bg-slate-50 p-4">

              <div className="flex justify-between">

                <span className="text-slate-500 dark:text-slate-400">

                  Plan

                </span>

                <span className="font-semibold text-emerald-600">

                  Premium

                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="xl:col-span-2 rounded-[32px] bg-white border border-slate-200 shadow-[0_12px_40px_rgba(15,23,42,.06)] p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="text-sm text-slate-500 dark:text-slate-400">

                Full Name

              </label>

              <div className="relative mt-2">

                <User
                  size={18}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none focus:border-emerald-500"
                />

              </div>

            </div>

            <div>

              <label className="text-sm text-slate-500 dark:text-slate-400">

                Email

              </label>

              <div className="relative mt-2">

                <Mail
                  size={18}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none focus:border-emerald-500"
                />

              </div>

            </div>

            <div>

              <label className="text-sm text-slate-500 dark:text-slate-400">

                Password

              </label>

              <div className="relative mt-2">

                <Lock
                  size={18}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none focus:border-emerald-500"
                />

              </div>

            </div>

            <div>

              <label className="text-sm text-slate-500 dark:text-slate-400">

                Currency

              </label>

              <div className="relative mt-2">

                <IndianRupee
                  size={18}
                  className="absolute left-4 top-4 text-slate-400"
                />

                <select
                  name="currency"
                  value={form.currency}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none focus:border-emerald-500"
                >

                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>

                </select>

              </div>

            </div>

          </div>

          <div className="mt-10 border-t border-slate-200 pt-8 space-y-6">

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                <Bell className="text-emerald-600"/>

                <div>

                  <h3 className="font-semibold text-slate-800">

                    Email Notifications

                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">

                    Receive expense alerts

                  </p>

                </div>

              </div>

              <input
                type="checkbox"
                name="notifications"
                checked={form.notifications}
                onChange={handleChange}
                className="h-5 w-5 accent-emerald-600"
              />

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                <Moon className="text-indigo-500"/>

                <div>

                  <h3 className="font-semibold text-slate-800">

                    Dark Mode

                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">

                    Coming soon

                  </p>

                </div>

              </div>

              <input
                type="checkbox"
                name="darkMode"
                checked={form.darkMode}
                onChange={handleChange}
                className="h-5 w-5 accent-emerald-600"
              />

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-3">

                <Shield className="text-sky-600"/>

                <div>

                  <h3 className="font-semibold text-slate-800">

                    Two-Factor Authentication

                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">

                    Secure your account

                  </p>

                </div>

              </div>

              <button className="rounded-xl bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition">

                Enable

              </button>

            </div>

          </div>

          <button className="mt-10 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-7 py-4 font-semibold text-white shadow-lg hover:scale-[1.02] transition">

            <Save size={18} />

            Save Changes

          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;