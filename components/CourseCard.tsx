type Props = { title: string; minutes: string; author: string };

export default function CourseCard({ title, minutes, author }: Props) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-slate-200/60">
      <div className="h-48 bg-slate-200" />
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="text-sm text-slate-500">
          {minutes} • By {author}
        </div>
        <button className="mt-3 btn btn-outline w-full">Start Learning</button>
      </div>
    </div>
  );
}
