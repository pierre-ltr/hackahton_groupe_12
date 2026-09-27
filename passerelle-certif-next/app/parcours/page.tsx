import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { certifications, profils, type Profil } from "@/lib/data";

export const metadata: Metadata = { title: "Parcours" };

const steps = [
  { title: "Choisir son profil", text: "Jeune diplômé, reconversion ou expérience à valoriser." },
  { title: "Explorer les certifications", text: "Filtrer par domaine et comparer niveau, durée et débouchés." },
  { title: "Consulter la fiche", text: "Compétences, organisme certificateur, financement possible." },
  { title: "Rejoindre l’organisme", text: "Un lien direct vers le site officiel, sans intermédiaire." },
];

export default function ParcoursPage() {
  return (
    <div className="mx-auto w-[92%] max-w-6xl py-16">
      <p className="mb-3 font-bold text-emerald-800">Parcours guidés</p>
      <h1 className="max-w-3xl text-5xl font-black tracking-[-0.03em]">
        Quelle est votre situation ?
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Chaque profil a ses propres besoins. Choisissez le vôtre pour voir les certifications
        les plus adaptées.
      </p>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {(Object.entries(profils) as [Profil, (typeof profils)[Profil]][]).map(([key, profil]) => {
          const count = certifications.filter((c) => c.profils.includes(key)).length;
          return (
            <Link
              key={key}
              href={`/certifications?profil=${key}`}
              className="group flex flex-col rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
            >
              <h2 className="text-2xl font-black">{profil.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{profil.text}</p>
              <span className="mt-auto pt-6 font-black text-emerald-800 group-hover:underline">
                {count} certifications →
              </span>
            </Link>
          );
        })}
      </section>

      <section className="mt-20 rounded-[2rem] bg-emerald-950 p-10 text-white">
        <span className="mb-2 block font-black tracking-[0.2em] text-emerald-200">
          COMMENT ÇA MARCHE
        </span>
        <h2 className="mb-8 text-4xl font-black tracking-tight">4 étapes, zéro jargon</h2>
        <ol className="grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-3xl bg-white/5 p-6">
              <span className="mb-4 grid size-10 place-items-center rounded-full bg-emerald-400 font-black text-emerald-950">
                {index + 1}
              </span>
              <h3 className="mb-2 font-black">{step.title}</h3>
              <p className="text-sm leading-6 text-emerald-50/80">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20">
        <SectionTitle number="→" title="Vous savez déjà ce que vous cherchez ?" />
        <Link
          href="/certifications"
          className="inline-block rounded-2xl bg-emerald-800 px-7 py-4 font-bold text-white transition hover:bg-emerald-900"
        >
          Voir tout le catalogue
        </Link>
      </section>
    </div>
  );
}
