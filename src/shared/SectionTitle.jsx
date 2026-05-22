export default function SectionTitle({ title, dark }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-1 h-6 bg-orange-600" />
      <h2
        className={`text-xl md:text-2xl font-black tracking-widest uppercase ${
          dark ? "text-white" : "text-gray-900"
        }`}
        style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", letterSpacing: "0.12em" }}
      >
        {title}
      </h2>
    </div>
  );
}