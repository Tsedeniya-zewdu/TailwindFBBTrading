import { useState } from "react";
import SectionTitle from "../shared/SectionTitle";
import { IconChevron } from "../shared/Icons";

const workImages = [
  "/images/workitem1.png",
  "/images/workitem2.png",
  "/images/workitem3.png",
];

export default function Works({ dark }) {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(workImages.length / perPage);
  const visible = workImages.slice(page * perPage, page * perPage + perPage);

  return (
    <section
      id="works"
      className={`py-20 ${dark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <SectionTitle title="Our Works" dark={dark} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {visible.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden aspect-[4/3] group cursor-pointer"
            >
              <img
                src={src}
                alt={`Work ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-8 h-8 text-xs font-bold border transition-colors ${
                page === i
                  ? "bg-orange-600 border-orange-600 text-white"
                  : dark
                  ? "border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-400"
                  : "border-gray-300 text-gray-500 hover:border-orange-500 hover:text-orange-500"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(p + 1, pages - 1))}
            className={`w-8 h-8 flex items-center justify-center border transition-colors ${
              dark
                ? "border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-400"
                : "border-gray-300 text-gray-500 hover:border-orange-500 hover:text-orange-500"
            }`}
          >
            <IconChevron />
          </button>
        </div>
      </div>
    </section>
  );
}