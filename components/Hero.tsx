import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: heading */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            Master maths,
            <br />
            <span className="text-[var(--brand)]">speak the</span>
            <br />
            language of code,
            <br />
            create your future
          </h1>
          <p className="text-slate-600 max-w-xl">
            Short, focused math lessons taught by real tutors. From number sense
            to algebra and beyond.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/courses" className="btn btn-outline">
              Browse Courses
            </Link>
            <Link href="/pricing" className="btn btn-primary">
              Start Learning
            </Link>
          </div>
        </div>

        {/* Right: hero image with stat cards */}
        <div className="relative">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image src="/hero.jpg" alt="Mentor" fill className="object-cover" />
          </div>
          {/* Stats cards */}
          <div className="absolute -bottom-6 left-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-indigo-500 text-white px-6 py-5 shadow-md min-w-[180px]">
              <div className="text-sm opacity-80">Courses</div>
              <div className="text-4xl font-extrabold">120+</div>
            </div>
            <div className="rounded-xl bg-slate-900 text-white px-6 py-5 shadow-md min-w-[180px]">
              <div className="text-sm opacity-80">Teachers</div>
              <div className="text-4xl font-extrabold">60+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
