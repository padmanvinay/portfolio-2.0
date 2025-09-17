"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type Section = { id: string; label: string }

const NAV_HEIGHT = 72 // keep in sync with app/page.tsx padding-top
const OFFSET = NAV_HEIGHT + 8

export function TopTabBar({ sections }: { sections: readonly Section[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      {
        rootMargin: `-${NAV_HEIGHT + 8}px 0px -40% 0px`,
        threshold: [0.2, 0.4, 0.6, 0.8],
      },
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - OFFSET
    window.scrollTo({ top: y, behavior: "smooth" })
    if (typeof history !== "undefined" && history.replaceState) {
      history.replaceState(null, "", `#${id}`)
    }
  }

  return (
    <div
      className="sticky top-0 z-50 border-b border-slate-800 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60"
      role="navigation"
      aria-label="Section Navigation"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-[72px] flex items-center justify-center">
          <ul className="flex items-center gap-2 md:gap-3">
            {sections.map((s) => {
              const isActive = active === s.id
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => scrollToId(s.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        scrollToId(s.id)
                      }
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "inline-flex items-center rounded-xl border px-3.5 py-2 text-sm md:text-base",
                      "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50",
                      "border-slate-800/80 text-slate-200 hover:bg-neutral-900",
                      isActive && "text-cyan-400 border-slate-700 bg-neutral-900 ring-1 ring-purple-500/30",
                    )}
                  >
                    {s.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
