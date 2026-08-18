export default function SkillCard({
  title,
  description,
  skills,
  number,
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/70">

      {/* Subtle hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/[0.025] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Card Number */}
      <div className="absolute right-6 top-6 text-xs font-medium tracking-wider text-zinc-800 transition-colors duration-300 group-hover:text-zinc-700">
        {number}
      </div>

      <div className="relative">

        {/* Heading */}
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-1 text-sm leading-6 text-zinc-600">
          {description}
        </p>

        {/* Skills */}
        <div className="mt-7 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-200 group-hover:border-zinc-700 group-hover:text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </article>
  );
}