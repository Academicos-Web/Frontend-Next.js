"use client";

import styles from "./Perfil.module.css";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

/* ========================================= */
/* ESTRELLAS INPUT */
/* ========================================= */

function EstrellasInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
      }}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          onClick={() => onChange(n)}
          style={{
            cursor: "pointer",
            fontSize: "28px",
            color:
              n <= value
                ? "#F59E0B"
                : "#D1D5DB",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Perfil() {
  const router = useRouter();
  const params = useParams();

  const id = params.id;

  const [profesor, setProfesor] =
    useState<any>(null);

  const [materias, setMaterias] =
    useState<any[]>([]);

  const [evaluaciones, setEvaluaciones] =
    useState<any[]>([]);

  const [mostrarModal, setMostrarModal] =
    useState(false);

  /* ========================================= */
  /* STATES EVALUACIÓN */
  /* ========================================= */

  const [dominioTema, setDominioTema] =
    useState(0);

  const [claridad, setClaridad] =
    useState(0);

  const [puntualidad, setPuntualidad] =
    useState(0);

  const [exigencia, setExigencia] =
    useState(0);

  const [carga, setCarga] =
    useState(0);

  const [evaluar, setEvaluar] =
    useState(0);

  const [comentario, setComentario] =
    useState("");

  /* ========================================= */
  /* FETCH DATOS */
  /* ========================================= */

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {

      /* PROFESOR */
      const { data: profData } =
        await supabase
          .from("profesores")
          .select("*")
          .eq("id_profesor", id)
          .single();

      /* MATERIAS */
      const { data: matData } =
        await supabase
          .from("profesor_materias")
          .select(`
            materias (
              nombre_materia
            )
          `)
          .eq("id_profesor", id);

      /* EVALUACIONES */
      const { data: evalData } =
        await supabase
          .from("evaluaciones")
          .select(`
            comentario,
            calificacion_general,
            alumnos (
              nombre_completo
            )
          `)
          .eq("id_profesor", id);

      setProfesor(profData);
      setMaterias(matData || []);
      setEvaluaciones(evalData || []);
    };

    fetchData();
  }, [id]);

  /* ========================================= */
  /* ENVIAR EVALUACIÓN */
  /* ========================================= */

  const enviarEvaluacion = async () => {

    const promedio =
      (
        dominioTema +
        claridad +
        puntualidad +
        exigencia +
        carga +
        evaluar
      ) / 6;

    const { error } = await supabase
      .from("evaluaciones")
      .insert([
        {
          id_profesor: id,

          comentario,

          calificacion_general:
            promedio,

          dominio_tema:
            dominioTema,

          claridad_explicacion:
            claridad,

          puntualidad,

          exigencia,

          carga_trabajo:
            carga,

          forma_evaluar:
            evaluar,
        },
      ]);

    if (error) {
      console.log(error);
      alert("Error al publicar");
      return;
    }

    alert("Evaluación publicada");

    setMostrarModal(false);

    window.location.reload();
  };

  /* ========================================= */
  /* INICIAL */
  /* ========================================= */

  const inicial =
    profesor?.nombre_completo
      ?.split(" ")
      .find(
        (w: string) =>
          w.length > 2 &&
          !["M.C.", "Dr.", "Dra."].includes(w)
      )
      ?.charAt(0) || "P";

  /* ========================================= */
  /* PROMEDIO */
  /* ========================================= */

  const promedio =
    evaluaciones.length > 0
      ? (
          evaluaciones.reduce(
            (acc, ev) =>
              acc +
              ev.calificacion_general,
            0
          ) / evaluaciones.length
        ).toFixed(1)
      : "0.0";

  return (
    <main className={styles.perfil}>
      <div className="container">

        <div className={styles.grid}>

          {/* ========================================= */}
          {/* IZQUIERDA */}
          {/* ========================================= */}

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
                margin:
                  "0 auto 20px auto",
              }}
            >
              {inicial}
            </div>

            {/* NOMBRE */}
            <h2
              style={{
                textAlign: "center",
              }}
            >
              {profesor?.nombre_completo}
            </h2>

            {/* ESTRELLAS */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                marginTop: "10px",
              }}
            >
              <span
                style={{
                  color: "#F59E0B",
                }}
              >
                ★★★★★
              </span>

              <span>{promedio}</span>
            </div>

            {/* TOTAL */}
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              {evaluaciones.length} evaluaciones
            </p>

            {/* MATERIAS */}
            <div
              style={{
                marginTop: "24px",
              }}
            >
              <h4>
                Materias que imparte
              </h4>

              <ul>
                {materias.map((m, i) => (
                  <li key={i}>
                    {
                      m.materias
                        ?.nombre_materia
                    }
                  </li>
                ))}
              </ul>
            </div>

            {/* BOTÓN */}
            <button
              className={styles.btn}
              onClick={() =>
                setMostrarModal(true)
              }
            >
              ⭐ Evaluar Profesor
            </button>

          </div>

          {/* ========================================= */}
          {/* DERECHA */}
          {/* ========================================= */}

          <div className={styles.content}>

            {/* TRAYECTORIA */}
            <div className={styles.box}>
              <h3>
                Trayectoria Profesional
              </h3>

              <p>
                {
                  profesor?.curriculum_resumen
                }
              </p>
            </div>

            {/* RESEÑAS */}
            <div className={styles.box}>

              <h3>
                Evaluaciones y
                Comentarios (
                {evaluaciones.length})
              </h3>

              <div
                style={{
                  marginTop: "20px",
                }}
              >
                {evaluaciones.map(
                  (ev, index) => (
                    <div
                      key={index}
                      style={{
                        border:
                          "1px solid #E5E7EB",
                        borderRadius:
                          "12px",
                        padding: "16px",
                        marginBottom:
                          "16px",
                        backgroundColor:
                          "white",
                      }}
                    >

                      {/* HEADER */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent:
                            "space-between",
                          marginBottom:
                            "10px",
                        }}
                      >
                        <strong>
                          {
                            ev.alumnos
                              ?.nombre_completo
                          }
                        </strong>

                        <span
                          style={{
                            color:
                              "#F59E0B",
                          }}
                        >
                          ⭐{" "}
                          {
                            ev.calificacion_general
                          }
                        </span>
                      </div>

                      {/* TEXTO */}
                      <p>
                        {ev.comentario}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

          </div>

        </div>

        {/* ========================================= */}
        {/* MODAL EVALUACIÓN */}
        {/* ========================================= */}

        {mostrarModal && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor:
                "rgba(0,0,0,0.45)",
              display: "flex",
              justifyContent:
                "center",
              alignItems: "center",
              zIndex: 999,
              padding: "20px",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "900px",
                backgroundColor:
                  "white",
                borderRadius: "24px",
                padding: "32px",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >

              {/* HEADER */}
              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  marginBottom:
                    "24px",
                }}
              >
                <div>
                  <h2>
                    Evaluar Profesor
                  </h2>

                  <p>
                    Comparte tu
                    experiencia
                  </p>
                </div>

                <button
                  onClick={() =>
                    setMostrarModal(
                      false
                    )
                  }
                >
                  ✕
                </button>
              </div>

              {/* GRID */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1fr",
                  gap: "20px",
                }}
              >

                <div>
                  <p>
                    Dominio del tema
                  </p>

                  <EstrellasInput
                    value={
                      dominioTema
                    }
                    onChange={
                      setDominioTema
                    }
                  />
                </div>

                <div>
                  <p>
                    Claridad al
                    explicar
                  </p>

                  <EstrellasInput
                    value={claridad}
                    onChange={
                      setClaridad
                    }
                  />
                </div>

                <div>
                  <p>
                    Puntualidad
                  </p>

                  <EstrellasInput
                    value={
                      puntualidad
                    }
                    onChange={
                      setPuntualidad
                    }
                  />
                </div>

                <div>
                  <p>
                    Nivel de
                    exigencia
                  </p>

                  <EstrellasInput
                    value={
                      exigencia
                    }
                    onChange={
                      setExigencia
                    }
                  />
                </div>

                <div>
                  <p>
                    Carga de trabajo
                  </p>

                  <EstrellasInput
                    value={carga}
                    onChange={
                      setCarga
                    }
                  />
                </div>

                <div>
                  <p>
                    Forma de evaluar
                  </p>

                  <EstrellasInput
                    value={evaluar}
                    onChange={
                      setEvaluar
                    }
                  />
                </div>

              </div>

              {/* COMENTARIO */}
              <div
                style={{
                  marginTop: "24px",
                }}
              >
                <p>Comentario</p>

                <textarea
                  value={comentario}
                  onChange={(e) =>
                    setComentario(
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    minHeight: "140px",
                    borderRadius:
                      "14px",
                    border:
                      "1px solid #D1D5DB",
                    padding: "16px",
                  }}
                />
              </div>

              {/* BOTÓN */}
              <button
                onClick={
                  enviarEvaluacion
                }
                style={{
                  width: "100%",
                  marginTop: "24px",
                  height: "54px",
                  border: "none",
                  borderRadius:
                    "14px",
                  backgroundColor:
                    "#1e3a5f",
                  color: "white",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Publicar Evaluación
              </button>

            </div>
          </div>
        )}

      </div>
    </main>
  );
}