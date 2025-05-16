// app/login/page.tsx
"use client";
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    window.location.href = "/dashboard/catalog";
  }, []);

  return <p>Redirecting to dashboard...</p>;
}
