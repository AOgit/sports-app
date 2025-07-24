import ProductCard from "@/components/ProductCard/ProductCard";
import { Product } from "@/types";
import { useEffect, useState } from "react";

 const ProductsServerVersion = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
      next: {tags: ["products"]},
      cache: "no-store"
    });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await res.json();

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
export default ProductsServerVersion

// default -> SSG - server side generation
// -> только при первом рендере -> для статической неизменяемой информации

// next: {revalidate: 60}, -> ISR -> incremental server regeneretion
// каждое n времени генерируется новый 
// через 40 сек - получит сохраненный вариант
// 180 сек - делает еще один запрос -> возвращает опять старый вариант, 
// но готовит новый для следующих пользователей

// next: {revalidate: 0}, -> SSR -> генерация при каждом запросе
// -> гораздо более затратно для сервера

//  cache: "no-store", -> SSR -> такой же вариант

// SSG - не обновляется после
// SSR - когда при каждом запросе на сервер обновляется
// ISR - по таймеру