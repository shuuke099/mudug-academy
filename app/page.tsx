import Hero from "@/components/Hero";
import CourseGrid from "@/components/CourseGrid";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CourseGrid />

      {/* Empowering learners section */}
      <section className="mx-auto max-w-7xl px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left collage */}
        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-xl bg-[var(--brand)] text-white p-8 text-3xl font-extrabold leading-tight">
            We will help you to learn, grow and succeed
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow">
            <Image
              src="/tile1.jpg"
              alt="Student"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow col-span-2">
            <Image src="/tile2.jpg" alt="Class" fill className="object-cover" />
          </div>
        </div>

        {/* Right text */}
        <div className="space-y-6">
          <div className="text-sm tracking-widest font-semibold text-slate-600">
            EMPOWERING LEARNERS
          </div>
          <h3 className="text-5xl font-extrabold leading-tight">
            Get to know{" "}
            <span className="text-[var(--brand)]">driven by education</span>
          </h3>
          <p className="text-slate-600">
            Uni offers a wide range of online courses designed to empower
            learners worldwide. Our mission is to provide quality education that
            is accessible to everyone, regardless of their background.
          </p>
          <p className="text-slate-600">
            We focus on innovation, collaboration, and excellence to ensure that
            every learner achieves their goals and experiences a transformative
            educational journey.
          </p>
        </div>
      </section>
    </>
  );
}
