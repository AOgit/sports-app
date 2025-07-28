import Link from "next/link";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

export default function NavBar() {
  return (
    <nav className="flex justify-center items-center gap-6 min-h-12 top-0">
      <Link href={"/"} className="hover:text-amber-300">
        Home
      </Link>
      <Link href={"/about"} className="hover:text-amber-300">
        About
      </Link>
      <Link href={"/sports"} className="hover:text-amber-300">
        Sports
      </Link>
      <Link href={"/users/client-version"} className="hover:text-amber-300">
        Users client
      </Link>
      <Link href={"/users/server-version"} className="hover:text-amber-300">
        Users server
      </Link>
            <Link href={"/products/client-version"} className="hover:text-amber-300">
        Products client
      </Link>
      <Link href={"/products/server-version"} className="hover:text-amber-300">
        Products server
      </Link>
      <Link href={"/categories"} className="hover:text-amber-300">
          Categories
      </Link>
            <Link href={"/categories/create"} className="hover:text-amber-300">
          Create category
      </Link>
      <Link href={"/products/create"} className="hover:text-amber-300">
          Create product
      </Link>
      <ThemeToggler />
    </nav>
  );
}
