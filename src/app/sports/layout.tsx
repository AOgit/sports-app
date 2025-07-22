import Link from "next/link";

export default function SportsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex justify-center items-center gap-6 min-h-12 top-0">
        <Link href={"/sports/football"}>Football</Link>
        <Link href={"/sports/tennis"}>Tennis</Link>
        <Link href={"/sports/swimming"}>Swimming</Link>
        <Link href={"/sports/basketball"}>Basketball</Link>
        <Link href={"/sports/yoga"}>Yoga</Link>
      </nav>
      {children}
    </>
  );
}