import { IconEmail, IconPhone, IconQuestion, IconTelegram } from "../shared/Icons";
import SectionTitle from "../shared/SectionTitle";

export default function Contact({ dark }) {
  return (
    <section
      id="contact"
      className={`py-20 ${dark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Contact Info */}
          <div className="w-full md:w-2/5">
            <div className="flex items-center gap-3 mb-8">
              <SectionTitle title="Contact Us" dark={dark} />
              <IconQuestion />
            </div>

            <div className="space-y-6">
              <ContactItem
                icon={<IconPhone />}
                label="Phone Numbers"
                lines={["09-11-11-11-11", "09-21-20-20-11"]}
                dark={dark}
              />
              <ContactItem
                icon={<IconTelegram />}
                label="Telegram Handle"
                lines={["@fbb.telegram.my"]}
                dark={dark}
              />
              <ContactItem
                icon={<IconEmail />}
                label="Email Address"
                lines={["contact@fbbtrading.com"]}
                dark={dark}
              />
            </div>
          </div>

          {/* Map */}
          <div className="w-full md:w-3/5">
            <SectionTitle title="Location" dark={dark} />
            <div className="mt-8 relative overflow-hidden">
              <div
                className={`relative rounded-sm overflow-hidden border ${
                  dark ? "border-gray-700" : "border-gray-200"
                }`}
                style={{ height: 300 }}
              >
                <iframe
                  title="Company Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=38.740%2C9.000%2C38.780%2C9.030&layer=mapnik&marker=9.015%2C38.760"
                  style={{ border: 0, width: "100%", height: "100%" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Label */}
                <div
                  className={`absolute bottom-3 left-3 px-3 py-2 text-xs ${
                    dark ? "bg-gray-950/90 text-gray-200" : "bg-white/90 text-gray-700"
                  }`}
                >
                  <p className="font-bold text-orange-500 text-xs mb-0.5">OUR OFFICE</p>
                  <p>Kazanchis Area, Business District</p>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, lines, dark }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`mt-1 p-2 ${
          dark ? "bg-gray-800 text-orange-400" : "bg-gray-100 text-orange-600"
        }`}
      >
        {icon}
      </span>
      <div>
        <p className={`text-xs font-bold tracking-wide mb-1 ${dark ? "text-gray-400" : "text-gray-500"}`}>
          {label}
        </p>
        {lines.map((l) => (
          <p key={l} className={`text-sm ${dark ? "text-gray-200" : "text-gray-700"}`}>
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}