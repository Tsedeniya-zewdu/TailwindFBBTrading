import { IconBrand, IconDoc, IconSanitary, IconShirt, IconStamp, IconStationery } from "../shared/Icons";
import SectionTitle from "../shared/SectionTitle";

const services = [
  {
    icon: <IconShirt />,
    title: "T-Shirt & Apparel",
    desc: "Custom printing for T-shirts, caps, and branded apparel. Perfect for uniforms, corporate promotions, and large-scale events.",
    accent: "blue",
  },
  {
    icon: <IconSanitary />,
    title: "Sanitary Materials",
    desc: "Reliable supply of high-grade sanitary and hygiene products to keep professional offices and industrial workplaces clean.",
    accent: "orange",
  },
  {
    icon: <IconStamp />,
    title: "Stamp & Seal",
    desc: "High-quality official stamps and precision seals for businesses, non-profit organizations, and administrative institutions.",
    accent: "blue",
  },
  {
    icon: <IconStationery />,
    title: "Stationery Supply",
    desc: "Complete office stationery solutions to support daily business operations, schools, and institutional requirements.",
    accent: "orange",
  },
  {
    icon: <IconDoc />,
    title: "Document Printing",
    desc: "Professional bulk printing of books, brochures, receipts, invoices, and other essential business documentation.",
    accent: "blue",
  },
  {
    icon: <IconBrand />,
    title: "Branding Materials",
    desc: "Creative high-impact branding and promotional materials designed to help your modern business stand out professionally.",
    accent: "orange",
  },
];

function ServiceCard({ service, dark }) {
  const isBlue = service.accent === "blue";
  return (
    <div
      className={`rounded-sm overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${
        dark ? "shadow-lg shadow-black/30" : "shadow-md shadow-gray-200/60 border border-gray-100"
      }`}
    >
      {/* Header */}
      <div
        className={`px-5 py-4 flex items-center gap-3 ${
          isBlue
            ? dark
              ? "bg-blue-800"
              : "bg-blue-700"
            : dark
            ? "bg-orange-700"
            : "bg-orange-600"
        }`}
      >
        <span className="text-white opacity-90">{service.icon}</span>
        <h3 className="text-white font-bold text-sm tracking-wide">{service.title}</h3>
      </div>
      {/* Body */}
      <div
        className={`px-5 py-4 ${
          dark ? "bg-gray-900" : "bg-white"
        }`}
      >
        <p
          className={`text-xs leading-relaxed ${
            dark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {service.desc}
        </p>
      </div>
    </div>
  );
}

export default function Services({ dark }) {
  return (
    <section
      id="services"
      className={`py-20 ${dark ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <SectionTitle title="Our Services" dark={dark} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  );
}