"use client";

import { useState } from "react";

interface QueryBuilderProps {
  onExecute: (query: string) => void;
}

export default function QueryBuilder({ onExecute }: QueryBuilderProps) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleExecute = async () => {
    setIsLoading(true);
    try {
      await onExecute(query);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-medium text-gray-900">
            RDF Query Builder
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Build and execute your RDF queries
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="query"
              className="block text-sm font-medium text-gray-700"
            >
              Query
            </label>
            <div className="mt-1">
              <textarea
                id="query"
                name="query"
                rows={10}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your SPARQL query here..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={handleExecute}
              disabled={isLoading || !query.trim()}
              className="inline-flex items-center px-4  py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Executing..." : "Execute Query"}
            </button>

            <button
              type="button"
              onClick={() => setQuery("")}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700  bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
