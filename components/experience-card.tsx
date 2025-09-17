import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Props = {
  company: string
  role: string
  period: string
  summary: string
  tags: string[]
  className?: string
  location?: string
  points?: string[]
}

export function ExperienceCard({ company, role, period, summary, tags, className, location, points }: Props) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-slate-800 bg-neutral-900/40 p-6 md:p-8",
        "shadow-[inset_0_1px_0_0_rgba(168,85,247,0.25)]",
        "transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_12px_40px_-12px_rgba(167,139,250,0.25)]",
        className,
      )}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
        <div>
          <h3 className="text-2xl font-semibold text-slate-100">{role}</h3>
          <p className="text-slate-400">
            {company}
            {location ? ` • ${location}` : ""}
          </p>
        </div>
        <p className="text-sm text-slate-400">{period}</p>
      </div>

      <p className="mt-4 text-slate-300 leading-relaxed">{summary}</p>

      {points && points.length > 0 ? (
        <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-300">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Badge
            key={t}
            variant="outline"
            className="rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30"
          >
            {t}
          </Badge>
        ))}
      </div>
    </article>
  )
}
