"use client";

import { useState } from "react";
import KGNavigatorLayout from "@/app/components/KGNavigatorLayout";

export default function QueryBuilderPage() {
  const [query, setQuery] = useState<string>(`SELECT ?s ?p ?o
WHERE {
  ?s ?p ?o
}
LIMIT 10`);
  const [isExecuting, setIsExecuting] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleExecute = async () => {
    setIsExecuting(true);
    setError(null);

    try {
      // TODO: Implement actual SPARQL query execution
      // This is a placeholder for demonstration
      const mockResults = [
        {
          s: "http://example.org/subject1",
          p: "http://example.org/predicate1",
          o: "Object 1",
        },
        {
          s: "http://example.org/subject2",
          p: "http://example.org/predicate2",
          o: "Object 2",
        },
      ];

      setResults(mockResults);
    } catch (err) {
      setError("Failed to execute query. Please try again.");
      console.error("Query execution error:", err);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <KGNavigatorLayout>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">🛠️ SPARQL Editor</h2>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-48 font-mono text-sm p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Write your SPARQL query here..."
          />
          <div className="mt-4 flex space-x-4">
            <button
              onClick={handleExecute}
              disabled={isExecuting}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isExecuting ? "Executing..." : "Run Query"}
            </button>
            <button
              onClick={() => setQuery("")}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Clear
            </button>
            <button
              onClick={() => {
                // TODO: Implement save functionality
                console.log("Saving query:", query);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Save
            </button>
            <button
              onClick={() => {
                // TODO: Implement share functionality
                console.log("Sharing query:", query);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Share
            </button>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          {error ? (
            <div className="text-red-600">{error}</div>
          ) : results.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {Object.keys(results[0]).map((header) => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {results.map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((value, i) => (
                        <td
                          key={i}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                        >
                          {String(value)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              {isExecuting ? "Executing query..." : "No results to display"}
            </div>
          )}
        </div>
      </div>
    </KGNavigatorLayout>
  );
}
