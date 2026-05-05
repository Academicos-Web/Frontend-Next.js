import { LogIn, Compass, TrendingUp, PenLine } from "lucide-react";

export default function ComoFunciona() {
  const pasos = [
    {
      numero: "01",
      icono: <LogIn size={16}/>,
      titulo: "Inicia Sesión",
      descripcion: "Accede con tu correo institucional de la UNAM para garantizar la seguridad de la comunidad.",
    },
    {
      numero: "02",
      icono: <Compass size={16}/>,
      titulo: "Explora",
      descripcion: "Busca profesores por nombre, materia o semestre en el directorio completo de la carrera.",
    },
    {
      numero: "03",
      icono: <TrendingUp size={16}/>,
      titulo: "Consulta",
      descripcion: "Revisa estadísticas, evaluaciones detalladas y comentarios de otros estudiantes.",
    },
    {
      numero: "04",
      icono: <PenLine size={16}/>,
      titulo: "Evalúa",
      descripcion: "Comparte tu experiencia de forma anónima y contribuye a la mejora continua.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#f9f6f0", padding: "80px 24px" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <span style={{
          backgroundColor: "#ede8dc",
          color: "#8B7355",
          fontSize: "11px",
          fontWeight: 600,
          padding: "5px 14px",
          borderRadius: "999px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          display: "inline-block",
          marginBottom: "20px"
        }}>
          Proceso
        </span>
        <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#1e3a8a", margin: "0 0 12px 0" }}>
          ¿Cómo funciona?
        </h2>
        <p style={{ color: "#6B7280", fontSize: "15px", margin: 0 }}>
          Proceso simple y seguro para toda la comunidad académica
        </p>
      </div>

      {/* Tarjetas */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        alignItems: "start",
        position: "relative"
      }}>
        {pasos.map((paso, index) => (
          <div key={index} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <div style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "28px 24px",
              boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
              border: "1px solid #ede8dc",
              flex: 1
            }}>
              {/* Número e ícono */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ color: "#C9A84C", fontWeight: 700, fontSize: "18px" }}>
                  {paso.numero}
                </span>
                <span style={{
                  color: "#9CA3AF",
                  fontSize: "18px",
                  width: "32px",
                  height: "32px",
                  border: "1px solid #E5E7EB",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {paso.icono}
                </span>
              </div>

              {/* Título */}
              <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#1e3a8a", margin: "0 0 12px 0" }}>
                {paso.titulo}
              </h3>

              {/* Descripción */}
              <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: "1.6", margin: 0 }}>
                {paso.descripcion}
              </p>
            </div>

            {/* Flecha entre tarjetas */}
            {index < pasos.length - 1 && (
              <div style={{ color: "#D1D5DB", fontSize: "20px", paddingTop: "40px", flexShrink: 0 }}>
                ›
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}