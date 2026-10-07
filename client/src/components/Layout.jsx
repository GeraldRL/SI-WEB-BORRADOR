import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-100">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Layout;