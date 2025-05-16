"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();

  const guestLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard/upload", label: "Dashboard" },
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
  ];

  const authLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/query-builder", label: "Query Builder" },
    { href: "/my-queries", label: "My Queries" },
    { href: "/profile", label: "Profile" },
  ];

  const links = isAuthenticated ? authLinks : guestLinks;

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-indigo-600">
                RDF Query Builder
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {isAuthenticated && (
            <div className="flex items-center">
              <button
                onClick={() => setIsAuthenticated(false)}
                className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
