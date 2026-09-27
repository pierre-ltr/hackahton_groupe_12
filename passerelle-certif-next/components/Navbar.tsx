"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/parcours", label: "Parcours" },
  { href: "/certifications", label: "Certifications" },
  { href: "/mission", label: "Mission" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-20 mx-auto mt-5 flex w-[92%] max-w-6xl items-center justify-between rounded-3xl border border-slate-200 bg-white/85 px-5 py-4 shadow-sm backdrop-blur">
      <Link href="/" className="flex items-center gap-3 font-extrabold">
        <span className="grid size-9 place-items-center rounded-xl bg-emerald-800 text-white">
          P
        </span>
        <span>Passerelle Certif</span>
      </Link>

      <nav className="hidden gap-7 text-sm font-semibold text-slate-700 md:flex">
        {links.map((link) => {
          const active =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={active ? "text-emerald-800" : "hover:text-emerald-800"}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/certifications"
        className="rounded-2xl bg-emerald-800 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-900"
      >
        Explorer
      </Link>
    </header>
  );
}
