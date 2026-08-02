import type { Metadata } from "next";
import { Encode_Sans_Expanded } from "next/font/google";
import { FloatingContactIcons } from "@/components/layout/FloatingContactIcons";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

/* Closest free alternative to Surt Expanded (perpetualny.com) — có subset Vietnamese */
const encodeSansExpanded = Encode_Sans_Expanded({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nhà Web — Thiết kế website chuyên nghiệp",
  description:
    "Dịch vụ thiết kế website chuyên nghiệp, chuẩn SEO tại Nhà Web.",
  icons: {
    icon: "/logo/NhaWeb_favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${encodeSansExpanded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-bg-primary text-foreground">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <FloatingContactIcons />
      </body>
    </html>
  );
}
