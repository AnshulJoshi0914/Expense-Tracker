import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  PieChart,
  Tags,
  Settings,
  CircleHelp,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useBudgets } from "../hooks/useBudgets";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const { data } = useBudgets();
  const budgets = data?.budgets || [];
  
const totalBudget = budgets.reduce((sum, item) => sum + item.limit, 0);
const totalSpent = budgets.reduce((sum, item) => sum + item.spent, 0);
const remaining = totalBudget - totalSpent;
const percentage =
  totalBudget === 0 ? 0 : Math.min((totalSpent / totalBudget) * 100, 100);
const links = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Transactions",
    icon: ArrowLeftRight,
    path: "/transactions",
  },
  {
    name: "Budgets",
    icon: Wallet,
    path: "/budgets",
  },
  {
    name: "Reports",
    icon: PieChart,
    path: "/reports",
  },
  {
    name: "Categories",
    icon: Tags,
    path: "/categories",
  },
];
  return (
    <>
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 md:hidden ${
          sidebarOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      <aside
        className={`fixed md:sticky md:top-0 z-40 h-dvh w-72 flex flex-col px-6 py-8 border-r shadow-xl transition-all duration-300
        bg-white border-slate-200 text-slate-800
        dark:bg-slate-900 dark:border-slate-800 dark:text-white
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="self-end mb-3 md:hidden"
        >
          <X size={22} />
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg">
              ₹
            </div>

            <div>
              <h1 className="text-3xl font-bold">Ledgerly</h1>

              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Expense Tracker
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="mb-3 text-xs uppercase tracking-wider text-slate-400">
            Overview
          </p>

          {links.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-5 py-3 font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`
                }
              >
                <Icon size={19} />
                {item.name}
              </NavLink>
            );
          })}
        </div>

        <div className="mt-10">
          <p className="mb-3 text-xs uppercase tracking-wider text-slate-400">
            Workspace
          </p>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-5 py-3 font-medium transition-all ${
                isActive
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800"
              }`
            }
          >
            <Settings size={19} />
            Settings
          </NavLink>

          <NavLink
            to="/support"
            className={({ isActive }) =>
              `mt-2 flex items-center gap-3 rounded-2xl px-5 py-3 font-medium transition-all ${
                isActive
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800"
              }`
            }
          >
            <CircleHelp size={19} />
            Support
          </NavLink>
        </div>

        <div className="mt-auto">
          <div className="rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-emerald-100">Monthly Budget</p>

                <h2 className="mt-1 text-3xl font-bold">
                  ₹{totalSpent.toLocaleString()}
                </h2>
              </div>

              <div className="text-3xl">💰</div>
            </div>

            <p className="mt-4 text-sm text-emerald-100">
              ₹{totalBudget.toLocaleString()} Total Budget
            </p>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/30">
              <div
                className="h-full rounded-full bg-white"
                style={{
                  width: `${percentage}%`,
                }}
              />
            </div>

            <div className="mt-3 flex justify-between text-sm">
              <span>{percentage.toFixed(0)}% Used</span>

              <span>₹{remaining.toLocaleString()} Left</span>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 font-bold text-white">
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            <div>
              <h3 className="font-semibold">{user?.name}</h3>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ledgerly User
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
