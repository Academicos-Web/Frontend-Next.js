"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const Estrellas = ({
  calificacion,
}: {
  calificacion: number;
}) => (
  <div style={{ display: "flex", gap: "2px" }}>
    {[1, 2, 3, 4, 5].map((i) => (
      <span
        key={i}
        style={{
          color:
            i <= Math.round(calificacion)
              ? "#F59E0B"
              : "#D1D5DB",
          fontSize: "14px",
        }}
      >
        ★
      </span>
    ))}
  </div>
);

const BarraEstadistica = ({
  label,
  valor,
}: {
  label: string;
  valor: number;
}) => (
  <div style={{ marginBottom: "10px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "4px",
      }}
    >
      <span
        style={{
          fontSize: "13px",
          color: "#374151",
        }}
      >
        {label}
      </span>

      <span
        style={{
          fontSize: "13px",
          fontWeight: 600,
          color: "#111827",
        }}
      >
        {valor}
      </span>
    </div>

    <div
      style={{
        backgroundColor: "#E5E7EB",
        borderRadius: "999px",
        height: "6px",
      }}
    >
      <div
        style={{
          backgroundColor: "#C9A84C",
          borderRadius: "999px",
          height: "6px",
          width: `${(valor / 5) * 100}%`,
        }}
      />
    </div>
  </div>
);

export default function ProfesoresMejorEvaluados() {
  const [profesores, setProfesores] = useState<any[]>([]);
  const [seleccionado, setSeleccionado] =
    useState<number | null>(null);

  useEffect(() => {
  const fetchProfesores = async () => {
    const { data, error } = await supabase
      .from("profesores")
      .select("*");

    console.log(data);
    console.log(error);

    if (data) {
      setProfesores(data);
    }
  };

  fetchProfesores();
}, []);

  const profesor =
    seleccionado !== null
      ? profesores[seleccionado]
      : null;

  return (
    <section
      style={{
        padding: "60px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "40px",
          }}
        >
          <div>
            <span
              style={{
                backgroundColor: "#f5f0e8",
                color: "#8B7355",
                fontSize: "11px",
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: "999px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              Destacados
            </span>

            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#111827",
                margin: 0,
              }}
            >
              Profesores Mejor Evaluados
            </h2>
          </div>
        </div>

        {/* TARJETAS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {profesores.map((p, index) => {
            const inicial =
              p.nombre_completo
                ?.split(" ")
                .find(
                  (w: string) =>
                    w.length > 2 &&
                    ![
                      "M.C.",
                      "Dr.",
                      "Dra.",
                    ].includes(w)
                )
                ?.charAt(0) || "P";

            return (
              <div
                key={p.id_profesor}
                onClick={() =>
                  setSeleccionado(
                    seleccionado === index
                      ? null
                      : index
                  )
                }
                style={{
                  border:
                    seleccionado === index
                      ? "2px solid #C9A84C"
                      : "1px solid #E5E7EB",
                  borderRadius: "16px",
                  padding: "24px",
                  backgroundColor: "white",
                  boxShadow:
                    seleccionado === index
                      ? "0 4px 16px rgba(201,168,76,0.15)"
                      : "0 1px 6px rgba(0,0,0,0.06)",
                  cursor: "pointer",
                  transition:
                    "all 0.2s ease",
                }}
              >
                {/* HEADER CARD */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    marginBottom: "16px",
                  }}
                >
                  {/* AVATAR */}
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      backgroundColor:
                        "#1e3a5f",
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        "center",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    {inicial}
                  </div>

                  {/* INFO */}
                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        color: "#111827",
                        fontSize: "14px",
                        margin:
                          "0 0 2px 0",
                      }}
                    >
                      {p.nombre_completo}
                    </p>

                    <p
                      style={{
                        color: "#6B7280",
                        fontSize: "13px",
                        margin: 0,
                      }}
                    >
                      {p.departamento ||
                        "Profesor"}
                    </p>
                  </div>
                </div>

                {/* ESTRELLAS */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  <Estrellas
                    calificacion={
                      p.calificacion_promedio ||
                      0
                    }
                  />

                  <span
                    style={{
                      fontWeight: 700,
                      color: "#111827",
                      fontSize: "14px",
                    }}
                  >
                    {p.calificacion_promedio?.toFixed(
                      1
                    ) || "0.0"}
                  </span>

                  <span
                    style={{
                      color: "#9CA3AF",
                      fontSize: "13px",
                    }}
                  >
                    (
                    {p.total_evaluaciones ||
                      0}
                    )
                  </span>
                </div>

                {/* ETIQUETA */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      backgroundColor:
                        "#F3F4F6",
                      color: "#374151",
                      fontSize: "12px",
                      padding:
                        "5px 12px",
                      borderRadius:
                        "999px",
                    }}
                  >
                    Profesor destacado
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* PANEL INFORMACIÓN */}
        {profesor && (
          <div
            style={{
              marginTop: "24px",
              border:
                "1px solid #E5E7EB",
              borderRadius: "16px",
              padding: "32px",
              backgroundColor: "#FAFAFA",
              boxShadow:
                "0 2px 12px rgba(0,0,0,0.06)",
            }}
          >
            {/* HEADER PANEL */}
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#1e3a5f",
                  margin: 0,
                }}
              >
                {profesor.nombre_completo}
              </h3>

              <button
                onClick={() =>
                  setSeleccionado(null)
                }
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#9CA3AF",
                  fontSize: "20px",
                }}
              >
                ✕
              </button>
            </div>

            {/* TRAYECTORIA */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "16px",
                border:
                  "1px solid #E5E7EB",
              }}
            >
              <h4
                style={{
                  color: "#1e3a5f",
                  fontWeight: 700,
                  marginBottom: "8px",
                  fontSize: "14px",
                }}
              >
                Trayectoria Profesional
              </h4>

              <p
                style={{
                  color: "#374151",
                  fontSize: "14px",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {profesor.curriculum_resumen ||
                  "Sin información"}
              </p>
            </div>

            {/* ESTADÍSTICAS */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                border:
                  "1px solid #E5E7EB",
              }}
            >
              <h4
                style={{
                  color: "#1e3a5f",
                  fontWeight: 700,
                  marginBottom: "16px",
                  fontSize: "14px",
                }}
              >
                Estadísticas de Evaluación
              </h4>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1fr",
                  gap: "0 32px",
                }}
              >
                <BarraEstadistica
                  label="Dominio del tema"
                  valor={
                    profesor.calificacion_promedio ||
                    0
                  }
                />

                <BarraEstadistica
                  label="Claridad al explicar"
                  valor={
                    profesor.calificacion_promedio ||
                    0
                  }
                />

                <BarraEstadistica
                  label="Puntualidad"
                  valor={
                    profesor.calificacion_promedio ||
                    0
                  }
                />

                <BarraEstadistica
                  label="Forma de evaluar"
                  valor={
                    profesor.calificacion_promedio ||
                    0
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}