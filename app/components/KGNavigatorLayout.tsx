"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface KGNavigatorLayoutProps {
  children: React.ReactNode;
}

export default function KGNavigatorLayout({
  children,
}: KGNavigatorLayoutProps) {
  const [activeSection, setActiveSection] = useState("upload");
  const pathname = usePathname();

  const navItems = [
    { id: "upload", label: "Upload RDF", icon: "📤" },
    { id: "catalog", label: "Catalog", icon: "🔎" },
    { id: "query-builder", label: "Query Builder", icon: "🛠️" },
    { id: "visualization", label: "Visualization", icon: "📊" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-800 text-white p-6">
        <h4 className="text-xl font-semibold mb-6">KG Navigator</h4>
        <div className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`/dashboard/${item.id}`}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                pathname === `/dashboard/${item.id}`
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
          <button
            onClick={() => {
              // Handle logout  
              localStorage.removeItem("accessToken");
              window.location.href = "/";
            }}
            className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  );
}
