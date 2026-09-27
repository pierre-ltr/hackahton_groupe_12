import Link from "next/link";
import type { Certification } from "@/lib/data";

export default function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <Link
      href={`/certifications/${certification.slug}`}
      className="group flex flex-col rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
    >
      <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-emerald-50 text-2xl font-black text-emerald-800">
        {certification.letter}
      </div>

      <p className="text-sm font-black uppercase text-emerald-800">{certification.domain}</p>
      <h3 className="mt-1 text-2xl font-black">{certification.title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{certification.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {certification.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-950"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-auto pt-6 font-black text-emerald-800 group-hover:underline">
        Voir la fiche →
      </span>
    </Link>
  );
}
