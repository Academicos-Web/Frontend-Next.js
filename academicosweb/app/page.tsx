import Header from "@/components/Header";
import Link from "next/link";
import Header from "@/components/Header";


export default function Home() {
  return (
    <main className="container">
      <Header />
      <h1>Inicio</h1>

      <Link href="/perfil">
        Ver perfil de profesor
      </Link>
    </main>
  );
}