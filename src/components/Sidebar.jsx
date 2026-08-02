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

const links = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
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

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/30 z-30 transition-opacity duration-300 md:hidden
        ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      <aside
        className={`

        fixed md:sticky md:top-0

        z-40

        h-dvh

        w-72.5

       bg-[#062E27]
        border-r border-emerald-900/30

        text-white

        flex

        flex-col

        px-6 py-8

        shadow-[0_20px_60px_rgba(0,0,0,0.35)]

        transition-transform

        duration-300

        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        
        `}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden self-end mb-3"
        >
          <X size={22} />
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <span className="text-2xl font-bold">₹</span>
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight">Ledgerly</h1>

              <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/70">
                Expense Tracker
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}

        <div className="space-y-3">
          <p className="uppercase text-xs text-gray-400 mb-3">Overview</p>

          {links.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-3.5 rounded-xl transition-all duration-300

                  ${isActive ? "bg-linear-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/30" : "hover:bg-white/5"}`
                }
              >
                <Icon size={18} />

                {item.name}
              </NavLink>
            );
          })}
        </div>

        {/* Workspace */}

        <div className="mt-12">
          <p className="uppercase text-xs text-gray-400 mb-3">Workspace</p>

          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#154637]"
          >
            <Settings size={18} />
            Settings
          </NavLink>

          <NavLink
            to="/support"
            className={({ isActive }) =>
              `mt-2 flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive ? "bg-emerald-700" : "hover:bg-[#154637]"
              }`
            }
          >
            <CircleHelp size={18} />
            Support
          </NavLink>
        </div>

        {/* Budget Card */}

        <div className="mt-auto pt-8">
          <div className="rounded-3xl p-6 bg-linear-to-br from-[#0E3B30] to-[#124739] border border-white/5">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-emerald-100/70 text-sm">Monthly Budget</p>

                <h2 className="text-3xl font-bold mt-1">₹2,456</h2>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex justify-center items-center">
                💰
              </div>
            </div>

            <p className="text-sm text-emerald-100/60 mt-4">
              ₹3,200 Total Budget
            </p>

            <div className="w-full h-2 bg-white/10 rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full w-[76%]" />
            </div>

            <div className="flex justify-between mt-3 text-sm">
              <span>76% Used</span>

              <span className="text-emerald-300">₹744 Left</span>
            </div>
          </div>
          <div className="mt-5 rounded-3xl bg-white/5 border border-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-300 text-[#062E27] flex items-center justify-center font-bold text-lg">
                AJ
              </div>

              <div>
                <h3 className="font-semibold">Anshu Joshi</h3>

                <p className="text-xs text-emerald-200/70">Premium Plan</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
