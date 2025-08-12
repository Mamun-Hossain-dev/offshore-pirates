"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Headphones, Layers, Calculator, Shield, Globe2, Sparkles, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { TiltCard } from "@/app/_components/tilt-card"
import { WorldMap } from "@/app/_components/world-map"
import { Testimonials } from "@/app/_components/testimonials"
import { useQuery } from "@tanstack/react-query"
import { fetchBlogs } from "@/app/_lib/blogs"
import { fetchServices } from "@/app/_lib/services"

export default function HomePage() {
  const { data: blogData } = useQuery({
    queryKey: ["blogs", { page: 1, limit: 3 }],
    queryFn: () => fetchBlogs({ page: 1, limit: 3 }),
  })

  const { data: serviceData } = useQuery({
    queryKey: ["services", { page: 1, limit: 3, category: "All" }],
    queryFn: () => fetchServices({ page: 1, limit: 3, category: "All" }),
  })

  const top3 = serviceData?.items ?? []

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-600 via-indigo-400 to-blue-300 opacity-70"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background" />
        </div>
        <div className="container px-4 md:px-6 py-20 md:py-28 lg:py-36 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            {"Fearless Voices. Relentless Results."}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-2xl mx-auto text-white/90 md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            Offshore talent, on-demand performance. Scale support, finance, and ops across the globe.
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18 }}
          >
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="backdrop-blur border-white/60 text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/contact">Get Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Services (Top 3) */}
      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Our Core Services</h2>
          <Button asChild variant="ghost" className="gap-1">
            <Link href="/services">
              View all
              <ChevronRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {top3.map((svc) => (
            <TiltCard key={svc.id} asChild>
              <Card className="relative overflow-hidden border-indigo-200 hover:border-indigo-300 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="inline-flex size-9 items-center justify-center rounded-md bg-indigo-600 text-white">
                      {svc.icon}
                    </span>
                    {svc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{svc.shortDesc}</p>
                  <Button asChild size="sm" className="mt-4">
                    <Link href={`/services/${svc.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Why Choose Us - Horizontal Scroll */}
      <section className="bg-muted/40 border-y">
        <div className="container px-4 md:px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Us</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-4 min-w-max pr-4">
              {[
                {
                  title: "Omnichannel Expertise",
                  desc: "Voice, chat, email, social—unified.",
                  icon: <Headphones className="size-5" />,
                },
                {
                  title: "Operational Rigor",
                  desc: "SLA-driven, KPI-obsessed delivery.",
                  icon: <Shield className="size-5" />,
                },
                {
                  title: "Process Design",
                  desc: "Lean, automated, documented workflows.",
                  icon: <Layers className="size-5" />,
                },
                {
                  title: "Financial Clarity",
                  desc: "Real-time dashboards, lower TCO.",
                  icon: <Calculator className="size-5" />,
                },
                { title: "Global Reach", desc: "Follow-the-sun coverage.", icon: <Globe2 className="size-5" /> },
                { title: "Innovation", desc: "AI-first micro-automations.", icon: <Sparkles className="size-5" /> },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-[320px]"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="inline-flex size-8 items-center justify-center rounded-md bg-indigo-600 text-white">
                          {item.icon}
                        </span>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="container px-4 md:px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Industries Served</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {["healthcare", "finance", "retail", "saas", "logistics", "travel"].map((name) => (
            <motion.div
              key={name}
              className="flex items-center justify-center rounded-md border p-4 bg-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 16 }}
            >
              <Image
                src={`/abstract-geometric-shapes.png?height=64&width=160&query=${encodeURIComponent("industry " + name + " logo mark")}`}
                alt={`${name} logo`}
                width={160}
                height={64}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 border-y">
        <div className="container px-4 md:px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-700">What Clients Say</h2>
          <Testimonials />
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="container px-4 md:px-6 py-12 md:py-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Latest Blogs</h2>
          <Button asChild variant="ghost" className="gap-1">
            <Link href="/blog">
              Read more
              <ChevronRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(blogData?.items ?? []).map((post) => (
            <Card key={post.slug} className="overflow-hidden">
              <Image
                src={`/abstract-geometric-shapes.png?height=200&width=600&query=${encodeURIComponent("blog cover " + post.category)}`}
                alt={post.title}
                width={600}
                height={200}
                className="w-full h-40 object-cover"
              />
              <CardHeader>
                <div className="text-xs uppercase tracking-wide text-indigo-600">{post.category}</div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <Button asChild size="sm" className="mt-4">
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Global Map + CTA */}
      <section className="border-t">
        <div className="container px-4 md:px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <WorldMap />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Operate Globally, Deliver Locally</h3>
              <p className="text-muted-foreground mt-2">
                Follow-the-sun coverage with multilingual teams across regions.
              </p>
              <div className="mt-6 flex gap-3">
                <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                  <Link href="/contact">Book Consultation</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
