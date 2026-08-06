import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  Menu,
  Plus,
  ChevronDown,
  Settings,
  User,
  LogOut,
} from "lucide-react";
function Navbar({ setSidebarOpen }) {
  const navigate = useNavigate();

  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  const notifications = [
    "Salary transaction added",
    "Entertainment budget updated",
    "Report exported",
  ];

  useEffect(() => {
    const handleClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));
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
        </div>

        <div className="flex items-center gap-4">
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <Bell size={20} />

              <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500"></span>
            </button>

            {notificationOpen && (
              <div className="absolute right-0 mt-3 w-72 rounded-2xl bg-white p-4 shadow-xl dark:bg-slate-800 z-50">
                <h3 className="mb-3 font-semibold dark:text-white">
                  Notifications
                </h3>

                {notifications.map((item, index) => (
                  <p
                    key={index}
                    className="border-b py-2 text-sm dark:text-slate-300"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onClick={() => setProfileOpen(!profileOpen)}
            ref={profileRef}
          >
            <div className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 transition-all duration-300 hover:bg-white hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 font-semibold text-white">
                {user?.name?.charAt(0).toUpperCase()}
              </div>

              <div className="hidden lg:block">
                <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {user?.name}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Ledgerly User
                </p>
              </div>

              <ChevronDown
                size={18}
                className={`hidden lg:block text-slate-400 transition-transform ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {profileOpen && (
              <div className="absolute right-0 top-full z-50 mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl dark:border-slate-700 dark:bg-slate-800">
                <button
                  onClick={() => {
                    navigate("/settings");
                    setProfileOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
                >
                  <Settings size={18} />
                  Settings
                </button>

                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700">
                  <User size={18} />
                  My Profile
                </button>

                <button
                  onClick={logout}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
