"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <div
      className="
        group overflow-hidden rounded-xl
        border border-white/10 bg-black/80
        shadow-lg transition
        hover:-translate-y-1 hover:shadow-yellow-500/30
        flex flex-col
      "
    >
      {/* IMAGEM */}
      <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
      </div>

      {/* CONTEÚDO */}
      <div className="flex flex-col flex-1 p-4 sm:p-5 text-white">
        <h3 className="mb-2 text-base sm:text-lg font-semibold">
          {product.name}
        </h3>

        <p className="mb-4 text-xl sm:text-2xl font-bold text-yellow-400">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>

        {/* CTA */}
        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <button
            aria-label={`Adicionar ${product.name} ao carrinho`}
            onClick={() => addToCart(product)}
            className="
              w-full rounded-md bg-yellow-500 py-2
              font-semibold text-black
              transition hover:bg-yellow-400
            "
          >
            Adicionar
          </button>

          <Link
            href={`/catalogo/${product.id}`}
            className="
              w-full rounded-md border border-white/30 py-2
              text-center font-semibold text-white
              transition hover:bg-white hover:text-black
            "
          >
            Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}
