import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Hero */}
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden border-b border-zinc-900">

        {/* Ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl items-center px-6 py-24">
          <div className="max-w-4xl">

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-zinc-600" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
                Software Developer
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
              Building backend systems
              <span className="block text-zinc-500">
                that solve real problems.
              </span>
            </h1>

            {/* Summary */}
            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Software Developer with experience building backend systems
              using Java, Spring Boot, and REST APIs. Worked on
              enterprise-grade e-invoicing, payment integrations, and
              government compliance systems.
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-3">

              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-zinc-200"
              >
                View Projects

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/experience"
                className="inline-flex items-center rounded-lg border border-zinc-800 bg-zinc-950 px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
              >
                View Experience
              </Link>

            </div>

            {/* Core stack */}
            <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-zinc-900 pt-6">

              <span className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                Core stack
              </span>

              <span className="text-sm text-zinc-500">
                Java
              </span>

              <span className="text-zinc-800">
                /
              </span>

              <span className="text-sm text-zinc-500">
                Spring Boot
              </span>

              <span className="text-zinc-800">
                /
              </span>

              <span className="text-sm text-zinc-500">
                REST APIs
              </span>

              <span className="text-zinc-800">
                /
              </span>

              <span className="text-sm text-zinc-500">
                Oracle
              </span>

            </div>

          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-4 sm:grid-cols-3">

          <Link
            href="/experience"
            className="group rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/60"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              01
            </p>

            <h2 className="mt-5 text-lg font-semibold text-white">
              Experience
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Backend engineering experience across enterprise systems,
              integrations, and e-invoicing.
            </p>

            <span className="mt-6 inline-block text-sm text-zinc-600 transition-colors group-hover:text-zinc-300">
              Explore →
            </span>
          </Link>

          <Link
            href="/skills"
            className="group rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/60"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              02
            </p>

            <h2 className="mt-5 text-lg font-semibold text-white">
              Skills
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Java, Spring Boot, REST APIs, SQL, databases, Docker, and
              enterprise tooling.
            </p>

            <span className="mt-6 inline-block text-sm text-zinc-600 transition-colors group-hover:text-zinc-300">
              Explore →
            </span>
          </Link>

          <Link
            href="/contact"
            className="group rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/60"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              03
            </p>

            <h2 className="mt-5 text-lg font-semibold text-white">
              Get in touch
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Connect through email, GitHub, or LinkedIn.
            </p>

            <span className="mt-6 inline-block text-sm text-zinc-600 transition-colors group-hover:text-zinc-300">
              Contact →
            </span>
          </Link>

        </div>

      </section>

    </main>
  );
}