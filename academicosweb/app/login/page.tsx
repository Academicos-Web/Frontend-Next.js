"use client";

import LoginForm from '../../components/LoginForm'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
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
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 sm:px-8">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-lg font-semibold text-[#a39b1e] shadow-lg shadow-indigo-500/20 transition duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:rotate-2 hover:bg-white/20 hover:text-indigo-100 motion-safe:transform-gpu"
          >
            Volver al inicio
          </Link>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}