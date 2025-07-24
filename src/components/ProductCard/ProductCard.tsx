"use client";
import { Product } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  function handleDelete(id: number) {
    fetchDelete(id);
  }

  async function fetchDelete(id: number) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      // revalidateTag("products");
      router.refresh();
    }
  }

  return (
    <li key={product.id} className="py-4">
      <span>{product.title} </span>
      <span> - {product.price}$ </span>
      <img className="w-[400px]" src={product.images[0]} alt="product image" />
      <button type="button" onClick={() => {handleDelete(product.id)}}>
        Delete
      </button>
      <Link href={`/products/server-version/${product.id}`}>Details</Link>
    </li>
  );
}
