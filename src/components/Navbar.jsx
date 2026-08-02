import { Bell, Menu, Plus, Search } from "lucide-react";

function Navbar({ setSidebarOpen }) {
  return (
    <header className="bg-[#F6F7F5] px-8 pt-6">
       <div className="bg-white rounded-[28px] shadow-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center justify-between gap-5">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="md:hidden">
              <Menu />
            </button>

            <div className="relative hidden sm:block">
              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                placeholder="Search transactions..."
                className="w-72 rounded-full border pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Right */}

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full items-center gap-2">
              <Plus size={18} />
              Add Expense
            </button>

            <Bell size={22} className="text-gray-600 cursor-pointer" />

            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700">
              AJ
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
