"use client"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="w-full flex justify-center items-center flex-col p-6">
        <h2 className="font-bold">Page not found!</h2>
        <Link className="underline hover:text-blue-400" href={"/"}>Back to home</Link>
    </div>
  )
}
