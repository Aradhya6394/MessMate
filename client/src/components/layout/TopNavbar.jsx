import { FiBell, FiSearch } from "react-icons/fi";

function TopNavbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-stone-200 shadow-sm">

      <div className="max-w-7xl mx-auto h-20 flex justify-between items-center px-8">

        <div>

          <h1 className="text-3xl font-bold tracking-tight text-stone-700">
            MessMate
          </h1>

          <p className="text-sm text-stone-500">
            Smart Hostel Management
          </p>

        </div>

        <div className="flex items-center gap-6">

          <div className="flex items-center bg-stone-100 rounded-full px-5 py-3 w-80">

            <FiSearch className="text-stone-500" />

            <input
              className="bg-transparent outline-none ml-3 w-full"
              placeholder="Search..."
            />

          </div>

          <button className="relative">

            <FiBell className="text-2xl text-stone-600" />

            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>

          </button>

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white font-semibold flex items-center justify-center shadow">

              A

            </div>

            <div>

              <h4 className="font-semibold text-stone-700">
                Aradhya Patel
              </h4>

              <p className="text-sm text-stone-500">
                Administrator
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

export default TopNavbar;