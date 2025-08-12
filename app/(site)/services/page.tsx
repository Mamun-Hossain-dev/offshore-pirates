"use client"

import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchServices, SERVICE_CATEGORIES } from "@/app/_lib/services"
import { ServiceCard } from "@/app/_components/service-card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function ServicesPage() {
  const [category, setCategory] = useState<string>("All")
  const [page, setPage] = useState(1)
  const limit = 6

  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["services", { page, limit, category }],
    queryFn: () => fetchServices({ page, limit, category }),
    keepPreviousData: true,
  })

  const items = data?.items ?? []
  const total = data?.total ?? 0
  const canLoadMore = page * limit < total

  return (
    <div>
      <div className="sticky top-[56px] z-30 bg-background/80 backdrop-blur border-b">
        <div className="container px-4 md:px-6 py-3">
          <Tabs
            value={category}
            onValueChange={(v) => {
              setPage(1)
              setCategory(v)
            }}
          >
            <TabsList className="w-full overflow-x-auto">
              {["All", ...SERVICE_CATEGORIES].map((c) => (
                <TabsTrigger key={c} value={c} className="whitespace-nowrap">
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <section className="px-4 md:px-6 py-8 md:py-12">
        {isLoading ? (
          <div className="flex items-center justify-center py-20 text-muted-foreground">
            <Loader2 className="size-5 mr-2 animate-spin" /> Loading services...
          </div>
        ) : (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((svc) => (
                <ServiceCard key={svc.id} service={svc} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              {canLoadMore ? (
                <Button variant="outline" onClick={() => setPage((p) => p + 1)} disabled={isFetching}>
                  {isFetching ? <Loader2 className="size-4 mr-2 animate-spin" /> : null}
                  Load More
                </Button>
              ) : (
                <div className="text-sm text-muted-foreground">No more services</div>
              )}
            </div>
          </>
        )}
      </section>
    </div>
  )
}
