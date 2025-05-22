"use client";

import { useState } from "react";
import { FaFileAlt, FaChevronDown, FaPlus, FaProjectDiagram, FaRobot, FaBlog, FaPuzzlePiece, FaLink } from "react-icons/fa";

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (menuName: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  return (
    <aside className="w-64 bg-gray-100 h-screen p-4 flex flex-col">
      
      {/* Abun Section - Sabse upar */}
      <div className="mb-6">
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600 font-semibold text-lg">
            <FaLink size={20} />
            abun
          </li>
          {/* Agar aur items chahiye Abun ke neeche, to yahan add karen */}
        </ul>
      </div>

      {/* Articles */}
      <div>
        <button
          onClick={() => toggleMenu("articles")}
          className="flex items-center gap-2 text-blue-600 font-semibold w-full"
        >
          <FaFileAlt size={20} />
          Articles
          <FaChevronDown className={`ml-auto transition-transform ${openMenus["articles"] ? "rotate-180" : ""}`} />
        </button>
        {openMenus["articles"] && (
          <ul className="pl-8 mt-2 space-y-2 text-gray-700">
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaPlus /> Generate Article
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaPlus /> Create Article
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaProjectDiagram /> Keyword Project
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaRobot /> AI Keyword to Project
            </li>
          </ul>
        )}
      </div>

      {/* AutoBlogs */}
      <div className="mt-6">
        <button
          onClick={() => toggleMenu("autoblogs")}
          className="flex items-center gap-2 text-gray-800 font-semibold w-full"
        >
          <FaBlog size={20} />
          AutoBlogs
          <FaChevronDown className={`ml-auto transition-transform ${openMenus["autoblogs"] ? "rotate-180" : ""}`} />
        </button>
        {openMenus["autoblogs"] && (
          <ul className="pl-8 mt-2 space-y-2 text-gray-700">
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaPlus /> Option 1
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <FaPlus /> Option 2
            </li>
          </ul>
        )}
      </div>

      {/* Integration without dropdown */}
      <div className="mt-6">
        <button
          className="flex items-center gap-2 text-gray-800 font-semibold w-full cursor-default"
        >
          <FaPuzzlePiece size={20} />
          Integration
        </button>
        
      </div>
      <div className="mt-6">
        <button
          className="flex items-center gap-2 text-gray-800 font-semibold w-full cursor-default"
        >
          <FaPuzzlePiece size={20} />
          Updates
        </button>
        
      </div>

    </aside>
  );
}
