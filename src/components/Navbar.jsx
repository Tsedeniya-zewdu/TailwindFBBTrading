import { useEffect, useState } from "react";
import { IconMenu, IconMoon, IconSun, IconX } from "../shared/Icons";

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Services", id: "services" },
    { label: "Works", id: "works" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];
   return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? dark
            ? "bg-gray-950/95 backdrop-blur shadow-lg shadow-black/40"
            : "bg-white/95 backdrop-blur shadow-lg shadow-gray-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className={`font-black text-base tracking-widest uppercase ${
            dark ? "text-white" : "text-gray-900"
          }`}
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", letterSpacing: "0.18em" }}
        >
          <span className="text-orange-500">FBB</span>{" "}
          <span>TRADING</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-orange-500 ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${
              dark
                ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            title="Toggle theme"
          >
            {dark ? <IconSun /> : <IconMoon />}
          </button>

         

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-1 ${dark ? "text-white" : "text-gray-900"}`}
          >
            {menuOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`md:hidden border-t px-5 py-4 flex flex-col gap-3 ${
            dark ? "bg-gray-950 border-gray-800" : "bg-white border-gray-100"
          }`}
        >
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`text-left text-sm font-medium py-1 transition-colors hover:text-orange-500 ${
                dark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-2 bg-orange-600 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 w-fit"
          >
            Get Quote
          </button>
        </div>
      )}
    </nav>
  );
}