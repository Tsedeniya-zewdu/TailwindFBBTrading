import SectionTitle from "../shared/SectionTitle";

export default function About({ dark }) {
  return (
    <section
      id="about"
      className={`py-20 ${dark ? "bg-gray-950" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Image */}
     <div className="relative w-full md:w-1/2">
  <div
    className={`absolute -inset-3 border ${
      dark ? "border-orange-700/40" : "border-orange-400/30"
    } translate-x-3 translate-y-3`}
  />
  <img
    src="/images/about.png"
    alt="About FBB Trading"
    className="relative w-full object-cover aspect-[4/3]"
  />
</div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <SectionTitle title="About Us" dark={dark} />
            <div className="mt-6 space-y-4">
              <p
                className={`text-sm leading-relaxed ${
                  dark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                We are a proud Ethiopian printing and trading company, bringing your ideas to life with high-quality, reliable, and creative solutions. From custom T-shirts and business cards to stamps, stationery, and branded materials, we deliver precise, durable, and professional prints that help your brand stand out.
              </p>
              <p
                className={`text-sm leading-relaxed ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                With modern technology and a skilled team, we focus on quality, speed, and tailored service—making your vision a reality while supporting local businesses every step of the way. Our facility in Addis Ababa is equipped with the latest lithographic and digital printing systems to ensure industrial precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}