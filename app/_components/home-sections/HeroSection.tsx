import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full h-[80vh] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/call-banner-1.jpg"
          alt="Hero Banner"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-contain bg-gradient-to-br from-indigo-950/70 via-violet-950/85 to-indigo-950/100" />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight drop-shadow-lg">
          Fearless Voices.{" "}
          <span className="text-purple-300">Relentless Results.</span>
        </h1>
        <p className="max-w-[650px] text-lg sm:text-xl md:text-2xl text-purple-100 mb-10 leading-relaxed drop-shadow-md">
          We are the global crew you&apos;ve been searching for. Offshore
          Pirates delivers world-class outsourcing solutions with a fearless
          commitment to your success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none justify-center">
          <Button
            asChild
            size="lg"
            className="bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 px-8"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white/80 text-white bg-transparent hover:bg-white hover:text-purple-900 transition-all duration-300 px-8"
          >
            <Link href="/contact">Get Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
