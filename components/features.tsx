import { Search, ShieldCheck, Star, MapPin } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Easy Search",
    description:
      "Find the exact professional you need with powerful search and smart filters by skill, location, and ratings.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    description:
      "Every professional is verified with identity checks and skill validation so you can hire with confidence.",
  },
  {
    icon: Star,
    title: "Honest Reviews",
    description:
      "Read genuine reviews from your neighbors. Real experiences, real feedback, real trust.",
  },
  {
    icon: MapPin,
    title: "Hyperlocal",
    description:
      "Discover helpers right in your neighborhood. No long commutes, no strangers -- just local experts.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Why Shriihari
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-card-foreground md:text-4xl font-serif">
            Everything you need to find the right help
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We are building a platform that puts trust, proximity, and quality
            at the center of every connection.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
