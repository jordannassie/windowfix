"use client";

import { useState } from "react";

export default function ZipForm() {
  const [zip, setZip] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = "tel:+18005551234";
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md items-center gap-0">
      <input
        type="text"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
        placeholder="Enter service ZIP code"
        maxLength={5}
        pattern="\d{5}"
        className="h-12 flex-1 rounded-l-full border border-r-0 border-gray-300 bg-white px-5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="h-12 rounded-r-full bg-[#1B4FD8] px-6 text-sm font-bold text-white transition hover:bg-[#1540b8] active:scale-95"
      >
        Let&rsquo;s Get Started
      </button>
    </form>
  );
}
