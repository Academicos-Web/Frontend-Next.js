"use client";

import { useState } from "react";
import styles from "./filtro.module.css";

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
    <div className={styles.container}>
      <div className={styles.filtrosGrid}>
        <input
          type="text"
          placeholder="Nombre del profesor o materia..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select
          value={semestre}
          onChange={(e) => setSemestre(e.target.value)}
        >
          <option value="Todos los semestres">Todos los semestres</option>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
            <option key={s} value={s.toString()}>
              Semestre {s}
            </option>
          ))}
        </select>

        <select
          value={calificacion}
          onChange={(e) => setCalificacion(e.target.value)}
        >
          <option value="Todas las calificaciones">Todas las calificaciones</option>
          <option value="6">6 o superior</option>
          <option value="7">7 o superior</option>
          <option value="8">8 o superior</option>
          <option value="9">9 o superior</option>
        </select>
      </div>

      <div className={styles.headerRow}>
        <p className={styles.contador}>
          Mostrando <strong>{profesoresFiltrados.length}</strong> de{" "}
          <strong>{profesores.length}</strong> profesores
        </p>

        <div className={styles.ordenarContainer}>
          <label>Ordenar por:</label>
          <select
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option>Nombre</option>
            <option>Calificación</option>
          </select>
        </div>
      </div>

      <div className={styles.profesoresGrid}>
        {profesoresFiltrados.length > 0 ? (
          profesoresFiltrados.map((profesor) => (
            <div
              key={profesor.id}
              className={styles.profesorCard}
            >
              <h3>{profesor.nombre}</h3>
              <p>{profesor.materia}</p>
              <div className={styles.infoExtra}>
                Semestre: {profesor.semestre} | ⭐ {profesor.calificacion}
              </div>
            </div>
          ))
        ) : (
          <div className={styles.sinResultados}>
            <p>No se encontraron profesores que coincidan con los filtros.</p>
          </div>
        )}
      </div>
    </div>
  );
}