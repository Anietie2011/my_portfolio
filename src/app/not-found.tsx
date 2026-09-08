'use client'
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Error 404
        </p>

        <section className="w-full flex justify-center">
          <Image
            src="/notfound.png"
            alt="Profile"
            width={300}
            height={300}
          />
        </section>

        <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl">
          Page not found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-gray-400">
          Sorry, the page you're looking for doesn't exist or may have been
          moved to another location.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            <Home size={18} />
            Back Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}