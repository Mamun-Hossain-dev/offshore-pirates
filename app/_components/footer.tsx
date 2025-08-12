import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 md:px-6 py-6 flex flex-col sm:flex-row gap-4 items-center">
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Offshore Pirates. All rights reserved.
        </div>
        <nav className="sm:ml-auto flex gap-4 text-sm">
          <Link href="#" className="hover:underline underline-offset-4">
            Privacy
          </Link>
          <Link href="#" className="hover:underline underline-offset-4">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}
