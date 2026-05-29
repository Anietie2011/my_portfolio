"use client";

import { AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Icon */}
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl">
          <AlertTriangle className="h-10 w-10 text-white" />
        </div>

        {/* Heading */}
        <h1 className="mb-5 text-5xl font-bold tracking-tight md:text-7xl">
          Something went wrong.
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
          An unexpected issue interrupted the experience.
          Please try reloading the page.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => reset()}
            className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white px-8 py-4 text-sm font-medium text-black transition-all duration-300 hover:scale-105"
          >
            Reload Experience
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <Link href="/">
            <button
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}