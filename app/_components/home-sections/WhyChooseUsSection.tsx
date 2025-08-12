export function WhyChooseUsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
            The Offshore Pirates Advantage
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Fearless Commitment</h3>
            <p>We integrate deeply with your team to own your outcomes.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
              Relentless Innovation
            </h3>
            <p>We leverage tech and data to drive efficiency and scale.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Service Excellence</h3>
            <p>Our quality standards are second to none. We deliver.</p>
          </div>
        </div>
      </div>
    </section>
  );
}