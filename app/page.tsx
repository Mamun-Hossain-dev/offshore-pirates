import { HeroSection } from "./_components/home-sections/HeroSection";
import { CoreServicesSection } from "./_components/home-sections/CoreServicesSection";
import { WhyChooseUsSection } from "./_components/home-sections/WhyChooseUsSection";
import { LatestBlogsSection } from "./_components/home-sections/LatestBlogsSection";
import { Testimonials } from "./_components/testimonials";
import { WorldMap } from "./_components/world-map";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection />
        <CoreServicesSection />
        <WhyChooseUsSection />

        {/* Testimonials Section (already a component) */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                What Our Clients Say
              </h2>
            </div>
            <Testimonials />
          </div>
        </section>

        <LatestBlogsSection />

        {/* Global Map Section (WorldMap is already a component) */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Our Global Reach</h2>
            <p className="text-lg text-indigo-200 mt-2 mb-8">
              Serving clients across the globe from our strategic locations.
            </p>
            <WorldMap />
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-indigo-500 hover:bg-indigo-600 text-white"
              >
                <Link href="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}