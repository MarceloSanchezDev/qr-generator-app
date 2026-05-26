function SectionCard({ children, className = "" }) {
  return (
    <section
      className={`rounded-xl border border-slate-200 bg-white p-6 ambient-shadow ${className}`}
    >
      {children}
    </section>
  );
}

export default SectionCard;