export default function Loading() {
  return (
    <div className="container px-4 md:px-6 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-64 bg-muted animate-pulse rounded-md" />
      ))}
    </div>
  )
}
