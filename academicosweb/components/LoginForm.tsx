'use client';

import { useState} from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    
    setTimeout(() => {
      
      setMessage('Formulario visual - Conexión simulada');
      setLoading(false);
      setUsername('');
      setPassword('');
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-md rounded-3xl bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/40 border border-white/10">
      <h1 className="text-3xl font-extrabold text-[#a39b1e]">Iniciar Sesión</h1>
      <p className="mt-2 text-sm text-slate-300">
        Ingresa tu número de cuenta y contraseña para acceder.
      </p>
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <label className="block">
          <span className="text-sm text-slate-300">Número de Cuenta</span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Número de cuenta"
            className="mt-2 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            required
          />
        </label>
        
        <label className="block">
          <span className="text-sm text-slate-300">Contraseña</span>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Contraseña"
            className="mt-2 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            required
          />
        </label>
        
        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full rounded-lg bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? 'Iniciando...' : 'Ingresar'}
        </button>
      </form>
      
      {message && (
        <p className={`mt-4 text-sm ${message.includes('exitoso') ? 'text-green-300' : 'text-red-300'}`}>
          {message}
        </p>
      )}
    </div>
  );
}