import React from "react";

import { CTA, IconBadge, PageHeader } from "../components";
import useVanta from "../hooks/useVanta";
import { intros, services } from "../constants";

const Services = () => {
  const vantaRef = useVanta(() => import("vanta/dist/vanta.dots.min"), {
    minHeight: 200.0,
    minWidth: 200.0,
    size: 5.0,
    spacing: 40.0,
    color: 0xea580c,
    color2: 0xdc2626,
    backgroundColor: 0x1b1212,
    showLines: false,
  });

  return (
    <section ref={vantaRef} className="fixed inset-0 z-0 bg-[#1b1212]">
      <div className="relative w-full h-full overflow-y-auto">
        <div className="max-container absolute inset-0">
          <PageHeader title="Services" intro={intros.services} />
          <ul className="grid grid-cols-1 lg:grid-cols-2 my-12 gap-8">
            {services.map((service) => (
              <li key={service.name} className="card">
                <div className="flex items-center gap-4">
                  <IconBadge Icon={service.Icon} />
                  <h2 className="card-title">{service.name}</h2>
                </div>
                <p className="mt-4 text-white text-base lg:text-lg">
                  {service.description}
                </p>
                <ul className="mt-auto pt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <hr className="border-slate-200" />
          <CTA />
          <hr className="h-2 border-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Services;
