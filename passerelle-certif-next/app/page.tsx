import Link from "next/link";
import CertificationCard from "@/components/CertificationCard";
import SearchBar from "@/components/SearchBar";
import SectionTitle from "@/components/SectionTitle";
import { certifications, trustedOrganizations } from "@/lib/data";

const features = [
  {
    title: "Recherche simple",
    text: "L’utilisateur cherche un métier, une compétence ou un domaine professionnel.",
  },
  {
    title: "Parcours guidés",
    text: "La plateforme l’aide à identifier les certifications adaptées à son niveau et à ses objectifs.",
  },
  {
    title: "Informations claires",
    text: "Chaque certification présente la durée, le niveau, l’organisme, les compétences et les débouchés.",
  },
  {
    title: "Passerelle officielle",
    text: "Nous redirigeons vers les organismes reconnus : nous ne vendons pas de formations.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <IntroBtp />
      <Features />
      <Popular />
      <CallToAction />
    </>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid w-[92%] max-w-6xl items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="mb-4 font-bold text-emerald-800">
          La passerelle vers les certifications reconnues
        </p>

        <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] md:text-7xl">
          Trouvez la certification qui correspond à vos objectifs.
        </h1>

        <p className="mt-6 mb-8 max-w-2xl text-lg leading-8 text-slate-600">
          Nous ne vendons pas de formations. Nous rendons les certifications
          existantes plus accessibles, lisibles et fiables pour réduire les
          inégalités de chances.
        </p>

        <SearchBar />

        <div className="mt-8">
          <p className="mb-3 text-sm text-slate-500">
            Exemples d’organismes fiables et reconnus
          </p>
          <div className="flex flex-wrap gap-3">
            {trustedOrganizations.map((organization) => (
              <span
                key={organization}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 font-extrabold text-emerald-900"
              >
                {organization}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative min-h-[380px]">
        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200">
          <h2 className="mb-7 text-3xl font-black">Votre parcours</h2>
          <Step href="/certifications" active text="1. Trouver une certification" />
          <Step href="/parcours" text="2. Comparer les parcours" />
          <Step href="/certifications/cap-macon" text="3. Accéder au site officiel" />
        </div>

        <Link
          href="/certifications/cap-macon"
          className="absolute bottom-0 right-0 rounded-3xl bg-emerald-950 px-7 py-5 text-white shadow-2xl shadow-emerald-950/20 transition hover:bg-emerald-900"
        >
          <span className="block text-sm text-emerald-100">Certification reconnue</span>
          <strong className="text-lg">CAP Maçon</strong>
        </Link>
      </div>
    </section>
  );
}

function Step({ text, href, active = false }: { text: string; href: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`mb-4 block rounded-2xl border p-5 font-semibold transition hover:border-emerald-300 ${
        active
          ? "border-emerald-100 bg-emerald-50 text-emerald-950"
          : "border-slate-200 bg-white text-slate-500"
      }`}
    >
      {text}
    </Link>
  );
}

function IntroBtp() {
  return (
    <section className="mx-auto grid w-[92%] max-w-6xl gap-8 rounded-[2rem] bg-emerald-950 p-10 text-white md:grid-cols-[0.8fr_1.2fr]">
      <div>
        <span className="mb-2 block font-black tracking-[0.2em] text-emerald-200">01</span>
        <h2 className="text-4xl font-black tracking-tight">Notre point de départ : le BTP</h2>
      </div>

      <p className="text-lg leading-8 text-emerald-50/85">
        Le BTP regroupe de nombreux métiers accessibles, concrets et essentiels.
        Pourtant, les certifications sont souvent dispersées et peu lisibles
        pour les jeunes, les autodidactes ou les personnes en reconversion.
      </p>
    </section>
  );
}

function Features() {
  return (
    <section className="mx-auto grid w-[92%] max-w-6xl gap-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <article
          key={feature.title}
          className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
        >
          <span className="mb-5 grid size-10 place-items-center rounded-full bg-emerald-800 font-black text-white">
            {index + 1}
          </span>
          <h3 className="mb-3 text-xl font-black">{feature.title}</h3>
          <p className="leading-7 text-slate-600">{feature.text}</p>
        </article>
      ))}
    </section>
  );
}

function Popular() {
  return (
    <section className="mx-auto w-[92%] max-w-6xl py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionTitle number="02" title="Certifications populaires" />
        <Link href="/certifications" className="mb-8 font-black text-emerald-800 hover:underline">
          Tout voir →
        </Link>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {certifications.slice(0, 3).map((certification) => (
          <CertificationCard key={certification.slug} certification={certification} />
        ))}
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="mx-auto my-16 flex w-[92%] max-w-6xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-slate-200 bg-white p-10 md:flex-row md:items-center">
      <div>
        <span className="mb-2 block font-black tracking-[0.2em] text-emerald-800">03</span>
        <h2 className="text-4xl font-black tracking-tight">Vous ne savez pas par où commencer ?</h2>
        <p className="mt-3 text-lg text-slate-600">
          Choisissez votre profil, on vous montre les certifications adaptées.
        </p>
      </div>
      <Link
        href="/parcours"
        className="shrink-0 rounded-2xl bg-emerald-800 px-7 py-4 font-bold text-white transition hover:bg-emerald-900"
      >
        Trouver mon parcours
      </Link>
    </section>
  );
}
