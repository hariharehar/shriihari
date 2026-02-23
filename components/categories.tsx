import {
  Wrench,
  Zap,
  BookOpen,
  Sparkles,
  Paintbrush,
  Hammer,
  ChefHat,
  Car,
} from "lucide-react";

const categories = [
  { icon: Wrench, label: "Plumbing", count: "120+ Pros" },
  { icon: Zap, label: "Electrical", count: "95+ Pros" },
  { icon: BookOpen, label: "Tutoring", count: "200+ Pros" },
  { icon: Sparkles, label: "Cleaning", count: "180+ Pros" },
  { icon: Paintbrush, label: "Painting", count: "75+ Pros" },
  { icon: Hammer, label: "Carpentry", count: "60+ Pros" },
  { icon: ChefHat, label: "Cooking", count: "110+ Pros" },
  { icon: Car, label: "Driving", count: "150+ Pros" },
];

export function Categories() {
  return (
    <section id="categories" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Categories
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-card-foreground md:text-4xl font-serif">
            Whatever you need, we have got you covered
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="group flex flex-col items-center gap-3 rounded-xl bg-background p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <cat.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-foreground">{cat.label}</h3>
              <p className="text-xs font-medium text-muted-foreground">
                {cat.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
