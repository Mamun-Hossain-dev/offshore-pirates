"use client"

import type React from "react"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TiltCard } from "./tilt-card"

export function ServiceCard({
  service,
}: {
  service: {
    id: string
    title: string
    shortDesc: string
    icon: React.ReactNode
  }
}) {
  return (
    <TiltCard asChild>
      <Card className="relative overflow-hidden border transition-colors hover:border-indigo-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="inline-flex size-9 items-center justify-center rounded-md bg-indigo-600 text-white">
              {service.icon}
            </span>
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{service.shortDesc}</p>
          <Button asChild size="sm" className="mt-4">
            <Link href={`/services/${service.id}`}>View Details</Link>
          </Button>
        </CardContent>
      </Card>
    </TiltCard>
  )
}
