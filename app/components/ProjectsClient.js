"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

export default function ProjectsClient({ apiProjects, realProjects }) {
  const [showRealData, setShowRealData] = useState(false);
  const [category, setCategory] = useState("All");

  const filteredRealProjects = useMemo(() => {
    if (category === "All") {
      return realProjects;
    }

    return realProjects.filter((project) =>
      project.categories?.includes(category)
    );
  }, [realProjects, category]);

  const currentProjects = showRealData
    ? filteredRealProjects
    : apiProjects;

  const handleDataSourceChange = () => {
    setShowRealData((current) => !current);
    setCategory("All");
  };

  return (
    <div>

      {/* Data Source Control */}
      <div className="mb-8 flex flex-col gap-5 rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-5 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
            Data Source
          </p>

          <div className="mt-2 flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                showRealData ? "bg-white" : "bg-zinc-600"
              }`}
            />

            <span className="text-sm font-medium text-zinc-300">
              {showRealData
                ? "Real Portfolio Data"
                : "External API / SSR Data"}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDataSourceChange}
          className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
        >
          {showRealData
            ? "Switch to API Data"
            : "View Real Projects"}
        </button>
      </div>

      {/* Real Project Filter */}
      {showRealData && (
        <div className="mb-8 flex flex-col gap-4 border-b border-zinc-900 pb-8 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-medium text-zinc-300">
              Filter real projects
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Explore projects by technology or domain.
            </p>
          </div>

          <ProjectFilter
            category={category}
            setCategory={setCategory}
          />

        </div>
      )}

      {/* Project Grid */}
      {currentProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.body}
              source={showRealData ? "real" : "api"}
              categories={showRealData ? project.categories : []}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/40 px-6 py-16 text-center">
          <p className="text-sm font-medium text-zinc-400">
            No projects found
          </p>

          <p className="mt-2 text-xs text-zinc-600">
            Try selecting a different technology.
          </p>
        </div>
      )}

    </div>
  );
}