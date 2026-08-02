"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { addToCart } from "@/lib/cart"; // Import your local storage helper

export const menuItems = [
  // 1. MOMOS
  {
    id: "steamed-momos-veg",
    name: "Steamed Momos (Veg)",
    category: "Momos",
    price: 80,
    description: "Delicate steamed dumplings stuffed with seasoned fresh vegetables.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "steamed-momos-nonveg",
    name: "Steamed Momos (Non-Veg)",
    category: "Momos",
    price: 100,
    description: "Juicy steamed chicken dumplings with aromatic spices.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "fried-momos",
    name: "Fried Momos",
    category: "Momos",
    price: 90,
    description: "Crispy golden fried momos served with spicy dip.",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "pan-fried-momos",
    name: "Pan Fried Momos",
    category: "Momos",
    price: 120,
    description: "Pan-seared momos tossed in savory sauces.",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "creamy-malai-momos",
    name: "Creamy Malai Momos",
    category: "Momos",
    price: 150,
    description: "Rich and creamy white sauce malai momos.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYts9e8PNxOm9GKJ3uwb0JPv9zpgb1EPfDWm6ywUnhnQ&s=10",
  },
  {
    id: "tandoori-momos",
    name: "Tandoori Momos",
    category: "Momos",
    price: 160,
    description: "Smoky tandoori-spiced charbroiled momos.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
  },

  // 2. NOODLES
  {
    id: "plain-maggi",
    name: "Plain Maggi",
    category: "Noodles",
    price: 50,
    description: "Classic instant comfort noodles.",
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "veg-maggi",
    name: "Veg Maggi",
    category: "Noodles",
    price: 70,
    description: "Maggi noodles loaded with garden vegetables.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "schezwan-maggi",
    name: "Schezwan Maggi",
    category: "Noodles",
    price: 100,
    description: "Instant noodles tossed in spicy Schezwan sauce.",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "chicken-maggi",
    name: "Chicken Maggi",
    category: "Noodles",
    price: 90,
    description: "Savory chicken chunks tossed with Maggi noodles.",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "veg-ramen",
    name: "Veg Ramen",
    category: "Noodles",
    price: 230,
    description: "Authentic flavorful vegetable broth ramen.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTVdn_1_9gumCtlV-g7ME0pNI_CXCqvZ0Kjq_hck6N-Q&s=10",
  },

  // 3. PANI PURI (Updated with actual Golgappa/Pani Puri imagery)
  {
    id: "panipuri",
    name: "Panipuri",
    category: "Pani Puri",
    price: 50,
    description: "Crispy hollow puri balls served with spicy mint water.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PRTd2a6WXWxRaG8H5oOTflkQRmEBKQFHHSUYU3e8Fw&s"
  },
  {
    id: "cheese-puri",
    name: "Cheese Puri",
    category: "Pani Puri",
    price: 80,
    description: "Puri filled with savory stuffing and melted cheese.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnG_F29oXSksI-fLS8MwljvzLUb6GGrfmZcRvAGl_tg&s=10",
  },
  {
    id: "dahi-puri",
    name: "Dahi Puri",
    category: "Pani Puri",
    price: 90,
    description: "Crispy puris filled with sweet yogurt and chutneys.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
  },

  // 4. CORN
  {
    id: "butter-corn",
    name: "Butter Corn",
    category: "Corn",
    price: 40,
    description: "Steamed sweet corn kernels tossed in rich butter.",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "masala-corn",
    name: "Masala Corn",
    category: "Corn",
    price: 50,
    description: "Spiced sweet corn with tangy chat masala.",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "crispy-cheese-corn",
    name: "Crispy Cheese Corn",
    category: "Corn",
    price: 90,
    description: "Golden crispy fried corn topped with cheese.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  },

  // 5. SANDWICH
  {
    id: "veg-sandwich",
    name: "Veg Sandwich",
    category: "Sandwich",
    price: 60,
    description: "Fresh vegetable grilled sandwich.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "chicken-sandwich",
    name: "Chicken Sandwich",
    category: "Sandwich",
    price: 90,
    description: "Grilled sandwich loaded with juicy chicken.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
  },

  // 6. OMELETTE
  {
    id: "plain-omelette",
    name: "Plain Omelette",
    category: "Omelette",
    price: 25,
    description: "Classic fluffy spiced egg omelette.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQzfT7Vqd30XQnee5uuEzHoFU4Du0rdpuke7j0sPsYA&s=10",
  },
  {
    id: "bread-omelette",
    name: "Bread Omlette",
    category: "Omelette",
    price: 70,
    description: "Classic spiced fluffy omelette wrapped over toasted bread slices.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
  },

  // 7. BREAD PIZZA
  {
    id: "corn-cheese-pizza",
    name: "Corn Cheese Pizza",
    category: "Bread Pizza",
    price: 60,
    description: "Crispy bread pizza topped with melted cheese and sweet corn.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "chicken-pizza",
    name: "Chicken Pizza",
    category: "Bread Pizza",
    price: 80,
    description: "Delicious bread pizza topped with savory chicken chunks.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
  },

  // 8. FRIED ITEMS
  {
    id: "french-fries",
    name: "French Fries",
    category: "Fried Items",
    price: 60,
    description: "Crispy golden salted potato fries.",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cheese-ball",
    name: "Cheese Ball",
    category: "Fried Items",
    price: 80,
    description: "Crispy fried cheese balls with gooey centers.",
    image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da2b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "kfc-chicken-popcorn",
    name: "KFC Chicken Popcorn",
    category: "Fried Items",
    price: 100,
    description: "Crispy bite-sized crunchy chicken pieces.",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "loaded-french-fries",
    name: "Loaded French Fries",
    category: "Fried Items",
    price: 130,
    description: "Crispy fries loaded with cheese sauce and spices.",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
  },

  // 9. COMBOS
  {
    id: "veg-platter",
    name: "Veg Money Saver Combo",
    category: "Combos",
    price: 120,
    description: "Veg Momos, Cheeseball, Smiley, French Fries",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "non-veg-platter",
    name: "Non Veg Money Saver Combo",
    category: "Combos",
    price: 180,
    description: "Chicken Momos, Cheeseball, Chicken Nuggets, Smiley, French Fries",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "jumbo-platter",
    name: "Jumbo Money Saver Combo",
    category: "Combos",
    price: 250,
    description: "Veg Momos, Non Veg Momos, Cheeseball, Smiley, Nuggets, KFC Popcorn, French Fries",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
  },
];

const categories = [
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

function ItemImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gray-100 font-semibold text-gray-400">
        {alt}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setError(true)}
    />
  );
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: (typeof menuItems)[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      description: item.description,
      category: item.category,
      quantity: 1,
    });
    alert(`${item.name} added to cart!`);
  };

  return (
    <main className="min-h-screen bg-[#F9FAFB] text-gray-800">
      {/* Top Navbar Header */}
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
              className="rounded-full bg-[#D9381E] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-[#D9381E]/20 transition-all hover:bg-[#b82d16]"
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

      {/* Main Content Area */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        {/* Page Header Title */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D9381E]">
            Our Selection
          </p>

          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Menu Management
          </h1>

          <p className="mt-1.5 max-w-2xl text-sm text-gray-500 sm:text-base">
            Discover our delicious selection and choose your favourite dish.
          </p>
        </div>

        {/* Search Bar & Category Filter Pills */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <svg
              className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, menu..."
              className="w-full rounded-full border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#D9381E] focus:ring-2 focus:ring-[#D9381E]/20"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-[#D9381E] text-white shadow-md shadow-[#D9381E]/20"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State Card */}
        {filteredItems.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white text-center p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl">
              🍽️
            </div>

            <h2 className="text-lg font-bold text-gray-900">No dishes found</h2>

            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or category filter.
            </p>
          </div>
        ) : (
          /* Cards Grid View */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Product Banner Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <ItemImage src={item.image} alt={item.name} />

                  {/* Top Category Badge */}
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Main Card Content */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h2 className="font-bold text-gray-900 transition-colors group-hover:text-[#D9381E]">
                      {item.name}
                    </h2>

                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3.5">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        Price
                      </span>
                      <span className="text-lg font-extrabold text-[#D9381E]">
                        ₹{item.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="rounded-full bg-gray-900 px-3 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-gray-800 active:scale-95"
                      >
                        Add
                      </button>

                      <Link
                        href={`/product/${item.id}`}
                        className="rounded-full bg-[#D9381E] px-3 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#b82d16] active:scale-95"
                      >
                        Details
                      </Link>
                    </div>
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