import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

export default function AdminLayout() {

  const [isSiderbarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-screen">
        <Sidebar isSidebarOpen={isSiderbarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <main className="px-6 py-4 grow h-full overflow-y-auto space-y-4">
          <Navbar isSidebarOpen={isSiderbarOpen} setIsSidebarOpen={setIsSidebarOpen} />
          <Outlet />
        </main>
    </div>
  );
}
