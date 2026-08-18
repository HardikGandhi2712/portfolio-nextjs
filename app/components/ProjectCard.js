import Link from "next/link";

export default function ProjectCard({
  id,
  title,
  description,
  source,
  categories = [],
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/70">

      {/* Subtle hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.025] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex-1">

        {/* Meta */}
        <div className="mb-6 flex items-center justify-between">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            Project
          </span>

          <span className="font-mono text-xs text-zinc-700">
            {String(id).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold leading-6 tracking-tight text-white">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-4 text-sm leading-6 text-zinc-500">
          {description}
        </p>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-md border border-zinc-800 bg-zinc-900/70 px-2.5 py-1 text-[10px] font-medium text-zinc-500 transition-colors duration-200 group-hover:border-zinc-700 group-hover:text-zinc-400"
              >
                {category}
              </span>
            ))}
          </div>
        )}

      </div>

      {/* Footer */}
      <div className="relative mt-8 flex items-center justify-between border-t border-zinc-800/70 pt-4">

        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-700">
          {source === "real" ? "Real" : "API"}
        </span>

        <Link
          href={`/projects/${id}?source=${source}`}
          className="group/link inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 transition-colors duration-200 hover:text-white"
        >
          View Details

          <span className="transition-transform duration-200 group-hover/link:translate-x-1">
            →
          </span>
        </Link>

      </div>

    </article>
  );
}