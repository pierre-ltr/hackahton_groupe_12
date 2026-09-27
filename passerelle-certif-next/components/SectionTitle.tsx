export default function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-8">
      <span className="mb-2 block font-black tracking-[0.2em] text-emerald-800">{number}</span>
      <h2 className="text-4xl font-black tracking-tight">{title}</h2>
    </div>
  );
}
