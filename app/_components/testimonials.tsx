"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

const testimonials = [
  {
    name: "Riley, VP Support",
    quote: "We cut response times by 45% and CSAT rose 20% in the first quarter.",
    company: "SaaSCo",
  },
  {
    name: "Morgan, COO",
    quote: "Back-office SLAs are finally predictable. Huge lift in accuracy.",
    company: "RetailerX",
  },
  { name: "Taylor, CFO", quote: "AR days outstanding dropped by 18% with clean reconciliations.", company: "FinServ" },
  {
    name: "Jamie, CX Lead",
    quote: "Global coverage without chaos. Seamless omnichannel delivery.",
    company: "MarketplaceY",
  },
]

export function Testimonials() {
  const scroller = useRef<HTMLDivElement>(null)
  const scrollBy = (dx: number) => {
    scroller.current?.scrollBy({ left: dx, behavior: "smooth" })
  }
  return (
    <div>
      <div className="flex justify-end gap-2 mb-3">
        <Button variant="outline" size="sm" onClick={() => scrollBy(-320)}>
          Prev
        </Button>
        <Button variant="outline" size="sm" onClick={() => scrollBy(320)}>
          Next
        </Button>
      </div>
      <div ref={scroller} className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
        {testimonials.map((t, i) => (
          <Card key={i} className="min-w-[320px] snap-start">
            <CardHeader className="text-indigo-700 font-semibold">{t.company}</CardHeader>
            <CardContent>
              <blockquote className="text-muted-foreground">{`"${t.quote}"`}</blockquote>
              <div className="mt-3 text-sm font-medium">— {t.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
