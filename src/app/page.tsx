"use client";

import Link from "next/link";
import FeatureBadges from "@/components/FeatureBadges";
import {menuItems} from "@/lib/menuData";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 pb-24">
    
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200 px-6 py-3.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D9381E] text-white font-bold">
            <span className="text-lg">UV</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider text-orange-600 block leading-none">UV SNACKS</span>
            <span className="text-[10px] font-semibold text-neutral-600 tracking-wide uppercase">Tasty Bites, Happy Moments!</span>
          </div>
       </div>

        <div className="flex items-center gap-3">
          <Link href="/qrscan" className="text-xs bg-neutral-100 hover:bg-neutral-300 text-neutral-700 px-3.5 py-2 rounded-xl border border-neutral-200 font-medium transition">
            📷 Scan QR
          </Link>
          <Link href="/mycart" className="text-xs bg-neutral-100 hover:bg-neutral-300 text-neutral-700 px-3.5 py-2 rounded-xl border border-neutral-200 font-medium transition">
            🛒 My Cart
          </Link>
        </div>
      </header>

      <section className="px-8 mt-6 flex-col items-center text-center">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-neutral-900">
            WELCOME TO UV SNACKS
            </h1>
          <p className="text-xs text-neutral-500 mt-1 mb-1">
            Quick delivery and delicious snacks waiting for you.
          </p>
          </div>
          <FeatureBadges />
        </section>

        <div className="px-8 mt-4">
        <Link 
          href="/menu" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-rose-700 text-white rounded-xl text-xs font-bold shadow-sm hover:bg-rose-800 transition-colors"
        >
          Manage Menu →
        </Link>
      </div>

      <section className="mt-8 px-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-bold text-neutral-800">Explore Categories</h3>
          <Link href="/menu" className="text-xs text-red-600 font-semibold hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          
          <Link href="/menu" className="bg-white border border-neutral-200 rounded-2xl p-4 text-center hover:border-red-500 transition group shadow-2xs">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-neutral-100 relative border border-neutral-200">
              <img 
                src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=200&auto=format&fit=crop" 
                alt="Momos" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <span className="text-xs font-bold text-neutral-800 group-hover:text-red-600">Momos</span>
          </Link>

          <Link href="/menu" className="bg-white border border-neutral-200 rounded-2xl p-4 text-center hover:border-red-500 transition group shadow-2xs">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-neutral-100 relative border border-neutral-200">
              <img 
                src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&auto=format&fit=crop" 
                alt="Noodles" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <span className="text-xs font-bold text-neutral-800 group-hover:text-red-600">Noodles</span>
          </Link>

          <Link href="/menu" className="bg-white border border-neutral-200 rounded-2xl p-4 text-center hover:border-red-500 transition group shadow-2xs">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-neutral-100 relative border border-neutral-200">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&auto=format&fit=crop" 
                alt="Pizza" 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>
            <span className="text-xs font-bold text-neutral-800 group-hover:text-red-600">Pizza</span>
          </Link>

        </div>
      </section>

      <section className="mt-8 px-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-bold text-neutral-800">UV Money Saver Combo 🔥</h3>
          <Link href="/menu" className="text-xs text-red-600 font-semibold hover:underline">
            View All Combos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {menuItems
            .filter((item) => item.category === "Combos")
            .slice(0, 3)
            .map((item) => (
              <div key={item.id} className="bg-white border border-neutral-200 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <div className="w-full h-28 bg-neutral-100 rounded-xl overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="inline-block mt-3 text-[10px] bg-emerald-50 text-emerald-600 font-bold px-2.5 py-0.5 rounded border border-emerald-200 uppercase">
                    Combo Offer
                  </span>
                  <h4 className="text-sm font-extrabold text-neutral-900 mt-2">{item.name}</h4>
                  <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-sm font-black text-red-600">₹{item.price}.00</span>
                  <Link
                    href={`/product/${item.id}`}
                    className="bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold px-3.5 py-1.5 rounded-lg transition border border-red-200"
                  >
                    + Add Combo
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="mt-8 px-8">
        <div className="border border-red-200 bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-2xl p-6 relative overflow-hidden shadow-md">
          <span className="bg-black/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
            Budget Cravings
          </span>
          <h3 className="text-2xl font-black mt-2">EVERYTHING @ ₹100</h3>
          <p className="text-xs text-red-100 mt-1">Maggi + Bread Omelette, Pani Puri + Momos pairings available now</p>
          <Link 
            href="/menu" 
            className="mt-4 inline-block text-xs bg-white text-red-600 font-bold px-4 py-2.5 rounded-xl shadow-sm hover:bg-neutral-100 transition"
          >
            Explore Deals →
          </Link>
        </div>
      </section>

      <section className="mt-8 px-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-bold text-neutral-800">Most Loved 🔥</h3>
          <Link href="/ordertracking" className="text-xs text-red-600 font-semibold hover:underline">
            Track Orders →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          
          <div className="bg-white border border-neutral-200 rounded-2xl p-4 flex items-center gap-4 shadow-2xs">
            <div className="w-20 h-20 bg-neutral-100 rounded-xl overflow-hidden relative flex-shrink-0 border border-neutral-200">
              <img src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=200&auto=format&fit=crop" alt="Momos" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] bg-neutral-100 text-neutral-600 font-bold px-2 py-0.5 rounded">Momos</span>
              <h4 className="text-xs font-extrabold text-neutral-900 truncate mt-1">Creamy Malai Momos</h4>
              <p className="text-[11px] text-neutral-400 mt-0.5">1600 orders</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs font-black text-red-600">₹230.00</span>
                <Link href="/product/1" className="bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-lg transition border border-red-200">
                  + Add
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-4 flex items-center gap-4 shadow-2xs">
            <div className="w-20 h-20 bg-neutral-100 rounded-xl overflow-hidden relative flex-shrink-0 border border-neutral-200">
              <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&auto=format&fit=crop" alt="Pizza" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] bg-neutral-100 text-neutral-600 font-bold px-2 py-0.5 rounded">Pizza</span>
              <h4 className="text-xs font-extrabold text-neutral-900 truncate mt-1">Corn Cheese Pizza</h4>
              <p className="text-[11px] text-neutral-400 mt-0.5">1240 orders</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs font-black text-red-600">₹140.00</span>
                <Link href="/product/2" className="bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-lg transition border border-red-200">
                  + Add
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}