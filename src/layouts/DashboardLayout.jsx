import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {

    return (

        <div className="flex min-h-screen bg-[#F6F7F5]">

            <Sidebar />

            <div className="flex flex-col flex-1">

                <Navbar />

                <main className="flex-1 p-6">

                    <Outlet />

                </main>

            </div>

        </div>

    );
}

export default DashboardLayout;