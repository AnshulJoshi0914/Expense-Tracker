import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  PieChart,
  Tags,
  Settings,
  CircleHelp,
  X
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/"
  },
  {
    name: "Transactions",
    icon: ArrowLeftRight,
    path: "/transactions"
  },
  {
    name: "Budgets",
    icon: Wallet,
    path: "/budgets"
  },
  {
    name: "Reports",
    icon: PieChart,
    path: "/reports"
  },
  {
    name: "Categories",
    icon: Tags,
    path: "/categories"
  }
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {/* Background Overlay */}

      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/30 z-30 transition-opacity duration-300 md:hidden
        ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      <aside
        className={`

        fixed md:static

        z-40

        h-screen

        w-80

        bg-[#0A3023]

        text-white

        flex

        flex-col

        px-7 py-8

        shadow-2xl

        transition-transform

        duration-300

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }
        
        `}
      >
        {/* Close Button */}

        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden self-end mb-3"
        >
          <X size={22} />
        </button>

        {/* Logo */}

        <div className="mb-10">

          <div className="flex items-center gap-3">

            <div className="h-11 w-11 rounded-xl bg-emerald-500 flex items-center justify-center text-xl font-bold">

              ₹

            </div>

            <div>

              <h2 className="font-bold text-xl">
                Ledgerly
              </h2>

              <p className="text-xs text-gray-300 tracking-widest">
                EXPENSE TRACKER
              </p>

            </div>

          </div>

        </div>

        {/* Menu */}

        <div className="space-y-2">

          <p className="uppercase text-xs text-gray-400 mb-3">

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
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300

                  ${
                    isActive
                      ? "bg-emerald-700"
                      : "hover:bg-[#154637]"
                  }`
                }
              >
                <Icon size={18} />

                {item.name}
              </NavLink>
            );
          })}

        </div>

        {/* Workspace */}

        <div className="mt-10">

          <p className="uppercase text-xs text-gray-400 mb-3">

            Workspace

          </p>

          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#154637]"
          >
            <Settings size={18} />

            Settings

          </NavLink>

          <button
            className="mt-2 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#154637] w-full text-left"
          >
            <CircleHelp size={18} />

            Support
          </button>

        </div>

        {/* Budget Card */}

        <div className="mt-auto">

          <div className="bg-[#133B2D] rounded-2xl p-5">

            <p className="text-sm text-gray-300">

              August Budget

            </p>

            <h2 className="text-lg font-bold mt-1">

              $2,456

            </h2>

            <p className="text-xs text-gray-400 mb-3">

              of $3,200 spent

            </p>

            <div className="w-full bg-[#285244] rounded-full h-2">

              <div className="bg-emerald-400 h-2 rounded-full w-[76%]" />

            </div>

          </div>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;