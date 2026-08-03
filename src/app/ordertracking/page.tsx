"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Order = {
  orderId: string;
  customerName: string;
  table: string;
  payment: string;
  total: number;
  status: string;
};

export default function OrderTrackingPage() {
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem(
      "UV Snacks-order"
    );

    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  const steps = [
    "Order Confirmed",
    "Preparing",
    "Ready to Serve",
    "Completed",
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#111827]">
      <header className="sticky top-0 z-30 border-b border-[#E5E7EB] bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/menu"
            className="flex items-center gap-2 text-2xl font-bold tracking-tight text-[#111827]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E53935] text-lg font-extrabold text-white">
              S
            </span>
            <span>UV Snacks</span>
          </Link>

          <Link
            href="/menu"
            className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#374151] transition hover:bg-[#F9FAFB] hover:text-[#111827]"
          >
            ← Back to Menu
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-10">
        {!order ? (
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-12 text-center shadow-sm">
            <div className="text-6xl">📦</div>

            <h1 className="mt-5 text-2xl font-bold text-[#111827]">
              No Active Order
            </h1>

            <p className="mt-2 text-sm text-[#4B5563]">
              You have not placed an order yet.
            </p>

            <Link
              href="/menu"
              className="mt-6 inline-block rounded-xl bg-[#E53935] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#C62828]"
            >
              Order Now
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center">
              <span className="text-xs font-bold tracking-wider uppercase text-[#E53935]">
                Order Tracking
              </span>

              <h1 className="mt-1 text-3xl font-extrabold text-[#111827] sm:text-4xl">
                Track Your Order
              </h1>

              <p className="mt-2 text-sm text-[#4B5563]">
                Order ID:{" "}
                <span className="font-semibold text-[#111827]">
                  #{order.orderId}
                </span>
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-bold text-[#111827]">
                Order Status
              </h2>

              <div className="relative mt-8 space-y-8 pl-2">
                {steps.map((step, index) => {
                  const isActive = index === 0;

                  return (
                    <div
                      key={step}
                      className="relative flex items-start gap-4"
                    >
                      {index !== steps.length - 1 && (
                        <div className="absolute left-5 top-10 h-full w-0.5 -translate-x-1/2 bg-[#E5E7EB]" />
                      )}

                      <div
                        className={`z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all ${
                          isActive
                            ? "bg-[#E53935] text-white ring-4 ring-[#E53935]/20"
                            : "border border-[#D1D5DB] bg-[#F9FAFB] text-[#9CA3AF]"
                        }`}
                      >
                        {index + 1}
                      </div>

                      <div className="pt-1">
                        <h3
                          className={`text-base ${
                            isActive
                              ? "font-bold text-[#E53935]"
                              : "font-semibold text-[#6B7280]"
                          }`}
                        >
                          {step}
                        </h3>

                        {isActive && (
                          <p className="mt-1 text-xs text-[#4B5563]">
                            Your order has been successfully placed and received by the kitchen.
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                  Customer
                </p>

                <p className="mt-1 text-base font-bold text-[#111827]">
                  {order.customerName}
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                  Table
                </p>

                <p className="mt-1 text-base font-bold text-[#111827]">
                  Table {order.table}
                </p>
              </div>

              <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9CA3AF]">
                  Total Amount
                </p>

                <p className="mt-1 text-xl font-extrabold text-[#E53935]">
                  ₹{order.total}
                </p>
              </div>
            </div>

            <Link
              href="/menu"
              className="mt-8 block rounded-xl bg-[#E53935] px-6 py-3.5 text-center font-semibold text-white shadow-sm transition hover:bg-[#C62828]"
            >
              Order More Food
            </Link>
          </>
        )}
      </section>
    </main>
  );
}