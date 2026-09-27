import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CertificationCard from "@/components/CertificationCard";
import { certifications, getCertification } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const certification = getCertification((await params).slug);
  return { title: certification?.title ?? "Certification introuvable" };
}

export default async function CertificationPage({ params }: Props) {
  const certification = getCertification((await params).slug);
  if (!certification) notFound();

  const similar = certifications
    .filter((c) => c.slug !== certification.slug && c.domain === certification.domain)
    .slice(0, 3);

  const infos = [
    { label: "Niveau", value: certification.level },
    { label: "Durée", value: certification.duration },
    { label: "Organisme", value: certification.organization },
  ];

  return (
    <div className="mx-auto w-[92%] max-w-6xl py-16">
      <nav className="mb-8 text-sm font-semibold text-slate-500">
        <Link href="/" className="hover:text-emerald-800">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/certifications" className="hover:text-emerald-800">Certifications</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{certification.title}</span>
      </nav>

      <section className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="mb-6 grid size-16 place-items-center rounded-2xl bg-emerald-50 text-3xl font-black text-emerald-800">
            {certification.letter}
          </div>
          <p className="font-black uppercase text-emerald-800">{certification.domain}</p>
          <h1 className="mt-1 text-5xl font-black tracking-[-0.03em]">{certification.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{certification.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {certification.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-950"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <ListBlock title="Compétences acquises" items={certification.skills} />
            <ListBlock title="Débouchés" items={certification.outcomes} />
          </div>
        </div>

        <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 lg:sticky lg:top-32">
          <h2 className="mb-5 text-2xl font-black">En bref</h2>
          <dl className="grid gap-4">
            {infos.map((info) => (
              <div key={info.label} className="rounded-2xl bg-slate-50 p-4">
                <dt className="text-sm text-slate-500">{info.label}</dt>
                <dd className="font-bold">{info.value}</dd>
              </div>
            ))}
          </dl>
          <a
            href={certification.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block rounded-2xl bg-emerald-800 px-6 py-4 text-center font-bold text-white transition hover:bg-emerald-900"
          >
            Voir le site officiel ↗
          </a>
          <p className="mt-3 text-center text-xs text-slate-500">
            Nous ne vendons pas de formation : vous êtes redirigé vers l’organisme.
          </p>
        </aside>
      </section>

      {similar.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 text-3xl font-black">Dans le même domaine</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {similar.map((c) => (
              <CertificationCard key={c.slug} certification={c} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7">
      <h2 className="mb-4 text-xl font-black">{title}</h2>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-700">
            <span className="mt-2 size-2 shrink-0 rounded-full bg-emerald-700" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
