import ComoFunciona from "./components/ComoFunciona";
import ProfesoresMejorEvaluados from "./components/ProfesoresMejorEvaluados";
import Header from "@/components/Header";
import Inicio from "@/components/Inicio";
import Link from "next/link";

import ComoFunciona from "../components/ComoFunciona";
import ProfesoresMejorEvaluados from "../components/ProfesoresMejorEvaluados";
import Header from "@/components/Header";
import Inicio from "@/components/Inicio";
import FiltroProfesores from "./Filtro/filtrosprofesores";

type Profesor = {
  id: number;
  nombre: string;
  materia: string;
  semestre: string;
  calificacion: number;
};

const datosIniciales: Profesor[] = [
  { id: 1, nombre: "Juan Perez", materia: "Matemáticas", semestre: "1", calificacion: 9 },
  { id: 2, nombre: "Maria Lopez", materia: "Programación", semestre: "2", calificacion: 10 }
];

export default function FiltroPage() {
  const [profesoresFiltrados, setProfesoresFiltrados] = useState<Profesor[]>(datosIniciales);

  return (
    <main style={{ padding: "2rem", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      
      <Header />
      <Inicio />

      <Link href="/perfil">
        Ver perfil de profesor
      </Link>

      <ComoFunciona />
      <ProfesoresMejorEvaluados />

      <FiltroProfesores 
        profesores={datosIniciales} 
        onFiltrar={setProfesoresFiltrados} 
      />

      <div style={{ marginTop: "2rem", color: "#64748b" }}>
        <p>Resultados encontrados: {profesoresFiltrados.length}</p>
        <hr />
        <p style={{ fontStyle: "italic" }}>
          Tarjetas
        </p>
      </div>

    </main>
  );
}