import type { Metadata } from "next";
import Link from "next/link";
import CertificationCard from "@/components/CertificationCard";
import SearchBar from "@/components/SearchBar";
import { domains, profils, searchCertifications, type Profil } from "@/lib/data";

export const metadata: Metadata = { title: "Certifications" };

type Params = { q?: string; domaine?: string; profil?: string };

function buildHref(current: Params, changes: Params) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries({ ...current, ...changes })) {
    if (value) params.set(key, value);
  }
  const query = params.toString();
  return query ? `/certifications?${query}` : "/certifications";
}

export default async function CertificationsPage({
  searchParams,
}: {
  searchParams: Promise<Params>;
}) {
  const current = await searchParams;
  const results = searchCertifications({
    q: current.q,
    domain: current.domaine,
    profil: current.profil,
  });
  const profil = current.profil && profils[current.profil as Profil];

  return (
    <section className="mx-auto w-[92%] max-w-6xl py-16">
      <p className="mb-3 font-bold text-emerald-800">Catalogue</p>
      <h1 className="text-5xl font-black tracking-[-0.03em]">Toutes les certifications</h1>
      <p className="mt-4 mb-8 max-w-2xl text-lg text-slate-600">
        Des certifications reconnues, présentées simplement, avec un lien direct vers
        l’organisme officiel.
      </p>

      <SearchBar key={current.q} defaultValue={current.q} />

      <div className="mt-8 flex flex-wrap gap-2">
        <FilterChip href={buildHref(current, { domaine: undefined })} active={!current.domaine}>
          Tous les domaines
        </FilterChip>
        {domains.map((domain) => (
          <FilterChip
            key={domain}
            href={buildHref(current, { domaine: domain })}
            active={current.domaine === domain}
          >
            {domain}
          </FilterChip>
        ))}
      </div>

      {profil && (
        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl bg-emerald-50 px-5 py-4 text-emerald-950">
          <span>
            Profil : <strong>{profil.title}</strong>
          </span>
          <Link
            href={buildHref(current, { profil: undefined })}
            className="text-sm font-bold text-emerald-800 hover:underline"
          >
            Retirer ✕
          </Link>
        </div>
      )}

      <p className="mt-8 mb-5 text-sm font-semibold text-slate-500">
        {results.length} certification{results.length > 1 ? "s" : ""} trouvée
        {results.length > 1 ? "s" : ""}
        {current.q ? ` pour « ${current.q} »` : ""}
      </p>

      {results.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {results.map((certification) => (
            <CertificationCard key={certification.slug} certification={certification} />
          ))}
        </div>
      ) : (
        <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="text-lg font-bold">Aucune certification ne correspond.</p>
          <Link
            href="/certifications"
            className="mt-4 inline-block font-black text-emerald-800 hover:underline"
          >
            Réinitialiser la recherche
          </Link>
        </div>
      )}
    </section>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full px-4 py-2 text-sm font-bold transition ${
        active
          ? "bg-emerald-800 text-white"
          : "border border-slate-200 bg-white text-slate-700 hover:border-emerald-300"
      }`}
    >
      {children}
    </Link>
  );
}
