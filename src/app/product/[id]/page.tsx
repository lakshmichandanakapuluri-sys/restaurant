"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import { menuItems } from "@/app/menu/page";
import { addToCart } from "@/lib/cart";

export default function ProductPage() {
  const params = useParams();
  const productId = params?.id as string;
  const [quantity, setQuantity] = useState(1);

  // Look for a match by text ID OR by numeric array index (e.g., "1" maps to index 0)
  const item = menuItems.find(
    (i, index) => i.id === productId || String(index + 1) === productId
  );

  if (!item) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F9FAFB] text-gray-800">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product Not Found</h1>
          <p className="mt-2 text-sm text-gray-500">
            The dish you are looking for does not exist.
          </p>
          <Link
            href="/menu"
            className="mt-4 inline-block rounded-full bg-[#D9381E] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-[#D9381E]/20 hover:bg-[#b82d16]"
          >
            Back to Menu
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      description: item.description,
      image: item.image,
      quantity: quantity,
    });
    alert(`${quantity} × ${item.name} added to cart!`);
  };

  return (
    <main className="min-h-screen bg-[#F9FAFB] text-gray-800">
      {/* Navbar Header */}
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-gray-900"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D9381E] text-sm font-black text-white shadow-md shadow-[#D9381E]/20">
              UV
            </span>
            <span className="font-bold text-gray-900">UV Snacks</span>
          </Link>

          <nav className="flex items-center gap-3">
            <Link
              href="/menu"
              className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              Menu
            </Link>
            <Link
              href="/mycart"
              className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              My Cart
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#D9381E] hover:underline"
        >
          ← Back to Menu
        </Link>

        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm sm:flex">
          <div className="relative h-64 sm:h-auto sm:w-1/2">
            <Image
              src={item.image}
              alt={item.name}
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
            <div>
              <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-[#D9381E]">
                {item.category}
              </span>
              <h1 className="mt-3 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                {item.name}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>

            {/* Quantity Selection Controls */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Quantity:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="px-3 font-bold text-gray-900">
                  <span className="text-gray-400 font-normal">&times;</span> {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Total Price
                </span>
                <span className="text-2xl font-extrabold text-[#D9381E]">
                  ₹{item.price * quantity}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddToCart}
                  className="rounded-full bg-[#D9381E] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[#D9381E]/20 transition-all hover:bg-[#b82d16]"
                >
                  Add to Cart
                </button>
                <Link 
                  href="/mycart"
                  className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-bold text-gray-700 shadow-md transition-all hover:bg-gray-50"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}