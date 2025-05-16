"use client";

import { useState } from "react";

interface CatalogItem {
  id: string;
  name: string;
  type: "food" | "chemical" | "substance";
  riskLevel: "low" | "medium" | "high";
  icon: string;
}

export default function CatalogExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedRisk, setSelectedRisk] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const catalogItems: CatalogItem[] = [
    {
      id: "1",
      name: "Benzene",
      type: "substance",
      riskLevel: "high",
      icon: "📦",
    },
    { id: "2", name: "Apple", type: "food", riskLevel: "low", icon: "🍏" },
    {
      id: "3",
      name: "Ammonia",
      type: "chemical",
      riskLevel: "medium",
      icon: "🧪",
    },
  ];

  const filteredItems = catalogItems.filter((item) => {
    const matchesCategory = !selectedCategory || item.type === selectedCategory;
    const matchesRisk = !selectedRisk || item.riskLevel === selectedRisk;
    const matchesSearch =
      !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesRisk && matchesSearch;
  });

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">🔎 Catalog Explorer</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 bg-gray-100 text-gray-800 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="chemical">Chemical</option>
          <option value="substance">Substance</option>
        </select>

        <select
          value={selectedRisk}
          onChange={(e) => setSelectedRisk(e.target.value)}
          className="px-4 bg-gray-100 text-gray-800 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Risk Level</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          type="text"
          placeholder="Search keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Results */}
      <div className="space-y-4">
        {filteredItems.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            No items found matching your criteria.
          </p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {filteredItems.map((item) => (
              <li key={item.id} className="py-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span className="capitalize">{item.type}</span>
                      <span>•</span>
                      <span
                        className={`capitalize ${
                          item.riskLevel === "high"
                            ? "text-red-600"
                            : item.riskLevel === "medium"
                            ? "text-yellow-600"
                            : "text-green-600"
                        }`}
                      >
                        {item.riskLevel} Risk
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      // Handle item selection
                      console.log("Selected item:", item);
                    }}
                    className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-900"
                  >
                    View Details
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
