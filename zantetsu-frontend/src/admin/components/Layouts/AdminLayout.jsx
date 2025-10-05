import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AdminLayout() {
  return (
    <div>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}
