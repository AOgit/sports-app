"use client";
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
        <li key={product.id} className="py-4">
          <span>{product.title} </span>
          <span> - {product.price}$ </span>
          <img className="w-[400px]" src={product.images[0]} alt="product image" />
        </li>
      ))}
      </ol>
    </section>
  );
}
