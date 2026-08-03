"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { menuItems, MenuCategory } from "@/lib/menuData";
import { addToCart } from "@/lib/cart";

const categories: (MenuCategory | "All")[] = [
  "All",
  "Momos",
  "Noodles",
  "Pani Puri",
  "Corn",
  "Sandwich",
  "Omelette",
  "Bread Pizza",
  "Fried Items",
  "Combos",
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      description: item.description,
      image: item.image,
      quantity: 1,
    });
    alert(`1 × ${item.name} added to cart!`);
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
              className="rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-[#D9381E]"
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

      {/* Hero / Search Section */}
      <section className="bg-white border-b border-gray-100 py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Menu
          </h1>
          <p className="mt-2 text-sm text-gray-500 max-w-xl mx-auto">
            Freshly prepared snacks, fast bites, and amazing combos delivered hot and fast.
          </p>

          <div className="mt-6 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search for snacks, momos, noodles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-gray-50 px-5 py-3 text-sm text-gray-900 shadow-inner outline-none focus:border-[#D9381E] focus:bg-white focus:ring-1 focus:ring-[#D9381E]"
            />
          </div>

          {/* Categories Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                  selectedCategory === category
                    ? "bg-[#D9381E] text-white shadow-md shadow-[#D9381E]/20"
                    : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid Section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-lg font-bold text-gray-800">No items found</h2>
            <p className="text-sm text-gray-500 mt-1">Try searching for something else or pick another category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md hover:border-gray-200"
              >
                <Link href={`/product/${item.id}`} className="relative h-48 w-full overflow-hidden bg-gray-100 block">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-gray-800 shadow-sm">
                    {item.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <Link href={`/product/${item.id}`}>
                      <h2 className="text-base font-bold text-gray-900 group-hover:text-[#D9381E] transition-colors">
                        {item.name}
                      </h2>
                    </Link>
                    <p className="mt-1.5 text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-2.5 border-t border-gray-50 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-extrabold text-[#D9381E]">
                        ₹{item.price}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="rounded-full bg-[#D9381E] px-4 py-2 text-xs font-bold text-white shadow-sm shadow-[#D9381E]/20 transition-all hover:bg-[#b82d16]"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <Link
                      href={`/product/${item.id}`}
                      className="w-full text-center rounded-full border border-gray-200 bg-gray-50 py-2 text-xs font-semibold text-gray-700 transition-all hover:bg-gray-100 hover:border-gray-300"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
