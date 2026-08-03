"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CustomerSidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: "🏠" },
    { label: "QR Scan", href: "/qrscan", icon: "📷" },
    { label: "Menu", href: "/menu", icon: "🍽️" },
    { label: "Product Details", href: "/product/1", icon: "🛍️" },
    { label: "My Cart", href: "/mycart", icon: "🛒" },
    { label: "Checkout", href: "/checkout", icon: "💳" },
    { label: "Order Tracking", href: "/ordertracking", icon: "📦" },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-100 bg-white p-4">
      <Link href="/" className="mb-6 flex items-center gap-2.5 px-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D9381E] text-sm font-black text-white shadow-md shadow-[#D9381E]/20">
          UV
        </span>
        <span className="text-lg font-bold text-gray-900">UV Snacks</span>
      </Link>

      <nav className="flex-1 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            item.href.startsWith("/product")
              ? pathname.startsWith("/product")
              : pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium  transition-colors ${
                isActive
                  ? "bg-[#D9381E] text-white shadow-md shadow-[#D9381E]/20"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}