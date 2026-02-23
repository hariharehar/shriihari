import { UserPlus, Search, Phone } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Search for a Helper",
    description:
      "Tell us what you need -- a plumber for a leak, a tutor for your child, or a cleaner for your home. We will show you the best local options.",
  },
  {
    step: "02",
    icon: UserPlus,
    title: "Browse Profiles",
    description:
      "View detailed profiles with photos, ratings, verified skills, and reviews from your neighbors. Pick the person who fits best.",
  },
  {
    step: "03",
    icon: Phone,
    title: "Connect Directly",
    description:
      "Reach out to the professional directly via call or message. No middleman, no commission -- just a simple connection.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Simple Process
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl font-serif">
            How it works
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Getting help has never been this easy. Three simple steps to connect
            with trusted professionals near you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((item, i) => (
            <div key={item.step} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-1/2 hidden h-px w-full bg-border md:block" />
              )}
              <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <item.icon className="h-8 w-8 text-primary" />
                <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                  {item.step}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
