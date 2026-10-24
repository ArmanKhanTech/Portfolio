import React from "react";
import { TbExternalLink } from "react-icons/tb";

import IconBadge from "./IconBadge";

// A single-column timeline: a vertical rail with one card per entry.
// It stays inside the page width at every screen size.
const Timeline = ({ items }) => {
  return (
    <ol className="relative ml-6 border-l-2 border-orange-600/60 space-y-8">
      {items.map((item) => (
        <li key={`${item.title}-${item.date}`} className="relative pl-10">
          <span className="absolute -left-[25px] top-4">
            <IconBadge Icon={item.Icon} />
          </span>
          <article className="card">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-1 lg:gap-4">
              <div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-subtitle">{item.subtitle}</p>
              </div>
              <p className="text-white/80 font-medium lg:text-right shrink-0">
                {item.date}
              </p>
            </div>
            {item.highlight && (
              <p className="mt-3 text-white text-lg font-semibold">
                {item.highlight}
              </p>
            )}
            {item.points && (
              <ul className="mt-4 list-disc ml-5 space-y-2 text-white text-base lg:text-lg">
                {item.points.map((point) => (
                  <li key={point} className="pl-1">
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {item.link && (
              <a
                href={item.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 self-start flex items-center gap-1.5 font-semibold text-orange-600 lg:hover:text-orange-400 transition-colors"
              >
                <TbExternalLink className="w-5 h-5" aria-hidden="true" />
                {item.link.label}
              </a>
            )}
          </article>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
