import Image from "next/image";

export default function InicioParteFinal() {
  return (
    <>
      {/* SECCIÓN SUPERIOR */}
      <section className="inicio-partefinal">
        <div className="contenedor">
          
          {/* TEXTO */}
          <div className="texto">
            <span className="badge">VISIÓN A FUTURO</span>

            <h2>Diseñada para crecer</h2>

            <p>
              Aunque inicialmente está dirigida a <b>Matemáticas Aplicadas y Computación</b>,
              la arquitectura modular permite escalar hacia otras carreras sin rediseños estructurales profundos.
            </p>

            <ul>
              <li>✔ Estructura adaptable por carrera y facultad</li>
              <li>✔ Base de datos normalizada y escalable</li>
              <li>✔ Configuración institucional flexible</li>
              <li>✔ Roles diferenciados: alumnos, docentes y administradores</li>
            </ul>
          </div>

          {/* IMAGEN */}
          <div className="imagen">
            <Image
              src="/campus.jpg"
              alt="Campus"
              width={600}
              height={400}
            />

            <div className="card">
              <strong>9+</strong>
              <span>Carreras potenciales</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-contenido">
          <h2>¿Listo para tomar mejores decisiones académicas?</h2>

          <p>
            Únete a cientos de estudiantes que ya utilizan la plataforma para elegir a sus profesores de forma informada.
          </p>

          <div className="botones">
            <button className="btn-primary">Comenzar Ahora</button>
            <button className="btn-secondary">Conocer Más</button>
          </div>
        </div>
      </section>
    </>
  );
}