export default function Experience() {
  const experience = [
    {
      role: "Software Developer",
      company: "Webtel Electrosoft Ltd",
      location: "New Delhi, India",
      period: "June 2025 — Present",
      current: true,
      points: [
        "Engineered secure Spring Boot middleware connecting enterprise systems with banking APIs, improving transaction processing reliability.",
        "Built a Spring Boot ZATCA e-invoicing backend processing 1,000+ daily B2B transactions, saving an estimated 20+ hours of manual processing daily.",
        "Designed and enhanced document extraction pipelines for structured data processing, streamlining enterprise workflows.",
        "Developed and maintained RESTful APIs for financial platform communication, including complex JSON/XML transformations for third-party integrations.",
        "Developed an Android application for warehouse stock counting using Java and XML, improving inventory tracking efficiency.",
        "Automated a secure backup system for a KSA-based firm, eliminating manual intervention time.",
      ],
    },
    {
      role: "Software Intern",
      company: "Webtel Electrosoft Ltd",
      location: "New Delhi, India",
      period: "January 2025 — April 2025",
      points: [
        "Developed a scalable PDF processing system to extract and store structured data, accelerating downstream data workflows.",
        "Improved system performance and reduced application downtime by optimizing database queries and implementing robust error tracking.",
        "Built a Java-based solution for JSON-to-XML transformation and secure SFTP file transfers, enhancing cross-system integration reliability.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Header */}
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-600" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Experience
            </span>
          </div>

          <div className="mt-7 max-w-3xl">
            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              Building experience
              <span className="text-zinc-500"> through real systems.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Backend-focused software development across enterprise
              integrations, financial systems, e-invoicing, data processing,
              and automation.
            </p>
          </div>

        </div>
      </section>

      {/* Work Experience */}
      <section className="mx-auto max-w-6xl px-6 py-24">

        <div className="mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
            Career
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Work Experience
          </h2>
        </div>

        <div className="relative">

          {/* Timeline */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-zinc-800" />

          <div className="space-y-16">

            {experience.map((job) => (
              <article
                key={`${job.role}-${job.period}`}
                className="relative pl-10"
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-zinc-700 bg-[#080808]">
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${
                      job.current ? "bg-white" : "bg-zinc-600"
                    }`}
                  />
                </div>

                <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-7 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-950">

                  {/* Job Header */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {job.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-zinc-400">
                        {job.company}

                        <span className="mx-2 text-zinc-700">
                          ·
                        </span>

                        {job.location}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">

                      {job.current && (
                        <span className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-300">
                          Current
                        </span>
                      )}

                      <span className="whitespace-nowrap text-xs font-medium text-zinc-600">
                        {job.period}
                      </span>

                    </div>

                  </div>

                  {/* Responsibilities */}
                  <ul className="mt-7 space-y-4">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-6 text-zinc-400"
                      >
                        <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-zinc-600" />

                        <span>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>
              </article>
            ))}

          </div>
        </div>

      </section>

      {/* Education */}
      <section className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
              Academic Background
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Education
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {/* Degree */}
            <div className="group rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-7 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-950">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
                    2022 — 2025
                  </p>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    BCA Hons. in Data Science
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Symbiosis Institute of Computer Studies and Research
                  </p>

                  <p className="text-sm text-zinc-600">
                    Pune, India
                  </p>
                </div>

                <div className="shrink-0 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-center">
                  <span className="block text-lg font-semibold text-white">
                    8.77
                  </span>

                  <span className="text-[9px] uppercase tracking-wider text-zinc-600">
                    CGPA
                  </span>
                </div>

              </div>

            </div>

            {/* School */}
            <div className="group rounded-2xl border border-zinc-800/80 bg-zinc-950/50 p-7 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-950">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600">
                    2021 — 2022
                  </p>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    12th Standard
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    DL DAV Model School
                  </p>

                  <p className="text-sm text-zinc-600">
                    Delhi, India
                  </p>
                </div>

                <div className="shrink-0 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-center">
                  <span className="block text-lg font-semibold text-white">
                    86%
                  </span>

                  <span className="text-[9px] uppercase tracking-wider text-zinc-600">
                    Score
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}