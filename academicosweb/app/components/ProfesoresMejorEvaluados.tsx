"use client";
import { useState } from "react";

const profesores = [
  {
    nombre: "M.C. Roberto Flores Gutiérrez",
    materia: "Programación I",
    calificacion: 4.8,
    evaluaciones: 52,
    etiquetas: ["Clases dinámicas", "Proyectos interesantes"],
    trayectoria: "Maestro en Ciencias Computacionales por la UNAM. 10 años de experiencia. Especialista en programación orientada a objetos.",
    estadisticas: { dominio: 4.9, claridad: 4.8, puntualidad: 4.7, exigencia: 4.5, carga: 4.3, evaluacion: 4.8 },
  },
  {
    nombre: "Dr. Carlos Méndez Ramírez",
    materia: "Cálculo Diferencial e Integral I",
    calificacion: 4.7,
    evaluaciones: 45,
    etiquetas: ["Excelente explicación", "Exámenes justos"],
    trayectoria: "Doctor en Matemáticas por la UNAM. 15 años de experiencia. Especialista en cálculo y análisis matemático.",
    estadisticas: { dominio: 4.8, claridad: 4.7, puntualidad: 4.6, exigencia: 4.4, carga: 4.2, evaluacion: 4.7 },
  },
  {
    nombre: "Dra. Ana Patricia Ruiz Morales",
    materia: "Cálculo Vectorial",
    calificacion: 4.6,
    evaluaciones: 36,
    etiquetas: ["Clara al explicar", "Buenos ejemplos"],
    trayectoria: "Doctora en Matemáticas Aplicadas por la UNAM. 8 años de experiencia. Especialista en álgebra lineal y cálculo vectorial.",
    estadisticas: { dominio: 4.7, claridad: 4.7, puntualidad: 4.5, exigencia: 4.3, carga: 4.4, evaluacion: 4.6 },
  },
];

const Estrellas = ({ calificacion }: { calificacion: number }) => (
  <div style={{ display: "flex", gap: "2px" }}>
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} style={{ color: i <= Math.round(calificacion) ? "#F59E0B" : "#D1D5DB", fontSize: "14px" }}>★</span>
    ))}
  </div>
);

const BarraEstadistica = ({ label, valor }: { label: string; valor: number }) => (
  <div style={{ marginBottom: "10px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
      <span style={{ fontSize: "13px", color: "#374151" }}>{label}</span>
      <span style={{ fontSize: "13px", fontWeight: 600, color: "#111827" }}>{valor}</span>
    </div>
    <div style={{ backgroundColor: "#E5E7EB", borderRadius: "999px", height: "6px" }}>
      <div style={{ backgroundColor: "#C9A84C", borderRadius: "999px", height: "6px", width: `${(valor / 5) * 100}%` }} />
    </div>
  </div>
);

export default function ProfesoresMejorEvaluados() {
  const [seleccionado, setSeleccionado] = useState<number | null>(null);

  const profesor = seleccionado !== null ? profesores[seleccionado] : null;

  return (
    <section style={{ backgroundColor: "white", padding: "60px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px" }}>
          <div>
            <span style={{
              backgroundColor: "#f5f0e8", color: "#8B7355", fontSize: "11px", fontWeight: 600,
              padding: "4px 12px", borderRadius: "999px", textTransform: "uppercase",
              letterSpacing: "0.1em", display: "inline-block", marginBottom: "12px"
            }}>
              Destacados
            </span>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, color: "#111827", margin: 0 }}>
              Profesores Mejor Evaluados
            </h2>
          </div>
          <a href="#" style={{ color: "#C9A84C", fontSize: "14px", fontWeight: 500, textDecoration: "none", marginTop: "8px" }}>
            Ver todos →
          </a>
        </div>

        {/* Tarjetas */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {profesores.map((p, index) => (
            <div
              key={index}
              onClick={() => setSeleccionado(seleccionado === index ? null : index)}
              style={{
                border: seleccionado === index ? "2px solid #C9A84C" : "1px solid #E5E7EB",
                borderRadius: "16px", padding: "24px", backgroundColor: "white",
                boxShadow: seleccionado === index ? "0 4px 16px rgba(201,168,76,0.15)" : "0 1px 6px rgba(0,0,0,0.06)",
                cursor: "pointer", transition: "all 0.2s ease"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "#1e3a5f",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontWeight: 700, fontSize: "20px", flexShrink: 0
                }}>
                  {p.nombre.split(" ").find(w => w.length > 2 && !["M.C.", "Dr.", "Dra."].includes(w))?.[0] ?? "P"}
                </div>
                <div>
                  <p style={{ fontWeight: 600, color: "#111827", fontSize: "14px", margin: "0 0 2px 0" }}>{p.nombre}</p>
                  <p style={{ color: "#6B7280", fontSize: "13px", margin: 0 }}>{p.materia}</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <Estrellas calificacion={p.calificacion} />
                <span style={{ fontWeight: 700, color: "#111827", fontSize: "14px" }}>{p.calificacion}</span>
                <span style={{ color: "#9CA3AF", fontSize: "13px" }}>({p.evaluaciones})</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {p.etiquetas.map((e, i) => (
                  <span key={i} style={{ backgroundColor: "#F3F4F6", color: "#374151", fontSize: "12px", padding: "5px 12px", borderRadius: "999px" }}>
                    {e}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Panel de información */}
        {profesor && (
          <div style={{
            marginTop: "24px", border: "1px solid #E5E7EB", borderRadius: "16px",
            padding: "32px", backgroundColor: "#FAFAFA", boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1e3a5f", margin: 0 }}>
                {profesor.nombre}
              </h3>
              <button
                onClick={() => setSeleccionado(null)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", fontSize: "20px" }}
              >
                ✕
              </button>
            </div>

            {/* Trayectoria */}
            <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "20px", marginBottom: "16px", border: "1px solid #E5E7EB" }}>
              <h4 style={{ color: "#1e3a5f", fontWeight: 700, marginBottom: "8px", fontSize: "14px" }}>Trayectoria Profesional</h4>
              <p style={{ color: "#374151", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{profesor.trayectoria}</p>
            </div>

            {/* Estadísticas */}
            <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "20px", border: "1px solid #E5E7EB" }}>
              <h4 style={{ color: "#1e3a5f", fontWeight: 700, marginBottom: "16px", fontSize: "14px" }}>Estadísticas de Evaluación</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
                <BarraEstadistica label="Dominio del tema" valor={profesor.estadisticas.dominio} />
                <BarraEstadistica label="Claridad al explicar" valor={profesor.estadisticas.claridad} />
                <BarraEstadistica label="Puntualidad" valor={profesor.estadisticas.puntualidad} />
                <BarraEstadistica label="Nivel de exigencia" valor={profesor.estadisticas.exigencia} />
                <BarraEstadistica label="Carga de trabajo" valor={profesor.estadisticas.carga} />
                <BarraEstadistica label="Forma de evaluar" valor={profesor.estadisticas.evaluacion} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}