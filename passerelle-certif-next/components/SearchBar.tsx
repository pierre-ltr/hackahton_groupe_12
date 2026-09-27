import Form from "next/form";

export default function SearchBar({ defaultValue = "" }: { defaultValue?: string }) {
  return (
    <Form
      action="/certifications"
      className="flex max-w-2xl flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/70 sm:flex-row"
    >
      <input
        name="q"
        defaultValue={defaultValue}
        className="flex-1 rounded-2xl px-5 py-4 outline-none"
        placeholder="Ex : Maçon, paysagiste, électricien..."
      />
      <button
        type="submit"
        className="rounded-2xl bg-emerald-800 px-7 py-4 font-bold text-white transition hover:bg-emerald-900"
      >
        Rechercher
      </button>
    </Form>
  );
}
