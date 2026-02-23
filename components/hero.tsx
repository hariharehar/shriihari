import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(152_45%_36%/0.08),transparent_60%)]" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Coming Soon
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl font-serif">
            Meet a helper
            <br />
            <span className="text-primary">in your city</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Find trusted local professionals -- from plumbers and electricians
            to tutors and cleaners. Shriihari connects you with the right
            help, right in your neighborhood.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Early Access
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-primary/5" />
            <Image
              src="/images/hero.jpg"
              alt="Friendly local professionals ready to help in your neighborhood"
              width={580}
              height={420}
              className="rounded-2xl object-cover shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
