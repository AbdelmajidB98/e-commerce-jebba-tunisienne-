"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function Toast() {
  const { toastMessage } = useCart();

  return (
    <div className={`toast ${toastMessage ? "show" : ""}`}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span style={{ fontSize: "0.95rem", fontWeight: "500" }}>{toastMessage}</span>
    </div>
  );
}
