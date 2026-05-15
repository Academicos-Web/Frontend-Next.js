import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* LOGO + INFO */}
        <div className={styles.brandSection}>
          <div className={styles.logoContainer}>
            <div className={styles.logoBox}>M</div>

            <div>
              <h3>Evaluación Docente MAC</h3>
              <p>FES Acatlán • UNAM</p>
            </div>
          </div>

          <p className={styles.description}>
            Plataforma académica que promueve la transparencia,
            la ética digital y la mejora continua en la comunidad
            de Matemáticas Aplicadas y Computación.
          </p>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h4>Navegación</h4>

          <ul className={styles.links}>
            <li>
              <Link href="/inicio">Inicio</Link>
            </li>

            <li>
              <Link href="/directorio">Directorio</Link>
            </li>

            <li>
              <Link href="/comparador">Comparador</Link>
            </li>
          </ul>
        </div>

        {/* INFORMACIÓN */}
        <div>
          <h4>Información</h4>

          <ul className={styles.links}>
            <li>
              <Link href="/terminos">Términos de Uso</Link>
            </li>

            <li>
              <Link href="/privacidad">Privacidad</Link>
            </li>

            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4>Boletín Informativo</h4>

          <p className={styles.newsText}>
            Recibe actualizaciones sobre la plataforma y nuevas funcionalidades.
          </p>

          <div className={styles.newsletter}>
            <input
              type="email"
              placeholder="correo@comunidad.unam.mx"
            />

            <button>Suscribir</button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottomBar}>
        <p>© 2025 FES Acatlán — UNAM. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}