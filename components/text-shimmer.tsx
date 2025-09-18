"use client"

import type React from "react"

import { cn } from "@/lib/utils"

export function TextShimmer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative inline-block", className)}>
      <div className="text-slate-100">{children}</div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]"
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}
