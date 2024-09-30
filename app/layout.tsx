import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "AI-Saas",
  description: "Ai chat, images and videos generator",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative !scroll-smooth">
      <body
        className={cn(poppins.className, "bg-blacker text-whiter antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
