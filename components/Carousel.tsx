"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/CONSULTORIA.png",
    alt: "Consultoria",
    title: "Consultoria Especializada",
    description: "Soluções personalizadas para o seu negócio",
    cta: "Ver catálogo",
    href: "/catalogo",
  },
  {
    src: "/banner-2.jpg",
    alt: "Relógios premium",
    title: "Relógios Premium",
    description: "Design e sofisticação em cada detalhe",
    cta: "Ver catálogo",
    href: "/catalogo",
  },
  {
    src: "/banner-3.jpg",
    alt: "Coleção exclusiva",
    title: "Coleção Exclusiva",
    description: "Modelos selecionados para você",
    cta: "Ver catálogo",
    href: "/catalogo",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="
              relative w-full shrink-0
              h-80
              sm:h-105
              md:h-130
              lg:h-150
            "
          >
            {/* IMAGEM */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50" />

            {/* CONTEÚDO */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="max-w-2xl px-6 text-center text-white">
                <h2
                  className="
                    mb-3 font-bold
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                  "
                >
                  {image.title}
                </h2>

                <p
                  className="
                    mb-6 opacity-90
                    text-sm
                    sm:text-base
                    md:text-lg
                  "
                >
                  {image.description}
                </p>

                <Link
                  href={image.href}
                  className="
                    inline-block rounded-md
                    bg-yellow-500 px-6 py-3
                    text-sm sm:text-base
                    font-semibold text-black
                    transition hover:bg-yellow-400
                  "
                >
                  {image.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTÃO ANTERIOR */}
      <button
        onClick={() =>
          setCurrent((current - 1 + images.length) % images.length)
        }
        className="
          absolute left-3 sm:left-6
          top-1/2 z-20 -translate-y-1/2
          rounded-full bg-black/60
          p-2 sm:p-3
          text-xl sm:text-2xl
          text-white transition hover:bg-black
        "
      >
        ‹
      </button>

      {/* BOTÃO PRÓXIMO */}
      <button
        onClick={() => setCurrent((current + 1) % images.length)}
        className="
          absolute right-3 sm:right-6
          top-1/2 z-20 -translate-y-1/2
          rounded-full bg-black/60
          p-2 sm:p-3
          text-xl sm:text-2xl
          text-white transition hover:bg-black
        "
      >
        ›
      </button>

      {/* INDICADORES */}
      <div
        className="
          absolute bottom-4 sm:bottom-6
          left-1/2 z-20
          flex -translate-x-1/2 gap-2 sm:gap-3
        "
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-2 w-2 sm:h-3 sm:w-3
              rounded-full transition
              ${current === index ? "bg-yellow-500" : "bg-white/40"}
            `}
          />
        ))}
      </div>
    </section>
  );
}
