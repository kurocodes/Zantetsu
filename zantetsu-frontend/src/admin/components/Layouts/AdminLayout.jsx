import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="px-6 py-4 grow h-full overflow-y-auto">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}
