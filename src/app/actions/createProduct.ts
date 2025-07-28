"use server"

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
    const title = formData.get("title")?.toString();
    const price = Number(formData.get('price')?.toString())
    const description = formData.get('description')?.toString();
    const categoryId = Number(formData.get('categoryId')?.toString());
    const images = [formData.get('image')?.toString()];
    //валидация
    // console.log(title, price, description, categoryId, images);
    
    // сохранение в базу
    const res = await fetch("https://api.escuelajs.co/api/v1/products/", {
    method: "POST",
    body: JSON.stringify({ title, price, description, categoryId, images }),
    headers: {
        "Content-Type":"Application/JSON"
    }
  });

  revalidateTag("products");
  redirect('/products/server-version');

}