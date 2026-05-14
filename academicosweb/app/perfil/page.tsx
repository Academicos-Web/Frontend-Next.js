import styles from "./Perfil.module.css";
import Image from "next/image";

export default function Perfil() {
  return (
    <main className={styles.perfil}>
      <div className="container">

        <div className={styles.grid}>

          {/* IZQUIERDA */}
          <div className={styles.card}>
            <Image 
           src="/perfil.jpg" 
           alt="Foto de perfil de M.C. Sofía Castillo Navarro"
           width={150}
           height={150}
           className={styles.avatar}
           />
            <h2>M.C. Sofía Castillo Navarro</h2>

            <div className={styles.stars}>
              ⭐⭐⭐⭐☆ <span>4.6</span>
            </div>

            <span className={styles.small}>42 evaluaciones</span>

            <div className={styles.section}>
              <h4>Materias que imparte</h4>
              <ul>
                <li>Álgebra Lineal</li>
                <li>Álgebra Superior</li>
              </ul>
            </div>

            <div className={styles.section}>
              <h4>Semestres</h4>
              <div className={styles.badges}>
                <span>2°</span>
                <span>4°</span>
              </div>
            </div>

            <button className={styles.btn}>
              ⭐ Evaluar Profesor
            </button>

            <p className={styles.note}>
              Necesitas iniciar sesión para evaluar
            </p>
          </div>

          {/* DERECHA */}
          <div className={styles.content}>

            <div className={styles.box}>
              <h3>Trayectoria Profesional</h3>
              <p>
                Maestra en Ciencias Matemáticas por la UNAM. 7 años de experiencia.
                Especialista en álgebra lineal y sus aplicaciones en ciencia de datos.
              </p>
            </div>

            <div className={styles.box}>
              <h3>Estadísticas de Evaluación</h3>

              <div className={styles.statsGrid}>

                <div>
                  <div className={styles.statHeader}>
                    <span>Dominio del tema</span>
                    <span>4.7</span>
                  </div>
                  <div className={styles.bar}>
                    <div style={{ width: "94%" }} />
                  </div>
                </div>

                <div>
                  <div className={styles.statHeader}>
                    <span>Claridad al explicar</span>
                    <span>4.7</span>
                  </div>
                  <div className={styles.bar}>
                    <div style={{ width: "94%" }} />
                  </div>
                </div>

                <div>
                  <div className={styles.statHeader}>
                    <span>Puntualidad</span>
                    <span>4.5</span>
                  </div>
                  <div className={styles.bar}>
                    <div style={{ width: "90%" }} />
                  </div>
                </div>

                <div>
                  <div className={styles.statHeader}>
                    <span>Nivel de exigencia</span>
                    <span>4.3</span>
                  </div>
                  <div className={styles.bar}>
                    <div style={{ width: "86%" }} />
                  </div>
                </div>

                <div>
                  <div className={styles.statHeader}>
                    <span>Carga de trabajo</span>
                    <span>4.4</span>
                  </div>
                  <div className={styles.bar}>
                    <div style={{ width: "88%" }} />
                  </div>
                </div>

                <div>
                  <div className={styles.statHeader}>
                    <span>Forma de evaluar</span>
                    <span>4.6</span>
                  </div>
                  <div className={styles.bar}>
                    <div style={{ width: "92%" }} />
                  </div>
                </div>

              </div>

              <div className={styles.tags}>
                <span>Muy clara</span>
                <span>Ejercicios prácticos</span>
                <span>Accesible para dudas</span>
              </div>

            </div>

            <div className={styles.box}>
              <div className={styles.headerRow}>
                <h3>Evaluaciones y Comentarios (0)</h3>
                <button className={styles.btnLight}>+ Evaluar</button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}