import ComoFunciona from "./components/ComoFunciona";
import ProfesoresMejorEvaluados from "./components/ProfesoresMejorEvaluados";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <h1>Inicio</h1>

      <Link href="/perfil">
        Ver perfil de profesor 
        </Link>
      <ComoFunciona />
      <ProfesoresMejorEvaluados />
    </main>
  );
}

