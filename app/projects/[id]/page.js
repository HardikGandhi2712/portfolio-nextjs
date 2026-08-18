import Link from "next/link";
import { notFound } from "next/navigation";
import { realProjects } from "../../data";

async function getApiProject(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function ProjectDetails({ params, searchParams }) {
  const { id } = await params;
  const { source } = await searchParams;

  let project;

  /*
   * Real portfolio project
   */
  if (source === "real") {
    project = realProjects.find(
      (item) => String(item.id) === String(id)
    );
  }

  /*
   * Simulated API project
   */
  else {
    project = await getApiProject(id);
  }

  if (!project) {
    notFound();
  }

  const isRealProject = source === "real";

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Header */}
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-16">

          {/* Back */}
          <Link
            href="/projects"
            className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors duration-200 hover:text-white"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>

            Back to Projects
          </Link>

          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-600" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
              {isRealProject ? "Portfolio Project" : "API Project"}
            </span>
          </div>

          {/* Title */}
          <div className="mt-7 max-w-4xl">

            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              {project.body}
            </p>

          </div>

        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">

          {/* Overview */}
          <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-7 sm:p-10">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              Project Overview
            </p>

            <p className="mt-8 text-base leading-8 text-zinc-400 sm:text-lg">
              {project.body}
            </p>

            {/* Technologies */}
            {isRealProject && project.categories?.length > 0 && (
              <div className="mt-10 border-t border-zinc-900 pt-8">

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
                  Technologies
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-md border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-400"
                    >
                      {category}
                    </span>
                  ))}
                </div>

              </div>
            )}

          </article>

          {/* Details */}
          <aside className="h-fit rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-6">

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              Details
            </p>

            <div className="mt-7 space-y-6">

              {/* ID */}
              <div>
                <p className="text-xs text-zinc-600">
                  Project ID
                </p>

                <p className="mt-2 font-mono text-sm text-zinc-300">
                  {id}
                </p>
              </div>

              {/* Source */}
              <div>
                <p className="text-xs text-zinc-600">
                  Source
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                  {isRealProject
                    ? "Real Portfolio Data"
                    : "JSONPlaceholder API"}
                </p>
              </div>

              {/* Rendering */}
              <div>
                <p className="text-xs text-zinc-600">
                  Rendering
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                  Server-Side Rendered
                </p>
              </div>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
}