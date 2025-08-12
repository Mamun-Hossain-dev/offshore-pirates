export type BlogBlock = { type: "p" | "h2" | "img"; id?: string; text?: string; alt?: string }
export type Blog = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  content: BlogBlock[]
  related: { slug: string; title: string }[]
}

export const BLOG_CATEGORIES = ["Customer Support", "Finance", "Operations", "AI", "BPO"]

const mk = (slug: string, title: string, category: string): Blog => ({
  slug,
  title,
  excerpt: "Key strategies to improve efficiency, reduce costs, and elevate customer experience.",
  category,
  date: "2025-08-01",
  author: "Editorial Team",
  content: [
    {
      type: "p",
      id: "p1",
      text: "In this article, we’ll break down proven plays to scale operations while maintaining quality.",
    },
    { type: "h2", id: "intro", text: "Introduction" },
    { type: "p", id: "p2", text: "Operational excellence requires clarity, measurement, and tight feedback loops." },
    { type: "img", id: "img1", alt: "Infographic" },
    { type: "h2", id: "tactics", text: "Tactics" },
    { type: "p", id: "p3", text: "Start with SLA trees, then align teams and tooling to your KPI stack." },
  ],
  related: [],
})

const ALL_BLOGS: Blog[] = [
  mk("scale-support-slas", "How to Scale Support SLAs", "Customer Support"),
  mk("close-faster-ar", "Closing Faster: AR Best Practices", "Finance"),
  mk("ops-playbooks", "Ops Playbooks that Actually Scale", "Operations"),
  mk("ai-micro-automations", "AI Micro-Automations in BPO", "AI"),
  mk("fp-a-for-ops", "FP&A for Operators", "Finance"),
  mk("quality-at-scale", "Quality at Scale", "Operations"),
].map((p, i, arr) => ({
  ...p,
  related: arr
    .filter((x) => x.slug !== p.slug)
    .slice(0, 2)
    .map((x) => ({ slug: x.slug, title: x.title })),
}))

export async function fetchBlogs({
  page = 1,
  limit = 6,
  category = "All",
  q = "",
}: { page?: number; limit?: number; category?: string; q?: string }) {
  let list = [...ALL_BLOGS]
  if (category !== "All") list = list.filter((b) => b.category === category)
  if (q) {
    const qq = q.toLowerCase()
    list = list.filter((b) => b.title.toLowerCase().includes(qq) || b.excerpt.toLowerCase().includes(qq))
  }
  const start = (page - 1) * limit
  const items = list.slice(start, start + limit)
  return { items, total: list.length }
}

export async function fetchBlogBySlug(slug: string) {
  const post = ALL_BLOGS.find((b) => b.slug === slug)
  if (!post) throw new Error("Not found")
  return post
}
