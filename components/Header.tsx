"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const isStickyDesktop =
    pathname.startsWith("/catalogo") ||
    pathname.startsWith("/carrinho");

  return (
    <header
      className={`
        w-full border-b border-neutral-800
        sticky top-0 z-50
        bg-black/90 backdrop-blur
        ${isStickyDesktop ? "md:sticky" : "md:relative"}
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

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="menu-link">Home</Link>
            <Link href="/catalogo" className="menu-link">Catálogo</Link>
            <Link href="/destaques" className="menu-link">Modelos em Destaque</Link>
            <Link href="/#contato" className="menu-link">Contato</Link>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
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
                <button className="hidden md:block rounded-md border border-yellow-500 px-4 py-2 text-sm font-medium text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
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

            {/* BOTÃO HAMBÚRGUER */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden text-white"
              aria-label="Abrir menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-black">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <Link href="/" onClick={() => setMenuOpen(false)} className="menu-link">
              Home
            </Link>
            <Link href="/catalogo" onClick={() => setMenuOpen(false)} className="menu-link">
              Catálogo
            </Link>
            <Link href="/destaques" onClick={() => setMenuOpen(false)} className="menu-link">
              Modelos em Destaque
            </Link>
            <Link href="/#contato" onClick={() => setMenuOpen(false)} className="menu-link">
              Contato
            </Link>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="mt-2 rounded-md border border-yellow-500 px-4 py-2 text-sm font-medium text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
                  Entrar
                </button>
              </SignInButton>
            </SignedOut>
          </nav>
        </div>
      )}
    </header>
  );
}
