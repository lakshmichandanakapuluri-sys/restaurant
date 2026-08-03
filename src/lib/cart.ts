export interface CartItem {
id: string;
name: string;
category: string;
price: number;
description: string;
image: string;
quantity: number;
}

const CART_KEY = "UV Snacks-cart";

export function getCart(): CartItem[] {
if (typeof window === "undefined") {
return [];
}

try {
const savedCart = localStorage.getItem(CART_KEY);

if (!savedCart) {
  return [];
}

return JSON.parse(savedCart) as CartItem[];

} catch (error) {
console.error("Failed to read cart:", error);
return [];
}
}

export function saveCart(cart: CartItem[]): void {
if (typeof window === "undefined") {
return;
}

localStorage.setItem(CART_KEY, JSON.stringify(cart));

window.dispatchEvent(new Event("cartUpdated"));
}

export function addToCart(item: CartItem): CartItem[] {
const cart = getCart();

const existingItem = cart.find((cartItem) => cartItem.id === item.id);

let updatedCart: CartItem[];

if (existingItem) {
updatedCart = cart.map((cartItem) =>
cartItem.id === item.id
? {
...cartItem,
quantity: cartItem.quantity + item.quantity,
}
: cartItem
);
} else {
updatedCart = [...cart, item];
}

saveCart(updatedCart);

return updatedCart;
}

export function updateCartQuantity(
id: string,
quantity: number
): CartItem[] {
const cart = getCart();

if (quantity <= 0) {
const updatedCart = cart.filter((item) => item.id !== id);
saveCart(updatedCart);
return updatedCart;
}

const updatedCart = cart.map((item) =>
item.id === id
? {
...item,
quantity,
}
: item
);

saveCart(updatedCart);

return updatedCart;
}

export function removeFromCart(id: string): CartItem[] {
const cart = getCart();

const updatedCart = cart.filter((item) => item.id !== id);

saveCart(updatedCart);

return updatedCart;
}

export function clearCart(): void {
if (typeof window === "undefined") {
return;
}

localStorage.removeItem(CART_KEY);
window.dispatchEvent(new Event("cartUpdated"));
}