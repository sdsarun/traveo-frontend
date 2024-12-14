import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-bold text-3xl">Comming soon...</h1>
      <Link href={"/api/auth/login"}>Log In</Link>
      <Link href={"/api/auth/logout"}>Log Out</Link>
    </div>
  );
}