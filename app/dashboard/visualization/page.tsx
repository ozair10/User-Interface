"use client";

import KGNavigatorLayout from "@/app/components/KGNavigatorLayout";

export default function VisualizationPage() {
  return (
    <KGNavigatorLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">📊 Visualization</h2>
        <p className="text-gray-500 mb-6">
          This section will display graph or statistical visualizations based on
          your query results.
        </p>

        {/* Visualization Placeholder */}
        <div className="h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <p className="text-gray-500">Visualization will appear here</p>
            <p className="text-sm text-gray-400 mt-2">
              Run a query in the Query Builder to see results visualized
            </p>
          </div>
        </div>

        {/* Visualization Controls */}
        <div className="mt-6 flex space-x-4">
          <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="graph">Graph View</option>
            <option value="table">Table View</option>
            <option value="chart">Chart View</option>
          </select>

          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Export
          </button>

          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Share
          </button>
        </div>
      </div>
    </KGNavigatorLayout>
  );
}
