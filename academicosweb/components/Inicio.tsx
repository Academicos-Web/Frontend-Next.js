'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Inicio() {
  return ( 
  
  <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Símbolos matemáticos flotantes */}
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
      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-12 px-6 py-24 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-32">
        <div className="max-w-2xl text-center lg:text-left">
           <Link
            href="/"
            className="fixed top-4 left-4 z-50 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-lg font-semibold text-[#a39b1e] shadow-lg shadow-indigo-500/20 transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:rotate-2 hover:bg-white/20 hover:text-indigo-100 motion-safe:transform-gpu"
            >
              ∫ MAC dx
            </Link>

          <h1 className="mt-10 text-4xl font-extrabold tracking-tight text-[#234661] sm:text-5xl lg:text-6xl"
          style={{ 
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              WebkitTextStroke: '2px #a39b1e'
                   }}>
          Plataforma de Evaluación Docente
          </h1>

          <h1 className="mt-10 text-2xl font-extrabold tracking-tight text-[#a39b1e] sm:text-xl lg:text-2xl">
            Matemáticas Aplicadas y Computación
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#fbf7cb] text-slate-200 sm:text-base">
            Toma decisiones académicas informadas. Conoce el perfil profesional de tus profesores antes de inscribir materias.
          </p>
          <div className="flex justify-center">
          <Link
            href="/profesores"
            className="mt-10 inline-flex rounded-sm bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition duration-300 hover:-translate-y-1 hover:bg-indigo-400 hover:shadow-indigo-500/40"
          >
            EXPLORAR PROFESORES
          </Link>
          </div>
        </div>

        <div className="relative w-80 h-80 overflow-hidden rounded-3xl shadow-2xl shadow-slate-950/40 sm:w-96 sm:h-96">
          <Image
            src="/FES_1.jpg"
            alt="Ilustración educativa"
            fill
            sizes="(max-width: 800px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </main>
    </div>
  );
}