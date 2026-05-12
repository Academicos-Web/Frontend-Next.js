"use client";

import styles from "./comparador.module.css";
import { useState } from "react";

type Profesor = {
  id: number;
  nombre: string;
  rating: number;
  dominio: number;
  claridad: number;
  puntualidad: number;
};

const profesores: Profesor[] = [
  {
    id: 1,
    nombre: "Dra. Lucía Fernández Ortega",
    rating: 4.4,
    dominio: 4.7,
    claridad: 4.3,
    puntualidad: 4.1,
  },
  {
    id: 2,
    nombre: "M.C. Raúl Domínguez Paredes",
    rating: 4.0,
    dominio: 4.3,
    claridad: 4.0,
    puntualidad: 3.8,
  },
];

export default function ComparadorPage() {
  const [materia, setMateria] = useState<string | null>(null);
  const [prof1, setProf1] = useState<Profesor | null>(null);
  const [prof2, setProf2] = useState<Profesor | null>(null);

  const porcentaje = (v: number) => (v / 5) * 100;

  const metrics = [
    { key: "dominio", label: "Dominio" },
    { key: "claridad", label: "Claridad" },
    { key: "puntualidad", label: "Puntualidad" },
  ];

  return (
    <div className={styles.page}>
      <div className="container">
        <h2>Comparador de Profesores</h2>
        <p className={styles.sub}>Sigue los pasos para comparar</p>

        <div className={styles.steps}>
          <div className={`${styles.step} ${materia ? styles.done : ""}`}>
            <div className={styles.circle}>1</div>
            <span>Materia</span>
          </div>

          <div className={`${styles.step} ${prof1 ? styles.done : ""}`}>
            <div className={styles.circle}>2</div>
            <span>Profesor 1</span>
          </div>

          <div className={`${styles.step} ${prof2 ? styles.done : ""}`}>
            <div className={styles.circle}>3</div>
            <span>Profesor 2</span>
          </div>
        </div>

        <div className={styles.section}>
          <h3>Materia a comparar</h3>
          <div className={styles.materiasGrid}>
            {["Algoritmos", "Álgebra", "Bases de Datos", "Cálculo", "Estadística"].map((m) => (
              <div
                key={m}
                className={`${styles.materia} ${materia === m ? styles.activeBox : ""}`}
                onClick={() => setMateria(m)}
              >
                {m}
              </div>
            ))}
          </div>
        </div>

        {materia && (
          <div className={styles.selectorGrid}>
            <div>
              <h3>Primer profesor</h3>
              {profesores.map((p) => (
                <div
                  key={p.id}
                  className={`${styles.card} ${prof1?.id === p.id ? styles.activeBox : ""}`}
                  onClick={() => setProf1(p)}
                >
                  <p>{p.nombre}</p>
                  <span>⭐ {p.rating}</span>
                </div>
              ))}
            </div>

            <div>
              <h3>Segundo profesor</h3>
              {profesores.map((p) => (
                <div
                  key={p.id}
                  className={`${styles.card} ${prof2?.id === p.id ? styles.activeBox : ""}`}
                  onClick={() => setProf2(p)}
                >
                  <p>{p.nombre}</p>
                  <span>⭐ {p.rating}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {prof1 && prof2 && (
          <div className={styles.comparacion}>
            <div className={styles.header}>
              <div>{prof1.nombre} ⭐ {prof1.rating}</div>
              <div>VS</div>
              <div>{prof2.nombre} ⭐ {prof2.rating}</div>
            </div>

            {metrics.map((m) => {
              const a = prof1[m.key as keyof Profesor] as number;
              const b = prof2[m.key as keyof Profesor] as number;

              return (
                <div key={m.key} className={styles.metric}>
                  <div className={styles.metricLabels}>
                    <span>{m.label}</span>
                    <span>{m.label}</span>
                  </div>

                  <div className={styles.metricRow}>
                    <div className={styles.sideLeft}>
                      <span>{a}</span>
                      <div className={styles.barBox}>
                        <div
                          className={styles.barA}
                          style={{ width: `${porcentaje(a)}%` }}
                        />
                      </div>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.sideRight}>
                      <div className={styles.barBox}>
                        <div
                          className={styles.barB}
                          style={{
                            width: `${porcentaje(b)}%`,
                            marginLeft: "auto",
                          }}
                        />
                      </div>
                      <span>{b}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}