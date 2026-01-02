"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const pathname = usePathname();
  const { items } = useCart();

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const isSticky =
    pathname.startsWith("/catalogo") ||
    pathname.startsWith("/carrinho");

  return (
    <header
      className={`
        w-full border-b border-neutral-800
        ${
          isSticky
            ? "sticky top-0 z-50 bg-black/90 backdrop-blur"
            : "relative bg-black"
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-yellow-500">
              BIG TECH
            </span>
            <span className="text-xs tracking-widest text-neutral-400">
              watches
            </span>
          </Link>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-sm font-medium text-white hover:text-yellow-500 transition"
            >
              Home
            </Link>

            <Link
              href="/catalogo"
              className="text-sm font-medium text-white hover:text-yellow-500 transition"
            >
              Catálogo
            </Link>

            <Link
              href="/destaques"
              className="text-sm font-medium text-white hover:text-yellow-500 transition"
            >
              Modelos em Destaque
            </Link>

            <Link
              href="/#contato"
              className="text-sm font-medium text-white hover:text-yellow-500 transition"
            >
              Contato
            </Link>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-5">
            <Link
              href="/carrinho"
              className="relative text-sm font-medium text-white hover:text-yellow-500 transition"
            >
              Carrinho

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-black">
                  {totalItems}
                </span>
              )}
            </Link>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="rounded-md border border-yellow-500 px-4 py-2 text-sm font-medium text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                  Entrar
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-9 h-9",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
