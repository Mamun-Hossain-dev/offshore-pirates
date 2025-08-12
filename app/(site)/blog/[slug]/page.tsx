import { fetchBlogBySlug } from "@/app/_lib/blogs"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { TableOfContents } from "@/app/_components/table-of-contents"
import { Card, CardContent } from "@/components/ui/card"

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await fetchBlogBySlug(params.slug).catch(() => null)
  if (!post) return notFound()

  const headings = post.content.filter((b) => b.type === "h2").map((b) => ({ id: b.id!, text: b.text! }))

  return (
    <article className="container px-4 md:px-6 py-10 md:py-14 grid gap-8 lg:grid-cols-[1fr_280px]">
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold">{post.title}</h1>
        <p className="text-muted-foreground mt-2">
          {post.date} · By {post.author}
        </p>
        <Image
          src={`/abstract-geometric-shapes.png?height=340&width=1200&query=${encodeURIComponent("blog hero " + post.category)}`}
          alt={post.title}
          width={1200}
          height={340}
          className="w-full h-64 md:h-80 object-cover rounded-lg mt-6"
        />
        <div className="prose prose-neutral dark:prose-invert max-w-none mt-8">
          {post.content.map((block) => {
            if (block.type === "p") {
              return <p key={block.id}>{block.text}</p>
            }
            if (block.type === "h2") {
              return (
                <h2 key={block.id} id={block.id}>
                  {block.text}
                </h2>
              )
            }
            if (block.type === "img") {
              return (
                <Image
                  key={block.id}
                  src={`/abstract-geometric-shapes.png?height=360&width=1200&query=${encodeURIComponent(block.alt ?? "blog image")}`}
                  alt={block.alt ?? "Blog image"}
                  width={1200}
                  height={360}
                  className="w-full rounded-lg"
                />
              )
            }
            return null
          })}
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-3">Related Posts</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {post.related.map((rel) => (
              <Card key={rel.slug}>
                <CardContent className="py-4">
                  <Link href={`/blog/${rel.slug}`} className="font-medium hover:underline">
                    {rel.title}
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <aside className="lg:pl-6">
        <TableOfContents headings={headings} />
      </aside>
    </article>
  )
}
