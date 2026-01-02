"use client";

import Image from "next/image";
import Link from "next/link";
import { products, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured);
  const { addToCart } = useCart();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="mb-3 text-2xl sm:text-3xl font-bold text-white">
        Produtos em Destaque
      </h2>

      <p className="mb-8 max-w-xl text-sm sm:text-base text-neutral-400">
        Modelos mais procurados da nossa coleção. Adicione ao carrinho
        ou veja o catálogo completo.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {featured.map((product: Product) => (
          <div
            key={product.id}
            className="
              group flex flex-col overflow-hidden rounded-xl
              border border-white/10 bg-black/80
              shadow-lg transition hover:shadow-yellow-500/20
            "
          >
            {/* IMAGEM */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
            </div>

            {/* CONTEÚDO */}
            <div className="flex flex-1 flex-col p-3 sm:p-4">
              <h3 className="mb-1 text-sm sm:text-base font-semibold text-white">
                {product.name}
              </h3>

              <p className="mb-3 text-lg sm:text-xl font-bold text-yellow-400">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="
                  mt-auto w-full rounded-md
                  bg-yellow-500 py-2
                  text-sm font-semibold text-black
                  transition hover:bg-yellow-400
                "
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BOTÃO CATÁLOGO */}
      <div className="mt-12 text-center">
        <Link
          href="/catalogo"
          className="
            inline-block rounded-md
            border border-yellow-500
            px-8 py-3
            font-bold text-yellow-500
            hover:bg-yellow-500 hover:text-black
            transition
          "
        >
          Ver catálogo completo
        </Link>
      </div>
    </section>
  );
}
