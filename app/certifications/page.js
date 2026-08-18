const certifications = [
  {
    provider: "HackerRank",
    certifications: ["SQL (Intermediate)", "Python"],
    year: "2024",
  },
  {
    provider: "Great Learning",
    certifications: ["Java Programming", "AI Basics"],
    year: "2023",
  },
  {
    provider: "HP Life",
    certifications: ["Data Science and Analytics"],
    year: "2023",
  },
];

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Header */}
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-600" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Credentials
            </span>
          </div>

          <div className="mt-7 max-w-3xl">
            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              Certifications
              <span className="text-zinc-500">
                {" "}and credentials.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              Certifications and technical credentials covering programming,
              databases, artificial intelligence, and data science.
            </p>
          </div>

        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
            Credentials
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Technical Certifications
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {certifications.map((certification, index) => (
            <article
              key={certification.provider}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/70"
            >
              <div className="relative">

                {/* Meta */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                    Certification
                  </span>

                  <span className="text-xs text-zinc-700">
                    {certification.year}
                  </span>
                </div>

                {/* Provider */}
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">
                  {certification.provider}
                </h3>

                {/* Certifications */}
                <div className="mt-5 space-y-2">
                  {certification.certifications.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-400 transition-colors duration-200 group-hover:border-zinc-700 group-hover:text-zinc-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Card number */}
                <div className="mt-7 flex justify-end">
                  <span className="font-mono text-xs text-zinc-800 transition-colors duration-300 group-hover:text-zinc-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

              </div>
            </article>
          ))}

        </div>

      </section>

    </main>
  );
}