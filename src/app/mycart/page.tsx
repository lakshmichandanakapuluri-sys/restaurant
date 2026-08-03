"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image?: string; // Added image property
  emoji?: string;
  quantity: number;
};

export default function MyCartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("UV Snacks-cart") || "[]"
    );

    setCart(savedCart);
  }, []);

  const updateQuantity = (
    id: string,
    change: number
  ) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + change,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);

    localStorage.setItem(
      "UV Snacks-cart",
      JSON.stringify(updatedCart)
    );
  };

  const removeItem = (id: string) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "UV Snacks-cart",
      JSON.stringify(updatedCart)
    );
  };

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const tax = Math.round(subtotal * 0.05);

  const total = subtotal + tax;

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#111827]">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#E5E7EB] bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/menu"
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
            ← Continue Shopping
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8">
          <span className="text-xs font-bold tracking-wider uppercase text-[#E53935]">
            Checkout Process
          </span>
          <h1 className="mt-1 text-3xl font-extrabold text-[#111827] sm:text-4xl">
            My Cart
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white p-12 text-center shadow-sm">
            <div className="text-6xl">🛒</div>

            <h2 className="mt-5 text-2xl font-bold text-[#111827]">
              Your cart is empty
            </h2>

            <p className="mt-2 text-sm text-[#4B5563]">
              Add some delicious food from our menu to get started.
            </p>

            <Link
              href="/menu"
              className="mt-6 inline-block rounded-xl bg-[#E53935] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#C62828]"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* Items */}
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-5 rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm transition-all hover:border-[#D1D5DB]"
                >
                  {/* Fixed Image Thumbnail Rendering */}
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-[#F3F4F6]">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-3xl">
                        {item.emoji || "🍽️"}
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h2 className="text-base font-bold text-[#111827]">
                      {item.name}
                    </h2>

                    <p className="mt-0.5 text-sm font-semibold text-[#E53935]">
                      ₹{item.price}
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <div className="inline-flex items-center rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] p-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, -1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-md border border-[#D1D5DB] bg-white text-sm font-bold text-[#374151] transition hover:bg-[#F3F4F6]"
                        >
                          −
                        </button>

                        <span className="w-12 text-center text-sm font-bold text-[#111827]">
                          <span className="text-gray-400 font-normal">&times;</span> {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, 1)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-md border border-[#D1D5DB] bg-white text-sm font-bold text-[#374151] transition hover:bg-[#F3F4F6]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-[#111827]">
                      ₹{item.price * item.quantity}
                    </p>

                    <button
                      onClick={() =>
                        removeItem(item.id)
                      }
                      className="mt-3 text-xs font-semibold text-[#DC2626] hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-[#111827]">
                Order Summary
              </h2>

              <div className="mt-6 space-y-3.5 text-sm text-[#4B5563]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#111827]">₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (5%)</span>
                  <span className="font-semibold text-[#111827]">₹{tax}</span>
                </div>

                <div className="border-t border-[#E5E7EB] pt-4 text-base font-bold text-[#111827]">
                  <div className="flex justify-between items-center">
                    <span>Total Amount</span>
                    <span className="text-xl font-extrabold text-[#E53935]">
                      ₹{total}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block w-full rounded-xl bg-[#E53935] px-6 py-3.5 text-center font-semibold text-white shadow-sm transition hover:bg-[#C62828]"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}