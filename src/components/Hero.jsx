export default function  Hero({ dark }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pb-24 overflow-hidden"
    >
      {/* Background image */}
     <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url('/images/HeroSection.png')`,
  }}
/>
      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-gradient-to-b from-gray-950/60 via-gray-950/40 to-gray-950/90"
            : "bg-gradient-to-b from-white/40 via-white/20 to-white/70"
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 w-full">
        <div className="max-w-xl">
          <p
            className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-3"
          >
            Quality Printing Services
          </p>
          <h1
            className={`text-5xl md:text-7xl font-black uppercase leading-none mb-4 ${
              dark ? "text-white" : "text-gray-900"
            }`}
            style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", letterSpacing: "0.05em" }}
          >
            FBB TRADING
          </h1>
          <p
            className={`text-sm md:text-base leading-relaxed mb-8 max-w-sm ${
              dark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            High-Quality Printing Services for Your Business. Precision craftsmanship meets modern industrial technology.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold tracking-[0.2em] uppercase px-8 py-3 transition-all hover:scale-105"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}