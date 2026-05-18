"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function LoginForm() {

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
  e.preventDefault();

  setLoading(true);
  setMessage("");

  const { data, error } = await supabase
    .from("alumnos")
    .select("*")
    .eq("numero_cuenta", username)
    .eq("password_hash", password)
    .single();

  console.log(data);
  console.log(error);

  if (error || !data) {
    setMessage("Número de cuenta o contraseña incorrectos");
    setLoading(false);
    return;
  }

  // GUARDAR SESIÓN
  localStorage.setItem("sesion", "true");

  localStorage.setItem(
    "alumno",
    JSON.stringify(data)
  );

  router.push("/perfil-alumno");

  setLoading(false);
};

  return (

    <div className="relative overflow-hidden rounded-[28px] bg-white p-10 border border-slate-200 shadow-sm">

      {/* Glow decorativo */}

      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-indigo-100 blur-3xl"></div>

      {/* Header */}

      <div className="relative z-10">

        <span className="rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold tracking-wide text-indigo-700">
          Acceso Institucional
        </span>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#163d8f]">
          Iniciar Sesión
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Ingresa tu número de cuenta y contraseña para acceder
          a la plataforma académica.
        </p>

      </div>

      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >

        {/* Número de cuenta */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Número de Cuenta
          </label>

          <div className="group flex items-center rounded-xl border border-slate-300 bg-white transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">

            <div className="pl-4 text-slate-400">
              <User size={18} />
            </div>

            <input
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              type="text"
              placeholder="420012345"
              className="w-full bg-transparent px-4 py-4 text-slate-800 placeholder:text-slate-400 focus:outline-none"
              required
            />

          </div>

        </div>

        {/* Contraseña */}

        <div>

          <label className="mb-2 block text-sm font-medium text-slate-700">
            Contraseña
          </label>

          <div className="group flex items-center rounded-xl border border-slate-300 bg-white transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">

            <div className="pl-4 text-slate-400">
              <Lock size={18} />
            </div>

            <input
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="••••••••"
              className="w-full bg-transparent px-4 py-4 text-slate-800 placeholder:text-slate-400 focus:outline-none"
              required
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="pr-4 text-slate-400 transition hover:text-slate-700"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

        </div>

        {/* Opciones */}

        <div className="flex items-center justify-between text-sm">

          <label className="flex items-center gap-2 text-slate-500">

            <input
              type="checkbox"
              className="rounded border-slate-300"
            />

            Recordarme

          </label>

          <button
            type="button"
            className="text-indigo-600 transition hover:text-indigo-500"
          >
            ¿Olvidaste tu contraseña?
          </button>

        </div>

        {/* Error */}

        {message && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {message}
          </div>
        )}

        {/* Botón */}

        <button
          type="submit"
          disabled={loading}
          className="group relative mt-2 w-full overflow-hidden rounded-xl bg-[#163d8f] px-4 py-4 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1d4fae] disabled:cursor-not-allowed disabled:opacity-50"
        >

          <span className="relative z-10">

            {loading
              ? "Iniciando sesión..."
              : "Ingresar"}

          </span>

        </button>

      </form>

      {/* Footer */}

      <p className="mt-8 text-center text-xs leading-relaxed text-slate-400">
        Al iniciar sesión aceptas los términos de uso y la política
        de privacidad de la plataforma.
      </p>

    </div>
  );
}