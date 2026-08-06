import { useState } from "react";
import { Bell, Moon, Save } from "lucide-react";
import { useTheme } from "../context/ThemeProvider";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const { darkMode, setDarkMode } = useTheme();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "Anshu Joshi",
    email: "anshu@example.com",
    currency: "INR",
    notifications: true,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  return (
    <div className="space-y-8 dark:text-white">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>

        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Manage your account preferences
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Full Name
            </label>

            <div className="relative mt-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Email
            </label>

            <div className="relative mt-2">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Password
            </label>

            <div className="relative mt-2">
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-500 dark:text-gray-400">
              Currency
            </label>

            <div className="relative mt-2">
              <select
                name="currency"
                value={form.currency}
                onChange={handleChange}
                className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-800"
              >
                <option>INR</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 rounded-2xl border bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-xl font-semibold">Preferences</h2>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bell size={20} />

            <span>Email Notifications</span>
          </div>

          <input
            type="checkbox"
            name="notifications"
            checked={form.notifications}
            onChange={handleChange}
            className="h-5 w-5 accent-emerald-600"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Moon size={20} />

            <span>Dark Mode</span>
          </div>

          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="h-5 w-5 accent-emerald-600"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => toast.success("Settings Saved")}
          className="flex font-size:20px items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-700"
        >
          <Save size={18} />
          Save Changes
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            toast.success("Logged Out");
            navigate("/login");
          }}
          className="flex  font-size:20px items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-white hover:bg-red-700"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Settings;
