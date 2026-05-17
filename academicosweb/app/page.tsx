import Header from "@/components/Header";
import Inicio from "@/components/Inicio";
import Link from "next/link";

import ComoFunciona from "@/components/ComoFunciona";
import ProfesoresMejorEvaluados from "@/components/ProfesoresMejorEvaluados";
import ProfesoresFiltrados from "@/components/ProfesoresFiltrados";

import InicioParteFinal from "./Inicio-partefinal/Inicio-partefinal";

export default function FiltroPage() {
  return (
    <main
      style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      {/* HERO / INICIO */}
      <Inicio />

      {/* LINKS RÁPIDOS */}
      <section
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          padding: "1.5rem",
          flexWrap: "wrap",
        }}
      >
      </section>

      {/* SECCIONES */}
      <ComoFunciona />

      <ProfesoresMejorEvaluados />

      <ProfesoresFiltrados />

      <InicioParteFinal />
    </main>
  );
}