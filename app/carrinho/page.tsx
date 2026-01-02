"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function Carrinho() {
  const { items, increase, decrease, remove, total } = useCart();

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-24 text-center">
        <h1 className="mb-4 text-2xl font-bold text-white">
          Seu carrinho está vazio
        </h1>

        <p className="mb-8 text-neutral-400">
          Adicione produtos para continuar.
        </p>

        <Link
          href="/catalogo"
          className="inline-block rounded-md border border-yellow-500 px-6 py-3 font-bold text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
        >
          Ver catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="mb-8 sm:mb-10 text-2xl sm:text-3xl font-bold text-white">
        Carrinho de Compras
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* LISTA DE ITENS */}
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="
                flex flex-col sm:flex-row
                gap-4 sm:gap-6
                rounded-lg border border-neutral-800 bg-neutral-900
                p-4
              "
            >
              {/* IMAGEM */}
              <div className="relative h-32 w-full sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* INFO */}
              <div className="flex flex-1 flex-col justify-between gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    R$ {item.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decrease(item.id)}
                      aria-label="Diminuir quantidade"
                      className="h-8 w-8 rounded border border-neutral-700 text-white hover:border-yellow-500 transition"
                    >
                      −
                    </button>

                    <span className="min-w-6 text-center text-white">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increase(item.id)}
                      aria-label="Aumentar quantidade"
                      className="h-8 w-8 rounded border border-neutral-700 text-white hover:border-yellow-500 transition"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => remove(item.id)}
                    className="sm:ml-auto text-sm text-neutral-400 hover:text-red-400 transition text-left sm:text-right"
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RESUMO */}
        <aside
          className="
            h-fit
            rounded-lg border border-neutral-800 bg-neutral-900
            p-5 sm:p-6
            sticky top-6
          "
        >
          <h2 className="mb-6 text-lg sm:text-xl font-bold text-white">
            Resumo do pedido
          </h2>

          <div className="mb-4 flex justify-between text-neutral-300">
            <span>Total</span>
            <span className="font-bold text-white">
              R$ {total.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => alert("Checkout em breve")}
            className="mb-4 w-full rounded-md bg-yellow-500 py-3 font-bold text-black hover:bg-yellow-400 transition"
          >
            Finalizar compra
          </button>

          <Link
            href="/catalogo"
            className="block text-center text-sm text-neutral-400 hover:text-yellow-500 transition"
          >
            Continuar comprando
          </Link>
        </aside>
      </div>
    </main>
  );
}
