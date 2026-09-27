import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-[92%] max-w-2xl flex-col items-center py-32 text-center">
      <span className="font-black tracking-[0.2em] text-emerald-800">404</span>
      <h1 className="mt-3 text-5xl font-black tracking-tight">Page introuvable</h1>
      <p className="mt-4 text-lg text-slate-600">
        Cette page n’existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-2xl bg-emerald-800 px-7 py-4 font-bold text-white transition hover:bg-emerald-900"
      >
        Retour à l’accueil
      </Link>
    </section>
  );
}
