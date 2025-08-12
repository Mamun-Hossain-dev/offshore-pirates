import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchServices } from "@/app/_lib/services";
import { TiltCard } from "../tilt-card";
import { ArrowRight } from "lucide-react";

export async function CoreServicesSection() {
  const { items: services } = await fetchServices({ limit: 3 });

  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Core Services
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            The top 3 services we provide to our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <TiltCard key={service.id}>
              <Card className="h-full">
                <CardHeader className="flex-row items-center gap-4">
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300">
                    {service.shortDesc}
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="p-0 h-auto mt-4"
                  >
                    <Link href={`/services/${service.id}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}