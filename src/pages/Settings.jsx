import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Bell,
  Moon,
  IndianRupee,
  Save,
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

      <div>

        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your account preferences
        </p>

      </div>

      <div className="bg-white rounded-3xl border shadow-sm p-8">

        <div className="grid md:grid-cols-2 gap-6">

          <div>

            <label className="text-sm text-gray-500">
              Full Name
            </label>

            <div className="relative mt-2">

              <User
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-emerald-500"
              />

            </div>

          </div>

          <div>

            <label className="text-sm text-gray-500">
              Email
            </label>

            <div className="relative mt-2">

              <Mail
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-emerald-500"
              />

            </div>

          </div>

          <div>

            <label className="text-sm text-gray-500">
              Password
            </label>

            <div className="relative mt-2">

              <Lock
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="password"
                placeholder="••••••••"
                className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-emerald-500"
              />

            </div>

          </div>

          <div>

            <label className="text-sm text-gray-500">
              Currency
            </label>

            <div className="relative mt-2">

              <IndianRupee
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <select
                name="currency"
                value={form.currency}
                onChange={handleChange}
                className="w-full border rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option>INR</option>
                <option>USD</option>
                <option>EUR</option>
              </select>

            </div>

          </div>

        </div>

      </div>

      <div className="bg-white rounded-3xl border shadow-sm p-8 space-y-6">

        <h2 className="text-xl font-semibold">
          Preferences
        </h2>

        <div className="flex justify-between items-center">

          <div className="flex gap-3 items-center">

            <Bell size={20} />

            <span>Email Notifications</span>

          </div>

          <input
            type="checkbox"
            name="notifications"
            checked={form.notifications}
            onChange={handleChange}
            className="w-5 h-5 accent-emerald-600"
          />

        </div>

        <div className="flex justify-between items-center">

          <div className="flex gap-3 items-center">

            <Moon size={20} />

            <span>Dark Mode</span>

          </div>

          <input
            type="checkbox"
            name="darkMode"
            checked={form.darkMode}
            onChange={handleChange}
            className="w-5 h-5 accent-emerald-600"
          />

        </div>

      </div>

      <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl flex items-center gap-2">

        <Save size={18} />

        Save Changes

      </button>

    </div>
  );
}

export default Settings;