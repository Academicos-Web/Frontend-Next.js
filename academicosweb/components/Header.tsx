"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./Header.css";

interface NavItem {
  name: string;
  path: string;
}

// DATOS DE EJEMPLO - aquí conectarán con la BD después
const alumnoEjemplo = {
  nombre: "Carlos López Mendoza",
  semestre: 6,
  graduado: false,
  correo: "carlos.lopez@comunidad.unam.mx",
  totalReseñas: 8,
  reseñas: [
    {
      id: 1,
      profesor: "Dra. Sofía Castillo",
      materia: "Álgebra Lineal",
      comentario: "Excelente maestra, explica muy claro y siempre está disponible para dudas.",
      fecha: "Marzo 2025",
    },
    {
      id: 2,
      profesor: "Dr. Ramón Fuentes",
      materia: "Cálculo Diferencial",
      comentario: "Buen profesor aunque las clases son muy rápidas.",
      fecha: "Enero 2025",
    },
    {
      id: 3,
      profesor: "Mtro. Luis Herrera",
      materia: "Probabilidad",
      comentario: "Muy buen maestro, sus ejemplos son muy prácticos.",
      fecha: "Noviembre 2024",
    },
  ],
};

export default function Header() {
  const pathname = usePathname();
  const [menuAbierto, setMenuAbierto] = useState(false);
  // Iniciamos en true para mostrar el perfil de ejemplo
// Cuando conecten la BD, esto vendrá de su sistema de auth
const [sesionIniciada, setSesionIniciada] = useState(true);

  const navItems: NavItem[] = [
    { name: "Inicio", path: "/inicio" },
    { name: "Directorio", path: "/directorio" },
    { name: "Comparador", path: "/comparador" },
  ];

  if (sesionIniciada === null) return null;

return (
    <header className="navbar">
      {/* LOGO */}
      <div className="logo-container">
        <div className="logo-box">M</div>
        <div>
          <h1 className="logo-title">Evaluación Docente</h1>
          <p className="logo-subtitle">MAC – FES Acatlán</p>
        </div>
      </div>

      {/* NAVEGACIÓN */}
      <nav className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`nav-button ${
              pathname === item.path ? "active" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}

        {/* PERFIL O LOGIN */}
        {sesionIniciada ? (
          <div className="perfil-wrapper">
            <button
              className="perfil-trigger"
              onClick={() => setMenuAbierto(!menuAbierto)}
            >
              <div className="perfil-avatar">
                {alumnoEjemplo.nombre.charAt(0)}
              </div>
              <span className="perfil-nombre">
                {alumnoEjemplo.nombre.split(" ")[0]}
              </span>
              <span className="perfil-chevron">{menuAbierto ? "▲" : "▼"}</span>
            </button>

            {menuAbierto && (
              <div className="perfil-dropdown">
                {/* INFO PRINCIPAL */}
                <div className="dropdown-header">
                  <div className="dropdown-avatar">
                    {alumnoEjemplo.nombre.charAt(0)}
                  </div>
                  <div>
                    <p className="dropdown-nombre">{alumnoEjemplo.nombre}</p>
                    <p className="dropdown-info">
                      {alumnoEjemplo.graduado
                        ? "Graduado"
                        : `Semestre ${alumnoEjemplo.semestre}`}
                    </p>
                    <p className="dropdown-correo">{alumnoEjemplo.correo}</p>
                  </div>
                </div>

                {/* RESEÑAS */}
                <div className="dropdown-section">
                  <p className="dropdown-section-title">
                    📝 {alumnoEjemplo.totalReseñas} reseñas dejadas
                  </p>
                  <div className="dropdown-reseñas">
                    {alumnoEjemplo.reseñas.map((reseña) => (
                      <Link
                        key={reseña.id}
                        href={`/perfil-alumno`}
                        className="dropdown-reseña-card"
                        onClick={() => setMenuAbierto(false)}
                      >
                        <p className="reseña-profesor">{reseña.profesor}</p>
                        <p className="reseña-materia">{reseña.materia}</p>
                        <p className="reseña-comentario">{reseña.comentario}</p>
                        <p className="reseña-fecha">{reseña.fecha}</p>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/perfil-alumno"
                    className="dropdown-ver-perfil"
                    onClick={() => setMenuAbierto(false)}
                  >
                    Ver perfil completo →
                  </Link>
                </div>

                {/* CERRAR SESIÓN */}
                <button className="dropdown-logout" onClick={() => {
                  localStorage.removeItem("sesion");
                setSesionIniciada(false); // ahora sí existe y funciona
                setMenuAbierto(false);
              }}>
                Cerrar sesión
              </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login" className="login-button">
            Iniciar Sesión
          </Link>
        )}
      </nav>
    </header>
  );
}