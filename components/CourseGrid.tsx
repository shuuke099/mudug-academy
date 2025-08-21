import CourseCard from "./CourseCard";

export default function CourseGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-center text-4xl font-extrabold">
        We offer <span className="text-[var(--brand)]">online courses</span>
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CourseCard
          title="Introduction to UX design"
          minutes="20 minutes"
          author="Mark Thompson"
        />
        <CourseCard
          title="Intro to project management"
          minutes="8 hours"
          author="Mark Thompson"
        />
        <CourseCard
          title="Mobile app development"
          minutes="6 hours"
          author="Mark Thompson"
        />
        <CourseCard
          title="Mobile app development"
          minutes="6 hours"
          author="Mark Thompson"
        />
      </div>
      <div className="mt-10 flex justify-center">
        <a href="/pricing" className="btn btn-primary">
          Enroll Now
        </a>
      </div>
    </section>
  );
}
