import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-md bg-[var(--brand)]" />
          <span className="font-bold">Uni Math</span>
        </div>
        <nav className="flex gap-6 text-sm text-slate-600">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/refunds">Refunds</Link>
        </nav>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Uni Math. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
