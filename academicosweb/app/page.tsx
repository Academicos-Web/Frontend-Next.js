import ComoFunciona from "./components/ComoFunciona";
import ProfesoresMejorEvaluados from "./components/ProfesoresMejorEvaluados";
import Header from "@/components/Header";
import Inicio from "@/app/components/Inicio";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Inicio />
      <h1>Inicio</h1>

      <Link href="/perfil">
        Ver perfil de profesor 
        </Link>
      <ComoFunciona />
      <ProfesoresMejorEvaluados />
    </main>
  );
}

