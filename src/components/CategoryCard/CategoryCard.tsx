"use client";
import { Category } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
 
  return (
    <li key={category.id} className="py-4">
      <span>{category.name} </span>
      <img className="w-[400px]" src={category.image} alt="category image" />
    </li>
  );
}
