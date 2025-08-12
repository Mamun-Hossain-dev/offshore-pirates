"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, ArrowRight, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/career", label: "Career" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/5 dark:bg-slate-950/80 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-black/20 supports-[backdrop-filter]:bg-white/5 dark:supports-[backdrop-filter]:bg-slate-950/80 transition-all duration-300">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/70 to-white/80 dark:from-slate-950/90 dark:via-slate-900/80 dark:to-slate-950/90 backdrop-blur-xl"></div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-14 sm:h-16 flex items-center">
        {/* Logo with enhanced styling */}
        <Link
          href="/"
          className="group mr-4 sm:mr-6 lg:mr-8 flex items-center transform hover:scale-105 transition-all duration-300"
        >
          <span className="font-bold text-lg sm:text-xl lg:text-2xl bg-gradient-to-r from-slate-800 via-indigo-700 to-purple-700 dark:from-white dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-purple-600 dark:group-hover:from-indigo-300 dark:group-hover:to-purple-300 transition-all duration-300">
            Offshore Pirates
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex ml-4 xl:ml-8 gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-2 xl:px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 group",
                pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                  ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 shadow-sm"
                  : "text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
              )}
            >
              <span className="relative z-10 whitespace-nowrap">
                {link.label}
              </span>

              {/* Active indicator */}
              {(pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href))) && (
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 rounded-xl border border-indigo-200/50 dark:border-indigo-700/50"></div>
              )}

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle with enhanced styling */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <ThemeToggle />
          </div>

          {/* CTA Button */}
          <Button
            asChild
            className="group hidden md:inline-flex relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:from-indigo-600 hover:via-purple-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 border-0 px-3 lg:px-6 py-2 lg:py-2.5 text-xs lg:text-sm font-semibold rounded-xl transform hover:scale-105 hover:-translate-y-0.5"
          >
            <Link
              href="/contact"
              className="relative z-10 flex items-center gap-1 lg:gap-2"
            >
              <span className="hidden lg:inline">Get Consultation</span>
              <span className="lg:hidden">Consult</span>
              <ArrowRight className="w-3 lg:w-4 h-3 lg:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-4 sm:h-5 w-4 sm:w-5 text-slate-700 dark:text-slate-300" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>

            {/* Mobile Menu Content */}
            <SheetContent
              side="right"
              className="w-full max-w-xs sm:max-w-sm bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-l border-white/20 dark:border-slate-800/50"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-slate-200/50 dark:border-slate-700/50">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center"
                  >
                    <SheetTitle className="font-bold text-base sm:text-lg bg-gradient-to-r from-slate-800 via-indigo-700 to-purple-700 dark:from-white dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent">
                      Offshore Pirates
                    </SheetTitle>
                  </Link>

                  
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-1 sm:gap-2 mt-6 sm:mt-8 flex-1">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "relative flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] group",
                        pathname === link.href ||
                          (link.href !== "/" && pathname.startsWith(link.href))
                          ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 shadow-sm"
                          : "text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                      )}
                    >
                      <span className="relative z-10">{link.label}</span>

                      {/* Active indicator */}
                      {(pathname === link.href ||
                        (link.href !== "/" &&
                          pathname.startsWith(link.href))) && (
                        <>
                          <div className="absolute left-0 w-1 h-6 sm:h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-r-full"></div>
                          <ArrowRight className="w-4 h-4 ml-auto text-indigo-500" />
                        </>
                      )}

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="pt-4 sm:pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                  <Button
                    asChild
                    className="group w-full relative overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:from-indigo-600 hover:via-purple-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 border-0 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-xl transform hover:scale-[1.02]"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="relative z-10 flex items-center justify-center gap-2"
                    >
                      Get Consultation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      {/* Button shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
