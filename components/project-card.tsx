import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

type Props = {
  title: string
  description: string
  tags: string[]
  href?: string
}

export function ProjectCard({ title, description, tags, href }: Props) {
  const content = (
    <Card className="group border-slate-800 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_12px_40px_-12px_rgba(167,139,250,0.25)] focus-within:ring-2 focus-within:ring-cyan-400/40">
      <CardHeader>
        <CardTitle className="text-slate-100">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-300 leading-relaxed">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Badge key={t} variant="outline" className="rounded-full bg-neutral-800 text-slate-300 border-slate-700">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noreferrer" aria-label={`${title} - external link`}>
        {content}
      </Link>
    )
  }
  return content
}
