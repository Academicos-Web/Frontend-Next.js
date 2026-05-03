import CajaDocente from "./Components/CajaDocente/CajaDocente.tsx";

export default function Home() {
  return (
    <CajaDocente />
  );
}

import styles from './Components/CajaDocente/CajaDocente.module.css';

export default function CajaDocente() {
  return (
    <div className={styles.card}> </div>
}
