import React from "react";
import { TbBrandGithub, TbExternalLink, TbLock } from "react-icons/tb";

import { CTA, IconBadge, PageHeader } from "../components";
import useVanta from "../hooks/useVanta";
import { intros, projects } from "../constants";

const ProjectLink = ({ href, Icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1.5 font-semibold text-orange-600 text-lg lg:hover:text-orange-400 transition-colors"
  >
    <Icon className="w-5 h-5" aria-hidden="true" />
    {children}
  </a>
);

const Projects = () => {
  const vantaRef = useVanta(() => import("vanta/dist/vanta.globe.min"), {
    minHeight: 200.0,
    minWidth: 200.0,
    color: 0xea580c,
    backgroundColor: 0x1b1212,
    minDistance: 15.0,
  });

  return (
    <section ref={vantaRef} className="fixed inset-0 z-0 page-backdrop">
      <div className="relative w-full h-full overflow-y-auto">
        <div className="max-container absolute inset-0">
          <PageHeader title="Projects" intro={intros.projects} />
          <ul className="grid grid-cols-1 lg:grid-cols-2 my-12 gap-8">
            {projects.map((project) => (
              <li key={project.name} className="card">
                <div className="flex items-start gap-4">
                  <IconBadge Icon={project.Icon} />
                  <div>
                    <h2 className="card-title">{project.name}</h2>
                    <p className="card-subtitle">{project.subtitle}</p>
                  </div>
                </div>
                <ul className="mt-4 list-disc ml-5 space-y-2 text-white text-base lg:text-lg">
                  {project.points.map((point) => (
                    <li key={point} className="pl-1">
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-auto pt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-5">
                  {project.source && (
                    <ProjectLink href={project.source} Icon={TbBrandGithub}>
                      Source
                    </ProjectLink>
                  )}
                  {project.live && (
                    <ProjectLink href={project.live} Icon={TbExternalLink}>
                      Live
                    </ProjectLink>
                  )}
                  {!project.source && !project.live && (
                    <span className="flex items-center gap-1.5 font-semibold text-white/70 text-lg">
                      <TbLock className="w-5 h-5" aria-hidden="true" />
                      Private
                    </span>
                  )}
                </div>
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

export default Projects;
