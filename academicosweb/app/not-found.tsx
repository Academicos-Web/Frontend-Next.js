'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "100vh",
        padding: "20px",
        background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
        color: "white",
        gap: "16px",
      }}
    >
      {/* Símbolos matemáticos flotantes */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <div style={{ position: "absolute", top: "10%", left: "5%", fontSize: "3rem", opacity: 0.15 }}>∫</div>
        <div style={{ position: "absolute", top: "20%", right: "10%", fontSize: "2.5rem", opacity: 0.15 }}>π</div>
        <div style={{ position: "absolute", bottom: "15%", left: "8%", fontSize: "2.8rem", opacity: 0.15 }}>√</div>
        <div style={{ position: "absolute", bottom: "20%", right: "12%", fontSize: "3rem", opacity: 0.15 }}>∑</div>
      </div>

      {/* Contenido principal */}
      <div style={{ position: "relative", zIndex: 10 }}>
        <h1
          style={{
            fontSize: "clamp(3rem, 10vw, 8rem)",
            margin: "0",
            fontWeight: "900",
            color: "#fbbf24",
            textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          404
        </h1>

        <h2
          style={{
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
            margin: "16px 0",
            fontWeight: "700",
            color: "#fff",
          }}
        >
          Página no encontrada
        </h2>

        <p
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            color: "#d1d5db",
            maxWidth: "500px",
            lineHeight: "1.6",
          }}
        >
          La ruta a la que intentas acceder no existe o fue movida. Pero no te preocupes, puedes volver al inicio.
        </p>

        {/* Botones de navegación */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "32px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              padding: "12px 32px",
              backgroundColor: "#fbbf24",
              color: "#1e3a8a",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#f59e0b";
              (e.target as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#fbbf24";
              (e.target as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            🏠 Volver al Inicio
          </Link>

          <Link
            href="/directorio"
            style={{
              padding: "12px 32px",
              backgroundColor: "transparent",
              color: "#fbbf24",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1rem",
              border: "2px solid #fbbf24",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#fbbf24";
              (e.target as HTMLElement).style.color = "#1e3a8a";
              (e.target as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "transparent";
              (e.target as HTMLElement).style.color = "#fbbf24";
              (e.target as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            📋 Ver Directorio
          </Link>
        </div>

        <p
          style={{
            marginTop: "32px",
            fontSize: "0.9rem",
            color: "#9ca3af",
          }}
        >
          ¿Necesitas ayuda?{" "}
          <Link
            href="/contacto"
            style={{
              color: "#fbbf24",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Contacta con soporte
          </Link>
        </p>
      </div>
    </main>
  );
}