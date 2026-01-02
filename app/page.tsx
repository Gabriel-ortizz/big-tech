import Carousel from "@/components/Carousel";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Carousel />
      <FeaturedProducts />
    </main>
  );
}
