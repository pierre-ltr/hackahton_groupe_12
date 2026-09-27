import type { Metadata } from "next";
import Link from "next/link";
import { trustedOrganizations } from "@/lib/data";

export const metadata: Metadata = { title: "Mission" };

const values = [
  { title: "Pas de vente", text: "Nous faisons la passerelle vers les certifications officielles." },
  { title: "Sources fiables", text: "Nous mettons en avant des organismes reconnus." },
  { title: "Égalité des chances", text: "Les compétences avant le réseau ou le parcours scolaire." },
];

const problems = [
  { figure: "Dispersées", label: "des certifications réparties entre de nombreux organismes" },
  { figure: "Illisibles", label: "des sigles et des niveaux difficiles à comparer" },
  { figure: "Inégales", label: "un accès qui dépend trop du réseau et du parcours scolaire" },
];

export default function MissionPage() {
  return (
    <div className="mx-auto w-[92%] max-w-6xl py-16">
      <p className="mb-3 font-bold text-emerald-800">Notre mission</p>
      <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-[-0.03em] md:text-6xl">
        Rendre les certifications professionnelles lisibles pour tous.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Faciliter l’accès aux certifications professionnelles grâce à une plateforme qui
        guide chaque utilisateur vers les parcours les plus adaptés à ses ambitions.
      </p>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {problems.map((p) => (
          <div key={p.label} className="rounded-[1.75rem] bg-emerald-950 p-8 text-white">
            <strong className="block text-4xl font-black text-emerald-300">{p.figure}</strong>
            <span className="mt-2 block text-emerald-50/85">{p.label}</span>
          </div>
        ))}
      </section>

      <section className="mt-16 grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-10 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black tracking-tight">Nos engagements</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Le BTP est notre point de départ : des métiers concrets, accessibles, mais des
            certifications dispersées. Notre objectif est ensuite d’étendre la plateforme à
            d’autres secteurs.
          </p>
        </div>
        <div className="grid gap-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-3xl bg-emerald-50 p-6">
              <strong className="block text-emerald-950">{v.title}</strong>
              <span className="text-slate-600">{v.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-black">Des organismes reconnus</h2>
        <div className="flex flex-wrap gap-3">
          {trustedOrganizations.map((organization) => (
            <span
              key={organization}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-lg font-extrabold text-emerald-900"
            >
              {organization}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-16 flex flex-wrap gap-4">
        <Link
          href="/certifications"
          className="rounded-2xl bg-emerald-800 px-7 py-4 font-bold text-white transition hover:bg-emerald-900"
        >
          Explorer les certifications
        </Link>
        <Link
          href="/parcours"
          className="rounded-2xl border border-slate-300 bg-white px-7 py-4 font-bold transition hover:border-emerald-300"
        >
          Trouver mon parcours
        </Link>
      </div>
    </div>
  );
}
