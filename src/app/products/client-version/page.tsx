"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export default function ProductsClientVersion() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const arr = await res.json();
    setProducts(arr);
  }
  return (
    <section>
      <ol className="list-none mx-auto w-fit">
      {products.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
      ))}
      </ol>
    </section>
  );
}
