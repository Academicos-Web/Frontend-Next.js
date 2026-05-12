import ComoFunciona from "@/components/ComoFunciona";
import ProfesoresMejorEvaluados from "@/components/ProfesoresMejorEvaluados";
import Header from "@/components/Header";
import Inicio from "@/components/Inicio";
import ProfesoresFiltrados from "@/components/ProfesoresFiltrados";

import Link from "next/link";

export default function FiltroPage() {

  return (
    <main style={{ padding: "0rem", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      
      <Header />
      <Inicio />
        <Link href="/comparador">
        Comparador 
        </Link>
      <Link href="/perfil">
        Ver perfil de profesor
      </Link>

      <ComoFunciona />
      <ProfesoresMejorEvaluados />
      <ProfesoresFiltrados />
    </main>
  );
}