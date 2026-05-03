import styles from './CajaDocente/CajaDocente/CajaDocente.module.css';

interface CajaDocenteProps {
  nombre: string;
  evaluacion: number;
  imagen: string;
  
  materias?: string[]; 
  tags?: string[];
}

export default async function CajaDocente({ nombre, evaluacion, imagen }: CajaDocenteProps) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}> 
                <img src={imagen} alt={nombre} className={styles.profileImg} />
                <div className={styles.headerInfo}>
                    <h3>{nombre}</h3>
                    <div className={styles.rating}>
                        <span className={styles.stars}>★★★★☆</span>
                        <span className={styles.evals}>{evaluacion} evaluaciones</span>
                    </div>
                </div>
            </div>
        </div>        
    )
}