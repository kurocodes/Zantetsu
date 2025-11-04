import { adminAssets, icons } from "../../../assets/assets";

export default function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div className="flex justify-between items-center font-body">
        {/* Page heading */}
      <div className="flex items-center gap-4">
        <h1 className="text-2xl text-bgLight font-medium">Dashboard</h1>
      </div>

      {/* Search bar */}
      <div className="flex items-center gap-4">
        <div className="max-sm:hidden bg-[hsl(0,0%,13%)] rounded-md flex items-center">
          <input
            type="text"
            placeholder="Search stock, order, etc."
            className="px-4 py-2 text-xs text-bgLight/70 focus:outline-none placeholder:text-bgLight/50"
          />
          <button className="px-2">
            <icons.IoSearch className="text-lg text-bgLight/50" />
          </button>
        </div>

        {/* Messages and Notifications */}
        <div className="max-xs:hidden flex items-center gap-4">
          <div>
            <icons.AiOutlineMessage className="text-xl text-bgLight/70 hover:text-bgLight/90 cursor-pointer" />
          </div>
          <div className="relative">
            <icons.VscBell className="text-xl text-bgLight/70 hover:text-bgLight/90 cursor-pointer" />
            <span className="absolute w-2 h-2 bg-highlight rounded-full top-0 right-0"></span>
          </div>
        </div>

        {/* Admin Profile */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded overflow-hidden">
              <img src={adminAssets.admin_dummy_pfp} alt="Admin Profile" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-bgLight/90">Deepak V.</span>
              <span className="text-[10px] text-bgLight/50">Admin</span>
            </div>
          </div>
          <icons.IoIosArrowDown className="text-lg text-bgLight/50 hover:text-bgLight/90 cursor-pointer" />
        </div>

        <button className="lg:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <icons.HiMenuAlt1 className="text-2xl text-bgLight/70 hover:text-bgLight/90 cursor-pointer"/>
        </button>
      </div>
    </div>
  );
}
