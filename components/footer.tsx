import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground font-serif">
            S
          </span>
          <span className="text-lg font-bold tracking-tight text-card-foreground font-serif">
            Shriihari
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            How It Works
          </Link>
          <Link
            href="#categories"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Categories
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          {`\u00A9 ${new Date().getFullYear()} Shriihari. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
