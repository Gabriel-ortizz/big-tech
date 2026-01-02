import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Catalogo() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-bold tracking-wide">
          Catálogo de Relógios
        </h1>

        <p className="max-w-2xl text-white/70">
          Descubra nossa coleção exclusiva de relógios premium,
          pensados para quem valoriza estilo, precisão e sofisticação.
        </p>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
