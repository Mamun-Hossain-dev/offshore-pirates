"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Briefcase, Heart, Clock, TrendingUp, Users, BookOpen } from "lucide-react"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  role: z.string().min(2),
  message: z.string().min(10),
})

export default function CareerPage() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", role: "", message: "" },
  })

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log("apply", values)
    toast({ title: "Application received", description: "We’ll reach out soon." })
    form.reset()
  }

  const perks = [
    {
      icon: <Briefcase />,
      title: "Remote Work",
      desc: "Work from anywhere in the world.",
    },
    {
      icon: <Heart />,
      title: "Health Insurance",
      desc: "Comprehensive health coverage for you and your family.",
    },
    {
      icon: <Clock />,
      title: "Paid Time Off",
      desc: "Flexible PTO to rest and recharge.",
    },
    {
      icon: <TrendingUp />,
      title: "Growth Opportunities",
      desc: "Clear paths for career advancement.",
    },
    {
      icon: <Users />,
      title: "Team Events",
      desc: "Regular virtual and in-person team events.",
    },
    {
      icon: <BookOpen />,
      title: "Learning Budget",
      desc: "A dedicated budget for your professional development.",
    },
  ]

  const jobs = [
    {
      id: "cs-lead",
      title: "Customer Support Lead",
      location: "Remote",
      desc: "Own SLA performance and team coaching.",
    },
    {
      id: "fa-analyst",
      title: "Financial Analyst (AR/AP)",
      location: "Remote",
      desc: "Manage reconciliations and reporting.",
    },
    {
      id: "bo-specialist",
      title: "Back Office Specialist",
      location: "Hybrid",
      desc: "Data entry, QA, and workflow ops.",
    },
  ]

  return (
    <div>
      <section className="container px-4 md:px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold">Work With Us</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Grow with a global team. Learn fast, ship value, and lead with ownership.
        </p>
      </section>

      {/* Growth Path (Stepper-like) */}
      <section className="container px-4 md:px-6 pb-12">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Onboard", desc: "Ramp fast with structured playbooks & shadowing." },
            { title: "Own", desc: "Lead KPIs, drive improvements, mentor others." },
            { title: "Scale", desc: "Build squads, standardize, and automate." },
          ].map((s, i) => (
            <Card key={s.title}>
              <CardHeader>
                <CardTitle>{`${i + 1}. ${s.title}`}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="container px-4 md:px-6 pb-12">
        <h2 className="text-2xl font-bold mb-4">Open Positions</h2>
        <Accordion type="multiple" className="bg-card rounded-md border">
          {jobs.map((job) => (
            <AccordionItem key={job.id} value={job.id}>
              <AccordionTrigger>
                {job.title} · <span className="text-muted-foreground ml-1">{job.location}</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-muted-foreground">{job.desc}</p>
                  <Button>Apply Now</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Perks & Benefits */}
      <section className="container px-4 md:px-6 pb-12">
        <h2 className="text-2xl font-bold mb-4">Perks & Benefits</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk) => (
            <div key={perk.title} className="flex items-start gap-3">
              <div className="mt-1 size-6 text-indigo-600">{perk.icon}</div>
              <div>
                <h3 className="font-semibold">{perk.title}</h3>
                <p className="text-sm text-muted-foreground">{perk.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Apply Form */}
      <section className="container px-4 md:px-6 pb-16">
        <h2 className="text-2xl font-bold mb-4">Quick Apply</h2>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 max-w-2xl">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...form.register("name")} />
            {form.formState.errors.name && (
              <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...form.register("email")} />
            {form.formState.errors.email && (
              <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role">Role of Interest</Label>
            <Input id="role" {...form.register("role")} />
            {form.formState.errors.role && (
              <p className="text-sm text-destructive">{form.formState.errors.role.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={5} {...form.register("message")} />
            {form.formState.errors.message && (
              <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
            )}
          </div>
          <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
            Submit Application
          </Button>
        </form>
      </section>
    </div>
  )
}
