"use client";

import { useState } from "react";
import QueryBuilder from "../components/QueryBuilder";
import QueryResults from "../components/QueryResults";

export default function QueryBuilderPage() {
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExecute = async (query: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Implement actual query execution
      // This is a placeholder for demonstration
      const mockResults = [
        {
          subject: "http://example.org/subject1",
          predicate: "http://example.org/predicate1",
          object: "Object 1",
        },
        {
          subject: "http://example.org/subject2",
          predicate: "http://example.org/predicate2",
          object: "Object 2",
        },
      ];

      setResults(mockResults);
    } catch (err) {
      setError("Failed to execute query. Please try again.");
      console.error("Query execution error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            RDF Query Builder
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Build and execute SPARQL queries against your RDF data
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <QueryBuilder onExecute={handleExecute} />
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Results</h2>
            <QueryResults
              results={results}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
