"use client";

import Link from "next/link";
import { useState } from "react";

export default function QRScanPage() {
  const [scanned, setScanned] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#111827]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#E5E7EB] bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[#111827]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E53935] text-lg font-extrabold text-white">
              UV
            </span>
            <span>UV Snacks</span>
          </Link>

          <Link
            href="/menu"
            className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#374151] transition hover:bg-[#F9FAFB] hover:text-[#111827]"
          >
            View Menu
          </Link>
        </div>
      </header>

      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-12 text-center">
        <span className="text-xs font-bold tracking-wider uppercase text-[#E53935]">
          Table Ordering
        </span>

        <h1 className="mt-1 text-3xl font-extrabold text-[#111827] sm:text-4xl">
          Scan QR Code
        </h1>

        <p className="mt-2 max-w-md text-sm text-[#4B5563]">
          Scan the QR code placed on your table to start
          ordering your favourite food.
        </p>

        {/* Scanner Box Card */}
        <div className="relative mt-8 flex h-80 w-80 items-center justify-center rounded-3xl border border-[#E5E7EB] bg-white shadow-sm">
          {/* Scanner Corner Reticles */}
          <div className="absolute left-6 top-6 h-10 w-10 border-l-4 border-t-4 border-[#E53935] rounded-tl-lg" />
          <div className="absolute right-6 top-6 h-10 w-10 border-r-4 border-t-4 border-[#E53935] rounded-tr-lg" />
          <div className="absolute bottom-6 left-6 h-10 w-10 border-b-4 border-l-4 border-[#E53935] rounded-bl-lg" />
          <div className="absolute bottom-6 right-6 h-10 w-10 border-b-4 border-r-4 border-[#E53935] rounded-br-lg" />

          <div className="text-7xl font-light text-[#111827]">
            {scanned ? "✓" : "▦"}
          </div>
        </div>

        {!scanned ? (
          <button
            onClick={() => setScanned(true)}
            className="mt-8 rounded-xl bg-[#E53935] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#C62828]"
          >
            Simulate QR Scan
          </button>
        ) : (
          <div className="mt-8 flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#D1FAE5] px-4 py-1.5 text-sm font-bold text-[#059669]">
              ✓ QR Code Scanned Successfully
            </span>

            <Link
              href="/menu"
              className="mt-5 inline-block rounded-xl bg-[#E53935] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#C62828]"
            >
              Open Restaurant Menu →
            </Link>
          </div>
        )}

        <p className="mt-6 text-xs text-[#9CA3AF]">
          For the final project, this screen can be connected
          to a real QR scanner library.
        </p>
      </section>
    </main>
  );
}