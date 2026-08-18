import ProjectsClient from "../components/ProjectsClient";
import { realProjects } from "../data";

async function getApiProjects() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

export default async function ProjectsPage() {
  const apiPosts = await getApiProjects();
  const limitedApiPosts = apiPosts.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Page Header */}
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-600" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Portfolio
            </span>
          </div>

          <div className="mt-7 max-w-3xl">

            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              Projects
              <span className="text-zinc-500">
                {" "}that I've built.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              A collection of software projects and technical work spanning
              backend systems, APIs, data processing, enterprise integrations,
              and deployment.
            </p>

          </div>

        </div>
      </section>

      {/* Project Collection */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <ProjectsClient
          apiProjects={limitedApiPosts}
          realProjects={realProjects}
        />

      </section>

    </main>
  );
}