import CajaDocente from "./CajaDocente/CajaDocente/CajaDocente.js";

export default function Home() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '40px' }}>
      <CajaDocente 
        nombre="Armando (yo)"
        materias={["Desarrollo web", "Optimizacion"]}
        evaluacion={100}
        imagen="/perfil1.jpg"
      />
    </div>
  );
}

