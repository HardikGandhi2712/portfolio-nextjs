import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/70 bg-[#080808]/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-6 px-6">

        {/* Brand */}
        <Link
          href="/"
          className="group shrink-0"
        >
          <div className="flex flex-col">
            <span className="text-[17px] font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-zinc-300">
              Hardik Gandhi
            </span>

            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
              Software Developer
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-all duration-200 hover:bg-zinc-900 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex shrink-0 items-center gap-2">

          {/* GitHub */}
          <a
            href="https://github.com/HardikGandhi2712/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-all duration-200 hover:bg-zinc-900 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[19px] w-[19px]"
            >
              <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hardik-gandhi-732a912b9/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-all duration-200 hover:bg-zinc-900 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[18px] w-[18px]"
            >
              <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.57V8.98h-3.57v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
            </svg>
          </a>

        </div>

      </div>

      {/* Mobile Navigation */}
      <div className="border-t border-zinc-900/80 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 scrollbar-none">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-lg px-3 py-2 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}