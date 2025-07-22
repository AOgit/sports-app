import Link from "next/link";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="flex justify-center items-center gap-6 min-h-12 top-0">
        <Link href={"/settings/user"}>User settings</Link>
        <Link href={"/settings/organization"}>Organization settigs</Link>
      </nav>
      {children}
    </>
  );
}