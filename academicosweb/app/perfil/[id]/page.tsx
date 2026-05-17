"use client";

import styles from "./Perfil.module.css";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Perfil() {
  const router = useRouter();
  const params = useParams();

  const id = params.id;

  const [profesor, setProfesor] = useState<any>(null);
  const [materias, setMaterias] = useState<any[]>([]);
  const [evaluaciones, setEvaluaciones] = useState<any[]>([]);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      // =========================
      // PROFESOR
      // =========================
      const { data: profData, error: profError } = await supabase
        .from("profesores")
        .select("*")
        .eq("id_profesor", id)
        .single();

      if (profError) {
        console.error(profError);
      }

      // =========================
      // MATERIAS
      // =========================
      const { data: matData, error: matError } = await supabase
        .from("profesor_materias")
        .select(`
          materias (
            nombre_materia
          )
        `)
        .eq("id_profesor", id);

      if (matError) {
        console.error(matError);
      }

      // =========================
      // EVALUACIONES
      // =========================
      const { data: evalData, error: evalError } = await supabase
        .from("evaluaciones")
        .select(`
          comentario,
          calificacion_general,
          alumnos (
            nombre_completo
          )
        `)
        .eq("id_profesor", id);

      if (evalError) {
        console.error(evalError);
      }

      setProfesor(profData);
      setMaterias(matData || []);
      setEvaluaciones(evalData || []);
    };

    fetchData();
  }, [id]);

  // =========================
  // INICIAL DEL PROFESOR
  // =========================
  const inicial =
    profesor?.nombre_completo
      ?.split(" ")
      .find(
        (w: string) =>
          w.length > 2 &&
          !["M.C.", "Dr.", "Dra."].includes(w)
      )
      ?.charAt(0) || "P";

  // =========================
  // PROMEDIO DE CALIFICACIONES
  // =========================
  const promedio =
    evaluaciones.length > 0
      ? (
          evaluaciones.reduce(
            (acc, ev) => acc + ev.calificacion_general,
            0
          ) / evaluaciones.length
        ).toFixed(1)
      : "0.0";

  return (
    <main className={styles.perfil}>
      <div className="container">

        <div className={styles.grid}>

          {/* ========================= */}
          {/* IZQUIERDA */}
          {/* ========================= */}
          <div className={styles.card}>

            {/* AVATAR */}
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                backgroundColor: "#1e3a5f",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 700,
                fontSize: "48px",
                margin: "0 auto 20px auto",
              }}
            >
              {inicial}
            </div>

            {/* NOMBRE */}
            <h2 style={{ textAlign: "center" }}>
              {profesor?.nombre_completo || "Cargando..."}
            </h2>

            {/* CALIFICACIÓN */}
            <div
              className={styles.stars}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: "#F59E0B" }}>
                ★★★★★
              </span>

              <span>{promedio}</span>
            </div>

            {/* TOTAL EVALUACIONES */}
            <span
              className={styles.small}
              style={{
                display: "block",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              {evaluaciones.length} evaluaciones
            </span>

            {/* MATERIAS */}
            <div className={styles.section}>
              <h4>Materias que imparte</h4>

              <ul>
                {materias.map((m, i) => (
                  <li key={i}>
                    {m.materias?.nombre_materia}
                  </li>
                ))}
              </ul>
            </div>

            {/* BOTÓN */}
            <button className={styles.btn}>
              ⭐ Evaluar Profesor
            </button>

            <p className={styles.note}>
              Necesitas iniciar sesión para evaluar
            </p>

            {/* CERRAR SESIÓN */}
            <button
              className={styles.btn}
              onClick={() => {
                localStorage.removeItem("sesion");
                localStorage.removeItem("tipoUsuario");

                router.push("/login");
              }}
            >
              Cerrar Sesión
            </button>
          </div>

          {/* ========================= */}
          {/* DERECHA */}
          {/* ========================= */}
          <div className={styles.content}>

            {/* TRAYECTORIA */}
            <div className={styles.box}>
              <h3>Trayectoria Profesional</h3>

              <p>
                {profesor?.curriculum_resumen ||
                  "Sin información"}
              </p>
            </div>

            {/* ========================= */}
            {/* RESEÑAS */}
            {/* ========================= */}
            <div className={styles.box}>
              <div className={styles.headerRow}>
                <h3>
                  Evaluaciones y Comentarios (
                  {evaluaciones.length})
                </h3>

                <button className={styles.btnLight}>
                  + Evaluar
                </button>
              </div>

              <div style={{ marginTop: "20px" }}>
                {evaluaciones.length === 0 ? (
                  <p style={{ color: "#6B7280" }}>
                    No hay evaluaciones todavía.
                  </p>
                ) : (
                  evaluaciones.map((ev, index) => (
                    <div
                      key={index}
                      style={{
                        border: "1px solid #E5E7EB",
                        borderRadius: "12px",
                        padding: "16px",
                        marginBottom: "16px",
                        backgroundColor: "white",
                      }}
                    >
                      {/* HEADER */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "10px",
                        }}
                      >
                        <strong
                          style={{
                            color: "#1F2937",
                          }}
                        >
                          {ev.alumnos?.nombre_completo ||
                            "Alumno"}
                        </strong>

                        <span
                          style={{
                            color: "#F59E0B",
                            fontWeight: 600,
                          }}
                        >
                          ⭐ {ev.calificacion_general}
                        </span>
                      </div>

                      {/* COMENTARIO */}
                      <p
                        style={{
                          color: "#4B5563",
                          lineHeight: "1.6",
                          margin: 0,
                        }}
                      >
                        {ev.comentario}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}