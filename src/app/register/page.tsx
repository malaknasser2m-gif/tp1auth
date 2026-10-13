import Link from "next/link";
import AuthForm from "@/components/AuthForm";

export default function RegisterPage() {
  return (
    <main className="flex flex-col items-center gap-4 pt-24">
      <h1 className="text-2xl font-bold">Créer un compte</h1>
      <AuthForm mode="register" />
      <Link href="/login">J'ai déjà un compte</Link>
    </main>
  );
}