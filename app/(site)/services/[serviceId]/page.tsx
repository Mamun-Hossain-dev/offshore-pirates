import { notFound } from "next/navigation"
import { fetchServiceById } from "@/app/_lib/services"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function ServiceDetailPage({ params }: { params: { serviceId: string } }) {
  const service = await fetchServiceById(params.serviceId).catch(() => null)
  if (!service) return notFound()

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-700 via-indigo-500 to-blue-400" />
        <div className="px-4 md:px-6 py-16 md:py-24 text-white">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-md bg-white/10">
              {service.icon}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold">{service.title}</h1>
          </div>
          <p className="mt-3 max-w-2xl text-white/90">{service.shortDesc}</p>
          <div className="mt-6">
            <Button asChild variant="secondary">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 py-10 md:py-14 grid gap-8 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Why this matters</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Client Problem</h3>
              <p className="text-muted-foreground">{service.problem}</p>
            </div>
            <div>
              <h3 className="font-semibold">Our Solution</h3>
              <p className="text-muted-foreground">{service.solution}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Impact</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Response Time</span>
              <Badge className="bg-indigo-600">{service.stats.responseTime}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">CSAT Increase</span>
              <Badge className="bg-indigo-600">{service.stats.csatIncrease}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Cost Saving</span>
              <Badge className="bg-indigo-600">{service.stats.costSaving}</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="px-4 md:px-6 pb-16">
        <h2 className="text-2xl font-bold mb-4">Sub-services</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((f) => (
            <Card key={f}>
              <CardContent className="py-6">{f}</CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
