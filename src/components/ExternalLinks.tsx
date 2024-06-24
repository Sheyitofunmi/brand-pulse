import React from "react";
import { NavLink } from "react-router-dom";

const ExternalLinks: React.FC = () => {
  const links = [
    { name: "Google Analytics", icon: "📊", to: "/google-analytics" },
    { name: "Facebook Ads", icon: "📘", to: "/facebook-ads" },
    { name: "Seranking", icon: "📈", to: "/seranking" },
    { name: "Instagram Ads", icon: "📸", to: "/instagram-ads" },
  ];

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg ">
      <h2 className="text-lg font-semibold text-[#2B3674] mb-4 pb-4">
        External Links
      </h2>
      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link.name} className="flex items-center space-x-5">
            <span className="text-2xl">{link.icon}</span>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `text-base text-gray-800 hover:text-blue-600 py-5  transition-colors w-full flex justify-between items-center text-center duration-200 ${
                  isActive ? "font-bold" : ""
                }`
              }
            >
              <div>{link.name}</div>
              <div>
                {" "}
                <img src="/link.svg" alt="" className="h-8 w-8" />
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExternalLinks;
