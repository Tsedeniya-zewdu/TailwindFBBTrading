import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Works from "./components/Works";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { dark, toggle } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        dark ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar dark={dark} toggleTheme={toggle} />
      <Hero dark={dark} />
      <Services dark={dark} />
      <Works dark={dark} />
      <About dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}