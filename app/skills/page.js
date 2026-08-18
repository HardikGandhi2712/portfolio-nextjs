import SkillCard from "../components/SkillCard";

const skills = [
  {
    title: "Languages",
    description: "Core programming languages",
    skills: ["Java", "SQL", "Python"],
    number: "01",
  },
  {
    title: "Backend",
    description: "Application & API development",
    skills: ["Spring Boot", "J2EE", "REST APIs"],
    number: "02",
  },
  {
    title: "Databases",
    description: "Data & database systems",
    skills: ["Oracle", "PL/SQL", "MySQL"],
    number: "03",
  },
  {
    title: "Tools & Domain",
    description: "Development & enterprise systems",
    skills: ["Git", "Maven", "Docker", "Payment Gateways"],
    number: "04",
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* Header */}
      <section className="border-b border-zinc-900">
        <div className="mx-auto max-w-6xl px-6 py-24">

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-zinc-600" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Technical Foundation
            </span>
          </div>

          <div className="mt-7 max-w-3xl">
            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              Skills
              <span className="text-zinc-500">
                {" "}I work with.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              A practical technical stack focused on backend engineering,
              enterprise applications, APIs, databases, integrations, and
              deployment.
            </p>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
            Technologies
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Technical Skills
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              description={category.description}
              skills={category.skills}
              number={category.number}
            />
          ))}
        </div>

      </section>

    </main>
  );
}