export default function Card({ title, description }) {
  return (
    <article
      className="rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow p-3"
      style={{ cursor: "default" }}
    >
      <h3 className="font-medium leading-tight">{title}</h3>
      {description && (
        <p className="text-sm text-zinc-600 mt-1">{description}</p>
      )}
    </article>
  );
}
