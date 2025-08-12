export default function Loading() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="animate-pulse space-y-4">
        <div className="h-8 w-1/2 bg-muted rounded" />
        <div className="h-4 w-2/3 bg-muted rounded" />
        <div className="h-64 w-full bg-muted rounded" />
      </div>
    </div>
  )
}
