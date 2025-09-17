"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Section = { id: string; label: string }
type Props = { sections: readonly Section[] }

export function FloatingDock({ sections }: Props) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "")
  const observer = useRef<IntersectionObserver | null>(null)
  const ids = useMemo(() => sections.map((s) => s.id), [sections])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      {
        root: null,
        rootMargin: "0px 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )
    observer.current = io

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 pointer-events-none",
        "bottom-6 md:bottom-auto md:top-1/2 md:-translate-y-1/2",
      )}
      aria-label="Section navigation"
    >
      <nav
        role="navigation"
        className={cn(
          "pointer-events-auto rounded-full border",
          "border-slate-800 bg-neutral-900/70 backdrop-blur",
          "shadow-[0_0_0_1px_rgba(14,165,233,0.15),0_8px_30px_rgba(0,0,0,0.3)]",
          "px-2 py-1 md:px-3 md:py-2",
        )}
      >
        <ul className="flex items-center gap-1 md:gap-2">
          {sections.map((s) => {
            const isActive = s.id === active
            return (
              <li key={s.id}>
                <Button
                  size="sm"
                  variant="ghost"
                  aria-label={`Go to ${s.label}`}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 h-9 text-slate-200 hover:bg-neutral-800 transition-all",
                    isActive && "border border-cyan-400/50 bg-neutral-800/60 text-cyan-300",
                  )}
                  onClick={() => handleClick(s.id)}
                >
                  {s.label}
                </Button>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
