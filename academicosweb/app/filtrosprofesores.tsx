"use client";

import { useState } from "react";

interface Profesor {
  id: number;
  nombre: string;
  materia: string;
  semestre: string;
  calificacion: number;
  
}

interface Props {
  profesores: Profesor[];
}

export default function FiltroProfesores({ profesores }: Props) {
  const [busqueda, setBusqueda] = useState("");
  const [semestre, setSemestre] = useState("Todos los semestres");
  const [calificacion, setCalificacion] = useState("Todas las calificaciones");
  const [orden, setOrden] = useState("Nombre");

  const profesoresFiltrados = profesores
    .filter((profesor) => {
      const coincideBusqueda =
        profesor.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        profesor.materia.toLowerCase().includes(busqueda.toLowerCase());

      const coincideSemestre =
        semestre === "Todos los semestres" ||
        profesor.semestre === semestre;

      const coincideCalificacion =
        calificacion === "Todas las calificaciones" ||
        profesor.calificacion >= Number(calificacion);

      return (
        coincideBusqueda &&
        coincideSemestre &&
        coincideCalificacion
      );
    })
    .sort((a, b) => {
      if (orden === "Nombre") {
        return a.nombre.localeCompare(b.nombre);
      }
      if (orden === "Calificación") {
        return b.calificacion - a.calificacion;
      }
      return 0;
    });

  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      {/* Filtros */}
      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Nombre del profesor o materia..."
          className="border rounded-lg px-4 py-2 w-full"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select
          className="border rounded-lg px-4 py-2"
          value={semestre}
          onChange={(e) => setSemestre(e.target.value)}
        >
          <option>Todos los semestres</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
            <option key={s} value={s.toString()}>
              {s}
            </option>
          ))}
        </select>

        <select
          className="border rounded-lg px-4 py-2"
          value={calificacion}
          onChange={(e) => setCalificacion(e.target.value)}
        >
          <option>Todas las calificaciones</option>
          <option value="6">6+</option>
          <option value="7">7+</option>
          <option value="8">8+</option>
          <option value="9">9+</option>
        </select>
      </div>

      {/* Información y ordenamiento */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <p className="text-gray-600">
          Mostrando <strong>{profesoresFiltrados.length}</strong> de{" "}
          <strong>{profesores.length}</strong> profesores
        </p>

        <div className="flex items-center gap-2">
          <label className="text-gray-600">Ordenar por:</label>
          <select
            className="border rounded-lg px-3 py-1"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option>Nombre</option>
            <option>Calificación</option>
          </select>
        </div>
      </div>

      {/* Lista */}
      <div className="mt-6 grid gap-4">
        {profesoresFiltrados.map((profesor) => (
          <div
            key={profesor.id}
            className="border rounded-lg p-4 shadow-sm"
          >
            <h3 className="font-semibold text-lg">{profesor.nombre}</h3>
            <p className="text-gray-600">{profesor.materia}</p>
            <p className="text-sm text-gray-500">
              Semestre: {profesor.semestre} | ⭐ {profesor.calificacion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}