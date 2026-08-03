"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomePage() {
  const pathname = usePathname();
  return (
    <main className="min-h-screen bg-[#120f0b] text-white">
      <header className="sticky top-0 z-50 border-b border-amber-900/40 bg-[#18130e]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          
          <Link
            href="/"
            className="text-2xl font-bold text-amber-400"
          >
            UV Snacks
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            <Link
              href="/"
              className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-black"
            >
              Home
            </Link>

            <Link
              href="/menu"
              className="rounded-lg px-4 py-2 font-semibold text-gray-300 transition hover:bg-amber-500 hover:text-black"
            >
              Menu
            </Link>

            <Link
              href="/qrscan"
              className="rounded-lg px-4 py-2 font-semibold text-gray-300 transition hover:bg-amber-500 hover:text-black"
            >
              QR Scan
            </Link>

            <Link
              href="/mycart"
              className="rounded-lg px-4 py-2 font-semibold text-gray-300 transition hover:bg-amber-500 hover:text-black"
            >
              My Cart
            </Link>

            <Link
              href="/product/1"
              className="rounded-lg px-4 py-2 font-semibold text-gray-300 transition hover:bg-amber-500 hover:text-black"
            >
              Product Details
            </Link>

            <Link
              href="/checkout"
              className="rounded-lg px-4 py-2 font-semibold text-gray-300 transition hover:bg-amber-500 hover:text-black"
            >
              Checkout
            </Link>

            <Link
              href="/ordertracking"
              className="rounded-lg px-4 py-2 font-semibold text-gray-300 transition hover:bg-amber-500 hover:text-black"
            >
              Order Tracking
            </Link>
          </nav>

          <div className="flex gap-2 md:hidden">
            <Link
              href="/menu"
              className="rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-black"
            >
              Menu
            </Link>

            <Link
              href="/mycart"
              className="rounded-lg border border-amber-500 px-3 py-2 text-sm font-semibold text-amber-400"
            >
              Cart
            </Link>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto border-t border-amber-900/30 px-6 py-3 md:hidden">
          <Link
            href="/"
            className="whitespace-nowrap rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-black"
          >
            Home
          </Link>

          <Link
            href="/menu"
            className="whitespace-nowrap rounded-lg bg-[#2a2118] px-4 py-2 text-sm font-semibold text-white"
          >
            Menu
          </Link>

          <Link
          href="/product"
            className="whitespace-nowrap rounded-lg bg-[#2a2118] px-4 py-2 text-sm font-semibold text-white"
            ></Link>

          <Link
            href="/mycart"
            className="whitespace-nowrap rounded-lg bg-[#2a2118] px-4 py-2 text-sm font-semibold text-white"
          >
            My Cart
          </Link>

          <Link
            href="/checkout"
            className="whitespace-nowrap rounded-lg bg-[#2a2118] px-4 py-2 text-sm font-semibold text-white"
          >
            Checkout
          </Link>

          <Link
            href="/ordertracking"
            className="whitespace-nowrap rounded-lg bg-[#2a2118] px-4 py-2 text-sm font-semibold text-white"
          >
            Tracking
          </Link>
        </div>
      </header>

      <section className="mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl items-center px-6 py-20">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-400">
              Welcome to UV Snacks
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Delicious food.
              <br />
              <span className="text-amber-400">
                Beautiful moments.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              Discover delicious dishes prepared with fresh
              ingredients and served with love. Browse our menu,
              order your favourite food and track your order.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="rounded-xl bg-amber-500 px-7 py-4 font-bold text-black transition hover:bg-amber-400"
              >
                Explore Menu
              </Link>

              <Link
                href="/qrscan"
                className="rounded-xl border border-amber-500 px-7 py-4 font-bold text-amber-400 transition hover:bg-amber-500 hover:text-black"
              >
                Scan QR Code
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative flex h-[420px] w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border border-amber-900/40 bg-[#1d1812] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />

              <div className="relative text-center">
                <div className="text-[130px]">
                  🍽️
                </div>

                <h2 className="mt-5 text-3xl font-bold">
                  Taste the Difference
                </h2>

                <p className="mt-3 text-gray-400">
                  Fresh • Delicious • Memorable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-amber-900/30 bg-[#18130e]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-center text-3xl font-bold">
            Quick Navigation
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            
            <Link
              href="/qrscan"
              className="rounded-2xl border border-amber-900/30 bg-[#1d1812] p-6 text-center transition hover:border-amber-500"
            >
              <div className="text-4xl">📱</div>
              <h3 className="mt-3 font-bold">QR Scan</h3>
              <p className="mt-2 text-sm text-gray-500">
                Scan your table
              </p>
            </Link>

            <Link

              href="/menu"
              className="rounded-2xl border border-amber-900/30 bg-[#1d1812] p-6 text-center transition hover:border-amber-500"
            >
              <div className="text-4xl">🍴</div>
              <h3 className="mt-3 font-bold">Menu</h3>
              <p className="mt-2 text-sm text-gray-500">
                Browse food
              </p>
            </Link>

            <Link
              href="/product"
              className="rounded-2xl border border-amber-900/30 bg-[#1d1812] p-6 text-center transition hover:border-amber-500"
            >
              <div className="text-4xl">📦</div>
              <h3 className="mt-3 font-bold">Product Details</h3>
              <p className="mt-2 text-sm text-gray-500">
                Product Details
              </p>
            </Link>

            

            <Link
              href="/mycart"
              className="rounded-2xl border border-amber-900/30 bg-[#1d1812] p-6 text-center transition hover:border-amber-500"
            >
              <div className="text-4xl">🛒</div>
              <h3 className="mt-3 font-bold">My Cart</h3>
              <p className="mt-2 text-sm text-gray-500">
                View your items
              </p>
            </Link>

            <Link
              href="/checkout"
              className="rounded-2xl border border-amber-900/30 bg-[#1d1812] p-6 text-center transition hover:border-amber-500"
            >
              <div className="text-4xl">💳</div>
              <h3 className="mt-3 font-bold">Checkout</h3>
              <p className="mt-2 text-sm text-gray-500">
                Place your order
              </p>
            </Link>

            <Link
              href="/ordertracking"
              className="rounded-2xl border border-amber-900/30 bg-[#1d1812] p-6 text-center transition hover:border-amber-500"
            >
              <div className="text-4xl">📦</div>
              <h3 className="mt-3 font-bold">Order Tracking</h3>
              <p className="mt-2 text-sm text-gray-500">
                Track your order
              </p>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-amber-900/30 bg-[#120f0b] px-6 py-8 text-center">
        <p className="text-gray-500">
          © 2026 UV Snacks. All rights reserved.
        </p>
      </footer>
    </main>
  );
}