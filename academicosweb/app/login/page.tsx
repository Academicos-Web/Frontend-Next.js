"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Login.module.css";

export default function Login() {
const router = useRouter();
const [vista, setVista] = useState<"login" | "registro">("login");
  const [graduado, setGraduado] = useState(false);

  // ESTADOS LOGIN
  const [loginCorreo, setLoginCorreo] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // ESTADOS REGISTRO
  const [regNombre, setRegNombre] = useState("");
  const [regCuenta, setRegCuenta] = useState("");
  const [regSemestre, setRegSemestre] = useState("");
  const [regCorreo, setRegCorreo] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  const [regError, setRegError] = useState("");
  const [regExito, setRegExito] = useState(false);

  const correoDominio = "@pcpuma.acatlan.unam.mx";

  function validarCorreo(correo: string) {
    return correo.endsWith(correoDominio);
  }

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");

    if (!validarCorreo(loginCorreo)) {
      setLoginError(`El correo debe terminar en ${correoDominio}`);
      return;
    }
    if (loginPassword.length < 6) {
      setLoginError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

  // Usuario de prueba - se elimina cuando conecten la BD
const usuarioPrueba = {
  correo: "prueba@pcpuma.acatlan.unam.mx",
  password: "123456",
};

if (loginCorreo === usuarioPrueba.correo && loginPassword === usuarioPrueba.password) {
  localStorage.setItem("sesion", "true");
  window.dispatchEvent(new Event("storage"));
  router.push("/inicio");
} else {
  setLoginError("Correo o contraseña incorrectos");
}
  }

  function handleRegistro(e: React.FormEvent) {
    e.preventDefault();
    setRegError("");

    if (!regNombre.trim()) {
      setRegError("El nombre es obligatorio");
      return;
    }
    if (!regCuenta.trim()) {
      setRegError("El número de cuenta es obligatorio");
      return;
    }
    if (!graduado && (!regSemestre || parseInt(regSemestre) < 1)) {
      setRegError("Ingresa un semestre válido");
      return;
    }
    if (!validarCorreo(regCorreo)) {
      setRegError(`El correo debe terminar en ${correoDominio}`);
      return;
    }
    if (regPassword.length < 6) {
      setRegError("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (regPassword !== regConfirm) {
      setRegError("Las contraseñas no coinciden");
      return;
    }

    // Aquí conectarán con la BD
    setRegExito(true);
  }

  return (
    <main className={styles.pagina}>
      <div className={styles.card}>
        {/* LOGO */}
        <div className={styles.logo}>
          <div className={styles.logoBox}>M</div>
          <div>
            <h1 className={styles.logoTitulo}>Evaluación Docente</h1>
            <p className={styles.logoSubtitulo}>MAC – FES Acatlán</p>
          </div>
        </div>

        {/* TABS */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${vista === "login" ? styles.tabActivo : ""}`}
            onClick={() => { setVista("login"); setLoginError(""); }}
          >
            Iniciar Sesión
          </button>
          <button
            className={`${styles.tab} ${vista === "registro" ? styles.tabActivo : ""}`}
            onClick={() => { setVista("registro"); setRegError(""); setRegExito(false); }}
          >
            Registrarse
          </button>
        </div>

        {/* LOGIN */}
        {vista === "login" && (
          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.campo}>
              <label className={styles.label}>Correo institucional</label>
              <input
                className={styles.input}
                type="email"
                placeholder={`tunombre${correoDominio}`}
                value={loginCorreo}
                onChange={(e) => setLoginCorreo(e.target.value)}
                required
              />
            </div>
            <div className={styles.campo}>
              <label className={styles.label}>Contraseña</label>
              <input
                className={styles.input}
                type="password"
                placeholder="••••••••"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            {loginError && <p className={styles.error}>⚠ {loginError}</p>}
            <button className={styles.boton} type="submit">
              Iniciar Sesión
            </button>
          </form>
        )}

        {/* REGISTRO */}
        {vista === "registro" && !regExito && (
          <form className={styles.form} onSubmit={handleRegistro}>
            <div className={styles.campo}>
              <label className={styles.label}>Nombre completo</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Carlos López Mendoza"
                value={regNombre}
                onChange={(e) => setRegNombre(e.target.value)}
                required
              />
            </div>
            <div className={styles.campo}>
              <label className={styles.label}>Número de cuenta</label>
              <input
                className={styles.input}
                type="text"
                placeholder="420012345"
                value={regCuenta}
                onChange={(e) => setRegCuenta(e.target.value)}
                required
              />
            </div>
            <div className={styles.campo}>
              <label className={styles.label}>Semestre</label>
              <input
                className={styles.input}
                type="number"
                placeholder="6"
                min="1"
                max="8"
                value={regSemestre}
                onChange={(e) => setRegSemestre(e.target.value)}
                disabled={graduado}
                required={!graduado}
              />
              <label className={styles.checkLabel}>
                <input
                  type="checkbox"
                  checked={graduado}
                  onChange={(e) => {
                    setGraduado(e.target.checked);
                    if (e.target.checked) setRegSemestre("");
                  }}
                />
                Ya me gradué
              </label>
            </div>
            <div className={styles.campo}>
              <label className={styles.label}>Correo institucional</label>
              <input
                className={styles.input}
                type="email"
                placeholder={`tunombre${correoDominio}`}
                value={regCorreo}
                onChange={(e) => setRegCorreo(e.target.value)}
                required
              />
              <p className={styles.hint}>Solo correos {correoDominio}</p>
            </div>
            <div className={styles.campo}>
              <label className={styles.label}>Contraseña</label>
              <input
                className={styles.input}
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                required
              />
            </div>
            <div className={styles.campo}>
              <label className={styles.label}>Confirmar contraseña</label>
              <input
                className={styles.input}
                type="password"
                placeholder="••••••••"
                value={regConfirm}
                onChange={(e) => setRegConfirm(e.target.value)}
                required
              />
            </div>
            {regError && <p className={styles.error}>⚠ {regError}</p>}
            <button className={styles.boton} type="submit">
              Crear cuenta
            </button>
          </form>
        )}

        {/* ÉXITO REGISTRO */}
        {vista === "registro" && regExito && (
          <div className={styles.exito}>
            <p className={styles.exitoIcono}>✅</p>
            <h2 className={styles.exitoTitulo}>¡Cuenta creada!</h2>
            <p className={styles.exitoTexto}>
              Tu cuenta ha sido registrada exitosamente.
            </p>
            <button
              className={styles.boton}
              onClick={() => setVista("login")}
            >
              Iniciar Sesión
            </button>
          </div>
        )}
      </div>
    </main>
  );
}