"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import ProfesoresFiltrados from "@/components/ProfesoresFiltrados";

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

export default function Directorio() {
  const router = useRouter();

  const [profesores, setProfesores] = useState<any[]>([]);

  useEffect(() => {
    const fetchProfesores = async () => {
      const { data, error } = await supabase
        .from("profesores")
        .select("*");

      if (error) {
        console.error(error);
      } else {
        setProfesores(data || []);
      }
    };

    fetchProfesores();
  }, []);

  return (
    <section
      style={{
        padding: "60px 24px",
        minHeight: "100vh",
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
              Directorio
            </span>

            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#111827",
                margin: 0,
              }}
            >
              Profesores
            </h2>
          </div>
        </div>
        <ProfesoresFiltrados />
        {/* TARJETAS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {profesores.map((p) => {
            const inicial =
              p.nombre_completo
                ?.split(" ")
                .find(
                  (w: string) =>
                    w.length > 2 &&
                    !["M.C.", "Dr.", "Dra."].includes(
                      w
                    )
                )
                ?.charAt(0) || "P";

            return (
              <div
                key={p.id_profesor}
                onClick={() =>
                  router.push(
                    `/perfil/${p.id_profesor}`
                  )
                }
                style={{
                  border: "1px solid #E5E7EB",
                  borderRadius: "16px",
                  padding: "24px",
                  backgroundColor: "white",
                  boxShadow:
                    "0 1px 6px rgba(0,0,0,0.06)",
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

                {/* CALIFICACIÓN */}
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
                    {p.calificacion_promedio ||
                      "0.0"}
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

                {/* BOTÓN */}
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
                    Ver perfil →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}