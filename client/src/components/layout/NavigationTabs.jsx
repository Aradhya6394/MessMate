import { NavLink } from "react-router-dom";

const tabs = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Students", path: "/students" },
  { name: "Attendance", path: "/attendance" },
  { name: "Menu", path: "/menu" },
  { name: "Complaints", path: "/complaints" },
  { name: "Notices", path: "/notices" },
  
  { name: "Contact", path: "/contact" },
];

function NavigationTabs() {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex gap-4 px-8 py-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              `px-5 py-2 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-[#ECE7DA] text-stone-700 font-semibold shadow"
                  : "text-stone-500 hover:bg-stone-100"
              }`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavigationTabs;