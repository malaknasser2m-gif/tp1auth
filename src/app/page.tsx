import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 pt-24">
      <h1 className="text-2xl font-bold">TP Authentification</h1>
      <Link href="/login">Se connecter</Link>
      <Link href="/register">S'inscrire</Link>
    </main>
  );
}