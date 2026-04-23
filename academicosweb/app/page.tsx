"use client";
import { useState } from "react";
import FiltroProfesores from "./Filtro/filtrosprofesores"; 
// Datos de prueba para que no esté vacío
const datosIniciales = [
  { id: 1, nombre: "Juan Perez", materia: "Matemáticas", semestre: "1", calificacion: 9 },
  { id: 2, nombre: "Maria Lopez", materia: "Programación", semestre: "2", calificacion: 10 }
];

export default function FiltroPage() {
  // Este estado guardará lo que tu filtro decida mostrar
  const [profesoresFiltrados, setProfesoresFiltrados] = useState(datosIniciales);

  return (
    <main style={{ padding: "2rem", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
     
      
      {/* Aquí va el componente de filtro, le pasamos los datos y la función para actualizar el estado */}
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