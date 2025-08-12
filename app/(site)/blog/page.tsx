"use client"

import { useQuery } from "@tanstack/react-query"
import { fetchBlogs, BLOG_CATEGORIES } from "@/app/_lib/blogs"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function BlogListPage() {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState<string>("All")
  const [q, setQ] = useState("")

  const limit = 6
  const { data, isFetching } = useQuery({
    queryKey: ["blogs", { page, limit, category, q }],
    queryFn: () => fetchBlogs({ page, limit, category, q }),
    keepPreviousData: true,
  })

  const items = data?.items ?? []
  const total = data?.total ?? 0
  const canNext = page * limit < total

  return (
    <div className="container px-4 md:px-6 py-10 md:py-14">
      <h1 className="text-3xl font-extrabold mb-6">Insights & Expertise</h1>
      <div className="grid gap-3 sm:grid-cols-[1fr_auto] items-center mb-6">
        <Input
          placeholder="Search blog..."
          value={q}
          onChange={(e) => {
            setPage(1)
            setQ(e.target.value)
          }}
        />
        <div className="flex gap-2 overflow-x-auto">
          {["All", ...BLOG_CATEGORIES].map((c) => (
            <Badge
              key={c}
              variant={c === category ? "default" : "secondary"}
              className="cursor-pointer whitespace-nowrap"
              onClick={() => {
                setPage(1)
                setCategory(c)
              }}
            >
              {c}
            </Badge>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((post) => (
          <Card key={post.slug} className="overflow-hidden">
            <Image
              src={`/abstract-geometric-shapes.png?height=180&width=600&query=${encodeURIComponent("blog " + post.category)}`}
              alt={post.title}
              width={600}
              height={180}
              className="w-full h-40 object-cover"
            />
            <CardHeader>
              <div className="text-xs uppercase tracking-wide text-indigo-600">{post.category}</div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              <Button asChild size="sm" className="mt-4">
                <Link href={`/blog/${post.slug}`}>Read</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-8">
        <Button variant="outline" disabled={page === 1 || isFetching} onClick={() => setPage((p) => p - 1)}>
          Previous
        </Button>
        <Button variant="outline" disabled={!canNext || isFetching} onClick={() => setPage((p) => p + 1)}>
          Next
        </Button>
      </div>
    </div>
  )
}
