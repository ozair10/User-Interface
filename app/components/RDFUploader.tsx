"use client";

import { useState } from "react";

export default function RDFUploader() {
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    if (!file) {
      setUploadStatus("Please select a file.");
      return;
    }

    setIsUploading(true);
    setUploadStatus("Uploading...");

    try {
      const response = await fetch(
        "https://fskx-api-gateway-service.risk-ai-cloud.com/file-management-service/uploadFile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      setUploadStatus("✅ File uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus("❌ Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">📤 Upload RDF Data</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="file"
            name="file"
            accept=".ttl,.rdf"
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-indigo-100"
          />
        </div>
        <button
          type="submit"
          disabled={isUploading}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isUploading ? "Uploading..." : "Upload"}
        </button>
        {uploadStatus && (
          <p
            className={`text-sm ${
              uploadStatus.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {uploadStatus}
          </p>
        )}
      </form>
    </div>
  );
}
