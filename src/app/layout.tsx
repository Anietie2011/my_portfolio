import "./globals.css";
import { Geist } from "next/font/google";
import SmoothScroll from "../components/SmoothScroll";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anietie Etim",
  description:
    "I build modern, fast, and visually stunning web applications with clean code, smooth animations, and scalable backend architecture.",
  keywords: [
    "Anietie",
    "Anietie Etim",
    "Anietienteabasi Etim",
    "Anietie Etim Portfolio",
    "Fullstack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Frontend Developer Nigeria",
    "Fullstack Developer Akwa Ibom",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Anietie Etim" }],
  creator: "Anietie Etim",
  publisher: "Anietie Etim",
  metadataBase: new URL("https://anietie.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Anietie Etim",
    description:
      "Building modern, fast, and visually stunning web applications.",
    url: "https://anietie.vercel.app",
    siteName: "Anietie Etim Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Anietie Etim",
    description:
      "Building modern, fast, and visually stunning web applications.",
    creator: "@Anietiente2011",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anietienteabasi Etim",
    alternateName: "Anietie Etim",
    url: "https://anietie.vercel.app",
    email: "anietienteabasietim@gmail.com",
    telephone: "+2348107092013",
    jobTitle: "Fullstack Developer",
    sameAs: [
      "https://x.com/Anietiente2011",
      "https://instagram.com/anietieetim2011",
      "https://github.com/anietie2011",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ikot Ekpene",
      addressRegion: "Akwa Ibom",
      addressCountry: "Nigeria",
    },
    knowsAbout: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Shadcn UI",
      "GSAP",
      "Three.js",
      "Framer Motion",
      "Appwrite",
      "Convex",
      "Tailwind",
      "Sass",
      "Git",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "WebRTC",
      "TensorFlow.js",
      "React Native",
      "Electron",
      "PostgreSQL",
      "Rust",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} bg-black text-white antialiased`}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
