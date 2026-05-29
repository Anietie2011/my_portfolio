
import "./globals.css";
// import Aurora from "../components/Aurora";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
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
    <html lang="en" >
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          bg-black text-white antialiased
        `}
        style={{
          fontFamily: "var(--font-sans)",
        }}
      >
        {/* 🌌 Background */}
        {/* <div className="fixed inset-0 -z-10">
          <Aurora
            colorStops={["#ffe0c2", "#22074f", "#22074f"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          />
          {/* <Aurora
  colorStops={["#7cff67","#B497CF","#5227FF"]}
  blend={0.5}
  amplitude={1.0}
  speed={1}
/> */}
        {/* </div> */} 

        {/* Content */}
        <div className="relative z-10">     
          {children}</div>
      </body>
    </html>
  );
}