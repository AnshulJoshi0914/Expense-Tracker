import { Bell, Menu, Plus, Search, ChevronDown } from "lucide-react";

function Navbar({ setSidebarOpen }) {
  return (
    <header className="px-6 pt-6 md:px-8 lg:px-10">
      <div className="bg-white dark:bg-slate-900 rounded-[30px] shadow-[0_12px_40px_rgba(15,23,42,0.08)] border border-gray-100 px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-slate-700"
          >
            <Menu size={24} />
          </button>

          <div className="relative hidden sm:block">
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search transactions..."
              className="w-[340px] rounded-2xl bg-gray-50 border border-gray-200 pl-12 pr-4 py-3 outline-none transition-all duration-300 focus:bg-white focus:border
dark:border-slate-700
dark:bg-slate-800
dark:text-white-emerald-500 focus:ring-4 focus:ring-emerald-100"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="group hidden sm:flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-[0_10px_25px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(16,185,129,0.45)] active:translate-y-0 active:scale-95">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <Plus size={18} strokeWidth={2.5} />
            </div>

            <span>Add Expense</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-5-5 5 5-5 5"
              />
            </svg>
          </button>

          <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-600">
            <Bell size={20} />

            <span className="absolute top-3 right-3 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white"></span>
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-semibold">
              AJ
            </div>

            <div className="hidden lg:block">
              <h3 className="text-sm font-semibold text-slate-800">
                Anshu Joshi
              </h3>

              <p className="text-xs text-gray-500">Premium Plan</p>
            </div>

            <ChevronDown size={18} className="hidden lg:block text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
