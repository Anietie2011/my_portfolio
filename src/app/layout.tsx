import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "../components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anietie Etim",
  description: "Built by Anietie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          bg-black text-white antialiased
        `}
        style={{
          fontFamily: "var(--font-sans)",
        }}
      >
        <SmoothScroll>
          <div>{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}