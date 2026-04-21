"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getClass = (path: string): string => {
    return pathname === path ? "active" : "";
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-box">M</div>
          <div>
            <p className="title">Evaluación Docente</p>
            <span className="subtitle">MAC - FES Acatlán</span>
          </div>
        </div>

        <div className="nav-links">
          <Link href="/inicio" className={getClass("/inicio")}>
            Inicio
          </Link>

          <Link href="/directorio" className={getClass("/directorio")}>
            Directorio
          </Link>

          <Link href="/comparador" className={getClass("/comparador")}>
            Comparador
          </Link>

          <Link href="/login">
            <button className="login-btn">Iniciar Sesión</button>
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <h1>Directorio de Profesores</h1>
        <p>
          Explora el listado completo de docentes de Matemáticas Aplicadas y Computación
        </p>
      </div>
    </div>
  );
}