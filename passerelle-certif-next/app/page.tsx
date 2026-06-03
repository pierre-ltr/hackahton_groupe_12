const trustedOrganizations = ["CAPEB", "FFB", "Qualibat", "Constructys", "CACES", "UNEP"];

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

const certifications = [
  {
    domain: "BTP",
    title: "CAP Maçon",
    description:
      "Certification reconnue pour apprendre les bases de la maçonnerie, du gros œuvre et des chantiers.",
    tags: ["Niveau 3", "12 mois", "CPF"],
    letter: "B",
  },
  {
    domain: "Paysage",
    title: "CAPA Jardinier Paysagiste",
    description:
      "Parcours adapté aux métiers de l’entretien et de l’aménagement des espaces verts.",
    tags: ["Niveau 3", "Alternance", "Reconversion"],
    letter: "P",
  },
  {
    domain: "Chantier",
    title: "CACES R482 Cat. A",
    description:
      "Certification permettant de conduire des engins de chantier en sécurité.",
    tags: ["Certificat", "3 à 5 jours", "Employabilité"],
    letter: "C",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8faf8] text-slate-950">
      <Navbar />
      <Hero />
      <IntroBtp />
      <Features />
      <Certifications />
      <Mission />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="sticky top-4 z-20 mx-auto mt-5 flex w-[92%] max-w-6xl items-center justify-between rounded-3xl border border-slate-200 bg-white/85 px-5 py-4 shadow-sm backdrop-blur">
      <div className="flex items-center gap-3 font-extrabold">
        <span className="grid size-9 place-items-center rounded-xl bg-emerald-800 text-white">
          P
        </span>
        <span>Passerelle Certif</span>
      </div>

      <nav className="hidden gap-7 text-sm font-semibold text-slate-700 md:flex">
        <a href="#accueil" className="hover:text-emerald-800">Accueil</a>
        <a href="#parcours" className="hover:text-emerald-800">Parcours</a>
        <a href="#certifications" className="hover:text-emerald-800">Certifications</a>
        <a href="#mission" className="hover:text-emerald-800">Mission</a>
      </nav>

      <a
        href="#certifications"
        className="rounded-2xl bg-emerald-800 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-900"
      >
        Explorer
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="accueil"
      className="mx-auto grid w-[92%] max-w-6xl items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div>
        <p className="mb-4 font-bold text-emerald-800">
          La passerelle vers les certifications reconnues
        </p>

        <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.04em] md:text-7xl">
          Trouvez la certification qui correspond à vos objectifs.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Nous ne vendons pas de formations. Nous rendons les certifications
          existantes plus accessibles, lisibles et fiables pour réduire les
          inégalités de chances.
        </p>

        <div className="mt-8 flex max-w-2xl flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/70 sm:flex-row">
          <input
            className="flex-1 rounded-2xl px-5 py-4 outline-none"
            placeholder="Ex : Maçon, paysagiste, coach sportif..."
          />
          <button className="rounded-2xl bg-emerald-800 px-7 py-4 font-bold text-white transition hover:bg-emerald-900">
            Rechercher
          </button>
        </div>

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
          <Step active text="1. Trouver une certification" />
          <Step text="2. Comparer les parcours" />
          <Step text="3. Accéder au site officiel" />
        </div>

        <div className="absolute bottom-0 right-0 rounded-3xl bg-emerald-950 px-7 py-5 text-white shadow-2xl shadow-emerald-950/20">
          <span className="block text-sm text-emerald-100">Certification reconnue</span>
          <strong className="text-lg">CAP Maçon</strong>
        </div>
      </div>
    </section>
  );
}

function Step({ text, active = false }: { text: string; active?: boolean }) {
  return (
    <div
      className={`mb-4 rounded-2xl border p-5 font-semibold ${
        active
          ? "border-emerald-100 bg-emerald-50 text-emerald-950"
          : "border-slate-200 bg-white text-slate-500"
      }`}
    >
      {text}
    </div>
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
    <section
      id="parcours"
      className="mx-auto grid w-[92%] max-w-6xl gap-5 py-16 sm:grid-cols-2 lg:grid-cols-4"
    >
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

function Certifications() {
  return (
    <section id="certifications" className="mx-auto w-[92%] max-w-6xl py-10">
      <div className="mb-8">
        <span className="mb-2 block font-black tracking-[0.2em] text-emerald-800">02</span>
        <h2 className="text-4xl font-black tracking-tight">Certifications populaires</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {certifications.map((certification) => (
          <article
            key={certification.title}
            className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
          >
            <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-emerald-50 text-2xl font-black text-emerald-800">
              {certification.letter}
            </div>

            <p className="text-sm font-black uppercase text-emerald-800">
              {certification.domain}
            </p>
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

            <a href="#" className="mt-6 inline-block font-black text-emerald-800">
              Voir le site officiel →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section
      id="mission"
      className="mx-auto my-16 grid w-[92%] max-w-6xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-10 md:grid-cols-[1fr_1fr]"
    >
      <div>
        <span className="mb-2 block font-black tracking-[0.2em] text-emerald-800">03</span>
        <h2 className="text-4xl font-black tracking-tight">Notre mission</h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Faciliter l’accès aux certifications professionnelles grâce à une
          plateforme intelligente qui guide chaque utilisateur vers les parcours
          les plus adaptés à ses ambitions.
        </p>
      </div>

      <div className="grid gap-4">
        <MissionPoint
          title="Pas de vente"
          text="Nous faisons la passerelle vers les certifications officielles."
        />
        <MissionPoint
          title="Sources fiables"
          text="Nous mettons en avant des organismes reconnus."
        />
        <MissionPoint
          title="Égalité des chances"
          text="Les compétences avant le réseau ou le parcours scolaire."
        />
      </div>
    </section>
  );
}

function MissionPoint({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-emerald-50 p-6">
      <strong className="block text-emerald-950">{title}</strong>
      <span className="text-slate-600">{text}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mx-auto w-[92%] max-w-6xl pb-10 text-center text-slate-500">
      Passerelle Certif — Projet Hackathon Groupe 12
    </footer>
  );
}
