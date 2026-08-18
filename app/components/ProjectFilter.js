"use client";

export default function ProjectFilter({
  category,
  setCategory,
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <label
        htmlFor="project-category"
        className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-600"
      >
        Filter
      </label>

      <select
        id="project-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="cursor-pointer rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm font-medium text-zinc-300 outline-none transition-all duration-200 hover:border-zinc-700 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700"
      >
        <option value="All">All</option>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="Docker">Docker</option>
        <option value="Spring Boot">Spring Boot</option>
        <option value="Oracle">Oracle</option>
        <option value="REST APIs">REST APIs</option>
      </select>

      <span className="text-xs text-zinc-600">
        {category === "All"
          ? "Showing all real projects"
          : `Showing ${category} projects`}
      </span>
    </div>
  );
}