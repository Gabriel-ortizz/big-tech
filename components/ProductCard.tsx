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
        group flex flex-col overflow-hidden rounded-xl
        border border-white/10 bg-black/80
        shadow-lg transition
        hover:-translate-y-1 hover:shadow-yellow-500/30
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
      <div className="flex flex-1 flex-col p-3 sm:p-5 text-white">
        <h3 className="mb-1 text-sm sm:text-base font-semibold">
          {product.name}
        </h3>

        <p className="mb-3 text-lg sm:text-xl font-bold text-yellow-400">
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>

        {/* CTA */}
        <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:gap-3">
          <button
            aria-label={`Adicionar ${product.name} ao carrinho`}
            onClick={() => addToCart(product)}
            className="
              w-full rounded-md bg-yellow-500 py-2
              text-sm font-semibold text-black
              transition hover:bg-yellow-400
            "
          >
            Adicionar
          </button>

          <Link
            href={`/catalogo/${product.id}`}
            className="
              w-full rounded-md border border-white/30 py-2
              text-center text-sm font-semibold text-white
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
