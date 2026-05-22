export default function Footer({ dark }) {
  return (
    <footer
      className={`py-6 border-t ${
        dark ? "bg-gray-950 border-gray-800" : "bg-gray-50 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <span
          className={`font-black text-sm tracking-widest uppercase ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}
          style={{ fontFamily: "'Bebas Neue','Impact',sans-serif", letterSpacing: "0.18em" }}
        >
          <span className="text-orange-500">FBB</span> TRADING
        </span>
        <p className={`text-xs ${dark ? "text-gray-600" : "text-gray-400"}`}>
          © 2024 FBB TRADING. INDUSTRIAL PRECISION, MODERN CRAFTSMANSHIP
        </p>
        <div className="flex items-center gap-4">
          {["Privacy Policy", "Terms of Service", "FAQ"].map((l) => (
            <button
              key={l}
              className={`text-xs transition-colors hover:text-orange-500 ${
                dark ? "text-gray-600" : "text-gray-400"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}