import { Bell, Menu, Plus, ChevronDown } from "lucide-react";

function Navbar({ setSidebarOpen }) {
  return (
    <header className="px-6 pt-6 md:px-8 lg:px-10">

      <div className="flex items-center justify-between rounded-[30px] border border-slate-200 bg-white px-8 py-5 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">

        <div className="flex items-center gap-5">

          <button
            onClick={() => setSidebarOpen(true)}
            className="text-slate-700 transition dark:text-slate-200 md:hidden"
          >
            <Menu size={24} />
          </button>

          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search transactions..."
              className="w-[340px] rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-slate-700 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400 dark:focus:bg-slate-800 dark:focus:ring-emerald-900/30"
            />

          </div>

        </div>

        <div className="flex items-center gap-4">

          <button className="group hidden items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-[0_10px_25px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(16,185,129,0.45)] active:translate-y-0 active:scale-95 sm:flex">

            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20">

              <Plus
                size={18}
                strokeWidth={2.5}
              />

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

                    <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-emerald-400">

            <Bell size={20} />

            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500 dark:border-slate-900"></span>

          </button>

          <div className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 transition-all duration-300 hover:bg-white hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 font-semibold text-white">

              AJ

            </div>

            <div className="hidden lg:block">

              <h3 className="text-sm font-semibold text-slate-800 dark:text-white">

                Anshu Joshi

              </h3>

              <p className="text-xs text-slate-500 dark:text-slate-400">

                Premium Plan

              </p>

            </div>

            <ChevronDown
              size={18}
              className="hidden text-slate-400 dark:text-slate-500 lg:block"
            />

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;