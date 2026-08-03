"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export default function CheckoutPage() {
  const router = useRouter();

  const [cart, setCart] = useState<CartItem[]>([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [table, setTable] = useState("");
  const [payment, setPayment] = useState("Cash");

  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("UV Snacks-cart") || "[]"
    );

    setCart(savedCart);
  }, []);

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const tax = Math.round(subtotal * 0.05);

  const total = subtotal + tax;

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !table) {
      alert("Please fill all required details.");
      return;
    }

    const order = {
      orderId: "SV" + Math.floor(100000 + Math.random() * 900000),
      customerName: name,
      phone,
      table,
      payment,
      items: cart,
      total,
      status: "Order Confirmed",
    };

    localStorage.setItem(
      "UV Snacks-order",
      JSON.stringify(order)
    );

    localStorage.removeItem("UV Snacks-cart");

    router.push("/ordertracking");
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#111827]">
  
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
            href="/mycart"
            className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#374151] transition hover:bg-[#F9FAFB] hover:text-[#111827]"
          >
            ← Back to Cart
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8">
          <span className="text-xs font-bold tracking-wider uppercase text-[#E53935]">
            Final Step
          </span>
          <h1 className="mt-1 text-3xl font-extrabold text-[#111827] sm:text-4xl">
            Checkout
          </h1>
        </div>

        <form
          onSubmit={placeOrder}
          className="mt-6 grid gap-8 lg:grid-cols-[1fr_360px]"
        >

          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-[#111827]">
              Customer Details
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
                  Name *
                </label>

                <input
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#E53935] focus:bg-white focus:ring-1 focus:ring-[#E53935]"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
                  Phone Number *
                </label>

                <input
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#E53935] focus:bg-white focus:ring-1 focus:ring-[#E53935]"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
                  Table Number *
                </label>

                <input
                  value={table}
                  onChange={(e) =>
                    setTable(e.target.value)
                  }
                  placeholder="Enter table number"
                  className="w-full rounded-xl border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#E53935] focus:bg-white focus:ring-1 focus:ring-[#E53935]"
                />
              </div>

              <div>
                <label className="mb-2.5 block text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
                  Payment Method
                </label>

                <div className="grid gap-3 sm:grid-cols-3">
                  {["Cash", "UPI", "Card"].map(
                    (method) => (
                      <button
                        type="button"
                        key={method}
                        onClick={() =>
                          setPayment(method)
                        }
                        className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                          payment === method
                            ? "border-[#E53935] bg-[#E53935] text-white shadow-sm"
                            : "border-[#E53935]/20 bg-white text-[#374151] hover:bg-[#F9FAFB]"
                        }`}
                      >
                        {method}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="h-fit rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#111827]">
              Order Summary
            </h2>

            <div className="mt-5 space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm text-[#4B5563]"
                >
                  <span className="font-medium">
                    {item.name} × {item.quantity}
                  </span>

                  <span className="font-semibold text-[#111827]">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-[#E5E7EB] pt-5 space-y-3 text-sm">
              <div className="flex justify-between text-[#4B5563]">
                <span>Subtotal</span>
                <span className="font-semibold text-[#111827]">₹{subtotal}</span>
              </div>

              <div className="flex justify-between text-[#4B5563]">
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

            <button
              type="submit"
              disabled={cart.length === 0}
              className="mt-6 w-full rounded-xl bg-[#E53935] px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-[#C62828] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Place Order
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}