import { Product } from "@/types";
import { useEffect, useState } from "react";

 const ProductsClientVersion = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await res.json();

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
export default ProductsClientVersion