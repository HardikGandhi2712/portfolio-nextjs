const contactLinks = [
  {
    label: "Email",
    value: "hardikgandhi2004@gmail.com",
    href: "mailto:hardikgandhi2004@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hardik-gandhi-732a912b9",
    href: "https://www.linkedin.com/in/hardik-gandhi-732a912b9/",
  },
  {
    label: "GitHub",
    value: "github.com/HardikGandhi2712",
    href: "https://github.com/HardikGandhi2712/",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Header */}
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-600" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Get in Touch
            </span>
          </div>

          <div className="mt-7 max-w-3xl">
            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              Let's connect
              <span className="text-zinc-500">
                {" "}and build something useful.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              Interested in backend engineering, enterprise systems,
              integrations, or collaborating on a project? Feel free to
              reach out through any of the channels below.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Links */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-4 md:grid-cols-3">

          {contactLinks.map((contact, index) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === "Email" ? undefined : "_blank"}
              rel={
                contact.label === "Email"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/70"
            >

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                  {contact.label}
                </span>

                <span className="font-mono text-xs text-zinc-800 transition-colors duration-300 group-hover:text-zinc-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-7 break-all text-sm font-medium text-zinc-400 transition-colors duration-200 group-hover:text-white">
                {contact.value}
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-zinc-600 transition-colors group-hover:text-zinc-400">
                Connect
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>

            </a>
          ))}

        </div>

      </section>

    </main>
  );
}