"use client";

import LoginForm from '../../components/LoginForm'
import Link from 'next/link'
import styles from './Login.module.css'

export default function LoginPage() {
  return (
    <div className={styles.container}>

      {/* IZQUIERDA */}
      <div className={styles.left}>
        
        {/* Fondo que YA tenías */}
        <div className="simbolos-matematicos">
          <div className="simbolo">∫</div>
          <div className="simbolo">∑</div>
          <div className="simbolo">π</div>
          <div className="simbolo">∃</div>
          <div className="simbolo">√</div>
          <div className="simbolo">≠</div>
          <div className="simbolo">≈</div>
          <div className="simbolo">θ</div>
          <div className="simbolo">λ</div>
          <div className="simbolo">α</div>
          <div className="simbolo">β</div>
          <div className="simbolo">γ</div>
          <div className="simbolo">∂</div>
          <div className="simbolo">∏</div>
          <div className="simbolo">∈</div>
          <div className="simbolo">f(x)</div>
          <div className="simbolo">∞</div>
        </div>

        <div className={styles.glow}></div>

        <div className={styles.leftContent}>
          <span className={styles.badge}>
            FES Acatlán • UNAM
          </span>

          <h1 className={styles.tituloGrande}>
            Evaluación Docente <br />
            <span>MAC</span>
          </h1>

          <p className={styles.descripcion}>
            Plataforma académica exclusiva para estudiantes de Matemáticas Aplicadas y Computación.
          </p>

          <ul className={styles.lista}>
            <li> Acceso seguro con correo institucional</li>
            <li> Evaluaciones completamente anónimas</li>
            <li> Estadísticas detalladas</li>
          </ul>
        </div>
      </div>

      {/* DERECHA */}
      <div className={styles.right}>
        <div>

          {/* TU FORM */}
          <LoginForm />

        </div>
      </div>

    </div>
  )
}