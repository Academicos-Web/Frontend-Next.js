import styles from "./CajaDocente.module.css";

interface CajaDocenteProps {
  nombre: string;
  evaluacion: number;
  imagen: string;
  materias?: string[]; 
  tags?: string[];
  semestre: string;
}

export default async function CajaDocente({ nombre, evaluacion, imagen, tags, semestre, materias }: CajaDocenteProps) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}> 
                <img src={imagen} alt={nombre} className={styles.profileImg} />
                <div className={styles.headerInfo}>
                    <h3>{nombre}</h3>
                    <div className={styles.rating}>
                        <span className={styles.stars}>★★★★☆</span>
                        <span className={styles.evals}>{evaluacion} evaluaciones</span>
                    

            <div className={styles.cardBody}>
                <ul className={styles.subjects}>
                    {materias?.map((materia, index) => (
                        <li key={index}>📚 {materia}</li>
                    ))}
                </ul>
            
            <div className={styles.tags}>
                {tags?.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                ))}
            </div>
            </div>
      
            <div className={styles.cardFooter}>
                <span className={styles.semester}>Semestre: {semestre}</span>
                <a href="#" className={styles.profileLink}>Ver perfil →</a>
            </div>
                    </div>
                </div>
            </div>
        </div>      
    );
}