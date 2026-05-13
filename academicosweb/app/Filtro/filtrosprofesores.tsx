"use client";

import { useState, useEffect } from "react";
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
  onFiltrar: (resultado: Profesor[]) => void;
}

export default function FiltroProfesores({ profesores, onFiltrar }: Props) {
  const [busqueda, setBusqueda] = useState("");
  const [semestre, setSemestre] = useState("Todos los semestres");
  const [calificacion, setCalificacion] = useState("Todas las calificaciones");
  const [orden, setOrden] = useState("Nombre"); // <-- Nuevo estado para ordenar

  useEffect(() => {
    let filtrados = profesores.filter((p) => {
      const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                               p.materia.toLowerCase().includes(busqueda.toLowerCase());
      const coincideSemestre = semestre === "Todos los semestres" || p.semestre === semestre;
      const coincideCalificacion = calificacion === "Todas las calificaciones" || p.calificacion >= Number(calificacion);
      
      return coincideBusqueda && coincideSemestre && coincideCalificacion;
    });

    // Lógica de ordenamiento
    filtrados.sort((a, b) => {
      if (orden === "Nombre") return a.nombre.localeCompare(b.nombre);
      if (orden === "Calificación") return b.calificacion - a.calificacion;
      return 0;
    });

    onFiltrar(filtrados);
  }, [busqueda, semestre, calificacion, orden, profesores, onFiltrar]);

  return (
    <div className={styles.container}>
      <div className={styles.filtrosGrid}>
        {/* BUSCADOR */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Buscar profesor o materia</label>
          <input
            type="text"
            placeholder="Ej. Juan Perez..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>

        {/* SELECT SEMESTRE */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Semestre</label>
          <select value={semestre} onChange={(e) => setSemestre(e.target.value)}>
            <option value="Todos los semestres">Todos los semestres</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
              <option key={s} value={s.toString()}>Semestre {s}</option>
            ))}
          </select>
        </div>

        {/* SELECT CALIFICACIÓN */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Calificación mínima</label>
          <select value={calificacion} onChange={(e) => setCalificacion(e.target.value)}>
            <option value="Todas las calificaciones">Todas las calificaciones</option>
            <option value="6">6 o superior</option>
            <option value="7">7 o superior</option>
            <option value="8">8 o superior</option>
            <option value="9">9 o superior</option>
          </select>
        </div>

        {/* SELECT ORDENAR POR */}
        <div className={styles.inputGroup}>
          <label className={styles.label}>Ordenar por</label>
          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="Nombre">Nombre </option>
            <option value="Calificación">Mejor Calificados</option>
          </select>
        </div>
      </div>
    </div>
  );
}