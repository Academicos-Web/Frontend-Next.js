'use client';

import FiltroProfesores from "@/app/Filtro/filtrosprofesores";
import { useState } from "react";

type Profesor = {
    id: number;
    nombre: string;
    materia: string;
    semestre: string;
    calificacion: number;
};

const datosIniciales: Profesor[] = [
    { id: 1, nombre: "Juan Perez", materia: "Matemáticas", semestre: "1", calificacion: 9 },
    { id: 2, nombre: "Maria Lopez", materia: "Programación", semestre: "2", calificacion: 10 }
];

export default function ProfesoresFiltrados() {
    const [profesoresFiltrados, setProfesoresFiltrados] = useState<Profesor[]>(datosIniciales);
    return (<>
        <FiltroProfesores
            profesores={datosIniciales}
            onFiltrar={setProfesoresFiltrados}
        />

        <div style={{ marginTop: "0rem", color: "#64748b" }}>
            <p>Resultados encontrados: {profesoresFiltrados.length}</p>
            <hr />
            <p style={{ fontStyle: "italic" }}>
                Tarjetas
            </p>
        </div>
    </>
    );
}