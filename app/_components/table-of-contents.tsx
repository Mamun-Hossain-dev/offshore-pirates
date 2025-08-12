"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type Heading = { id: string; text: string }

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState<string | null>(headings[0]?.id ?? null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? -1 : 1))
        if (vis[0]?.target?.id) setActive(vis[0].target.id)
      },
      { rootMargin: "0px 0px -70% 0px", threshold: [0, 1.0] },
    )
    headings.forEach((h) => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  return (
    <nav aria-label="Table of contents" className="sticky top-[92px] border rounded-md p-3">
      <div className="text-sm font-semibold mb-2">On this page</div>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id}>
            <Link
              href={`#${h.id}`}
              className={cn("text-sm hover:underline", active === h.id ? "text-indigo-600" : "text-muted-foreground")}
            >
              {h.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
