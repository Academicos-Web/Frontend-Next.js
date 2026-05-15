import CajaDocente from "./CajaDocente/CajaDocente/CajaDocente";
import Link from "next/link";

import Inicio from "@/components/Inicio";
import ComoFunciona from "@/components/ComoFunciona";
import ProfesoresMejorEvaluados from "@/components/ProfesoresMejorEvaluados";
import ProfesoresFiltrados from "@/components/ProfesoresFiltrados";

import InicioParteFinal from "./Inicio-partefinal/Inicio-partefinal";

export default function FiltroPage() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '40px' }}>
      <CajaDocente 
        nombre="Armando (yo)"
        materias={["Desarrollo web", "Optimizacion"]}
        evaluacion={100}
        tags={["Programación", "Retos"]}
        semestre="5, 7"
        imagen="/perfil1.jpg"
      />
    </div>
  );
}

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
        <Link href="/comparador">
          Comparador
        </Link>

        <Link href="/perfil">
          Ver perfil de profesor
        </Link>
      </section>

      {/* SECCIONES */}
      <ComoFunciona />

      <ProfesoresMejorEvaluados />

      <ProfesoresFiltrados />

      <InicioParteFinal />
    </main>
  );
}
