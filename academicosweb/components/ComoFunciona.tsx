export default function ComoFunciona() {
  const pasos = [
    {
      numero: "01",
      titulo: "Inicia Sesión",
      descripcion: "Accede con tu correo institucional de la UNAM para garantizar la seguridad de la comunidad.",
      icono: "login",
    },
    {
      numero: "02",
      titulo: "Explora",
      descripcion: "Busca profesores por nombre, materia o semestre en el directorio completo de la carrera.",
      icono: "explore",
    },
    {
      numero: "03",
      titulo: "Consulta",
      descripcion: "Revisa estadísticas, evaluaciones detalladas y comentarios de otros estudiantes.",
      icono: "stats",
    },
    {
      numero: "04",
      titulo: "Evalúa",
      descripcion: "Comparte tu experiencia de forma anónima y contribuye a la mejora continua.",
      icono: "edit",
    },
  ];

  const renderIcon = (tipo: string) => {
    switch (tipo) {
      case "login":
        return (
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 3h4v10h-4" />
            <path d="M7 8h7" />
            <path d="M3 8l3-3v6l-3-3z" />
          </svg>
        );
      case "explore":
        return (
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="8" cy="8" r="7" />
            <path d="M11 5l-2 6-6 2 2-6 6-2z" />
          </svg>
        );
      case "stats":
        return (
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12V8" />
            <path d="M7 12V4" />
            <path d="M11 12V6" />
            <path d="M15 12V2" />
          </svg>
        );
      case "edit":
        return (
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l2 2-8 8H4v-2l8-8z" />
          </svg>
        );
    }
  };

  return (
    <section style={{ backgroundColor: "#f9f6f0", padding: "80px 24px" }}>
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

        <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#1e3a8a" }}>
          ¿Cómo funciona?
        </h2>

        <p style={{ color: "#6B7280", fontSize: "15px" }}>
          Proceso simple y seguro para toda la comunidad académica
        </p>
      </div>

      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px"
      }}>
        {pasos.map((paso, index) => (
          <div key={index} style={{ display: "flex", gap: "8px" }}>
            <div style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "28px 24px",
              boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
              border: "1px solid #ede8dc",
              flex: 1
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <span style={{ color: "#C9A84C", fontWeight: 700 }}>
                  {paso.numero}
                </span>

                <span style={{
                  color: "#9CA3AF",
                  width: "32px",
                  height: "32px",
                  border: "1px solid #E5E7EB",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {renderIcon(paso.icono)}
                </span>
              </div>

              <h3 style={{ color: "#1e3a8a" }}>{paso.titulo}</h3>
              <p style={{ color: "#6B7280", fontSize: "13px" }}>
                {paso.descripcion}
              </p>
            </div>

            {index < pasos.length - 1 && (
              <div style={{ color: "#D1D5DB", paddingTop: "40px" }}>
                ›
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}