import styles from "./PerfilAlumno.module.css";
import Link from "next/link";

// DATOS DE EJEMPLO - después vendrán de la BD
const alumno = {
  nombre: "Carlos López Mendoza",
  semestre: 6,
  graduado: false,
  correo: "carlos.lopez@comunidad.unam.mx",
  totalReseñas: 8,
  reseñas: [
    {
      id: 1,
      profesor: "Dra. Sofía Castillo Navarro",
      materia: "Álgebra Lineal",
      semestre: "2025-2",
      comentario: "Excelente maestra, explica muy claro y siempre está disponible para dudas. Sus ejemplos son muy prácticos y las clases son muy dinámicas.",
      calificacion: 5,
      tags: ["Muy clara", "Ejercicios prácticos", "Accesible para dudas"],
    },
    {
      id: 2,
      profesor: "Dr. Ramón Fuentes García",
      materia: "Cálculo Diferencial",
      semestre: "2025-1",
      comentario: "Buen profesor aunque las clases son muy rápidas. Domina muy bien el tema pero a veces avanza demasiado.",
      calificacion: 3,
      tags: ["Dominio del tema", "Ritmo acelerado"],
    },
    {
      id: 3,
      profesor: "Mtro. Luis Herrera Mondragón",
      materia: "Probabilidad",
      semestre: "2024-2",
      comentario: "Muy buen maestro, sus ejemplos son muy prácticos y explica de forma muy entretenida.",
      calificacion: 4,
      tags: ["Muy clara", "Entretenido"],
    },
    {
      id: 4,
      profesor: "Dra. Patricia Vega",
      materia: "Álgebra Superior",
      semestre: "2024-1",
      comentario: "Exige bastante pero se aprende mucho. Muy puntual y organizada.",
      calificacion: 4,
      tags: ["Exigente", "Organizada"],
    },
  ],
};

function Estrellas({ cantidad }: { cantidad: number }) {
  return (
    <div className={styles.estrellas}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= cantidad ? styles.estrellaMarcada : styles.estrellaVacia}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function PerfilAlumno() {
  return (
    <main className={styles.perfil}>
      {/* ENCABEZADO */}
      <div className={styles.encabezado}>
        <div className={styles.avatarGrande}>
          {alumno.nombre.charAt(0)}
        </div>
        <div className={styles.encabezadoInfo}>
          <h1 className={styles.nombre}>{alumno.nombre}</h1>
          <p className={styles.semestre}>
            {alumno.graduado ? "✓ Graduado" : `Semestre ${alumno.semestre}`}
          </p>
          <p className={styles.correo}>✉ {alumno.correo}</p>
        </div>
        <div className={styles.statBox}>
          <span className={styles.statNumero}>{alumno.totalReseñas}</span>
          <span className={styles.statLabel}>Reseñas dejadas</span>
        </div>
      </div>

      {/* RESEÑAS */}
      <div className={styles.contenido}>
        <h2 className={styles.tituloSeccion}>📝 Mis reseñas</h2>
        <div className={styles.listaReseñas}>
          {alumno.reseñas.map((reseña) => (
            <div key={reseña.id} className={styles.cardReseña}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.cardProfesor}>{reseña.profesor}</h3>
                  <p className={styles.cardMateria}>{reseña.materia}</p>
                </div>
                <div className={styles.cardDerecha}>
                  <Estrellas cantidad={reseña.calificacion} />
                  <span className={styles.cardSemestre}>{reseña.semestre}</span>
                </div>
              </div>
              <p className={styles.cardComentario}>{reseña.comentario}</p>
              <div className={styles.cardTags}>
                {reseña.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <Link href={`/directorio`} className={styles.verProfesor}>
                Ver perfil del profesor →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}