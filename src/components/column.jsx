export default function Column({ title, children }) {
  return (
    <section className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200 min-h-[200px]">
      <h2 className="font-semibold mb-3">{title}</h2>
      <div className="flex flex-col gap-3">
        {children}
      </div>
    </section>
  );
}
