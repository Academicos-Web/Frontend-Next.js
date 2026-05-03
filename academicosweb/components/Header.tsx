"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Inicio", path: "/inicio" },
    { name: "Directorio", path: "/directorio" },
    { name: "Comparador", path: "/comparador" },
  ];

  return (
    <header className="navbar">
      {/* LOGO */}
      <div className="logo-container">
        <div className="logo-box">M</div>

        <div>
          <h1 className="logo-title">Evaluación Docente</h1>
          <p className="logo-subtitle">MAC - FES Acatlán</p>
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

        {/* LOGIN */}
        <Link href="/login" className="login-button">
          Iniciar Sesión
        </Link>
      </nav>
    </header>
  );
}