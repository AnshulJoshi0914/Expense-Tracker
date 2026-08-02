import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="
      flex
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      via-[#F7F9FC]
      to-emerald-50/40
      transition-colors
      duration-300
      dark:from-slate-950
      dark:via-slate-900
      dark:to-slate-950
      "
    >
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex min-w-0 flex-1 flex-col">

        <Navbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 px-6 pt-6 pb-8 md:px-8 lg:px-10">

          <div className="mx-auto w-full max-w-[1650px]">

            <Outlet />

          </div>

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;