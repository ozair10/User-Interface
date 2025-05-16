"use client";
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    // Redirect to the dashboard immediately
    window.location.href = "/dashboard/catalog";
  }, []);

  return <p>Redirecting to dashboard...</p>;
}
