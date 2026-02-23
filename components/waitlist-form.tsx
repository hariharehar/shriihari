"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl rounded-2xl bg-primary p-8 text-center text-primary-foreground shadow-lg md:p-14">
          {submitted ? (
            <div className="flex flex-col items-center gap-4">
              <CheckCircle2 className="h-14 w-14" />
              <h2 className="text-2xl font-bold font-serif md:text-3xl">
                {"You're on the list!"}
              </h2>
              <p className="text-primary-foreground/80">
                {"We'll notify you when Shriihari launches in your city. Stay tuned!"}
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-balance text-3xl font-bold font-serif md:text-4xl">
                Be the first to know
              </h2>
              <p className="mx-auto mt-4 max-w-md text-pretty text-primary-foreground/80">
                Join the waitlist and get early access when Shriihari launches.
                No spam, just one email when we are ready.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-lg bg-primary-foreground/15 px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:ring-2 focus:ring-primary-foreground/30"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
                >
                  Join Waitlist
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
