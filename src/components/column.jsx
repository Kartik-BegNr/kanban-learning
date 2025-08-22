export default function Column({ title }) {
  return (
    <section
      style={{
        background: "#f9fafb",
        padding: "1rem",
        borderRadius: "12px",
        border: "1px solid #e5e7eb",
        minHeight: "200px",
      }}
    >
      <h2 style={{ fontWeight: "bold", marginBottom: "1rem" }}>{title}</h2>
      {/* tasks will go here later */}
    </section>
  );
}
