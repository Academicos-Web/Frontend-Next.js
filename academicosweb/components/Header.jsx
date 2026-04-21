export default function Header() {
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
          <a href="#">Inicio</a>
          <a href="#" className="active">Directorio</a>
          <a href="#">Comparador</a>
          <button className="login-btn">Iniciar Sesión</button>
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