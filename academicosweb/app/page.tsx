import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <h1>Inicio</h1>

      <Link href="/perfil">
        Ver perfil de profesor
      </Link>
    </main>
  );
}