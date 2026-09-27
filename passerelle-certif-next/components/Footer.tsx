import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto mt-auto flex w-[92%] max-w-6xl flex-col items-center gap-3 pt-16 pb-10 text-slate-500">
      <nav className="flex gap-6 text-sm font-semibold">
        <Link href="/parcours" className="hover:text-emerald-800">Parcours</Link>
        <Link href="/certifications" className="hover:text-emerald-800">Certifications</Link>
        <Link href="/mission" className="hover:text-emerald-800">Mission</Link>
      </nav>
      <p>Passerelle Certif — Projet Hackathon Groupe 12</p>
    </footer>
  );
}
