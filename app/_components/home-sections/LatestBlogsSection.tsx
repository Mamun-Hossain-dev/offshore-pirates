import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchBlogs } from "@/app/_lib/blogs";
import { ArrowRight } from "lucide-react";

export async function LatestBlogsSection() {
  const { items: blogs } = await fetchBlogs({ limit: 3 });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest Insights
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            Explore our latest articles and playbooks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.slug}>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {blog.excerpt}
                </p>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href={`/blog/${blog.slug}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}