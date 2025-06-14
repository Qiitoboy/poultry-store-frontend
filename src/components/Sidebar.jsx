import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import {
  LayoutDashboard,
  Boxes,
  FileText,
  Truck,
  ShoppingCart,
  Store,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={18} />, label: "Dashboard" },
    { icon: <Boxes size={18} />, label: "Inventory" },
    { icon: <FileText size={18} />, label: "Reports" },
    { icon: <Truck size={18} />, label: "Suppliers" },
    { icon: <ShoppingCart size={18} />, label: "Sales" },
    { icon: <Store size={18} />, label: "Manage Store" },
    { icon: <Users size={18} />, label: "Employees" },
  ];

  const footerItems = [
    { icon: <Settings size={18} />, label: "Settings" },
    { icon: <LogOut size={18} />, label: "Logout" },
  ];

  return (
<aside className="fixed top-0 left-0 z-20 w-[200px] h-screen bg-white p-6 pt-10 rounded-tr-lg rounded-br-lg shadow flex flex-col justify-between">
{/* Logo */}
      <div>
        <div className="flex justify-center mb-8">
          <div className="bg-[#f4faf8] px-6 py-3 rounded-md text-[#496961] font-black font-[Lato] text-lg text-center hover:text-blue-600 ">
            LOGO
          </div>
        </div>

        {/* Menu Items */}
        <ul className="space-y-2 text-sm font-medium">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Items */}
      <ul className="space-y-2 text-sm font-medium mt-6">
        {footerItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition"
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
