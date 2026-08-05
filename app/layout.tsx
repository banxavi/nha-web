import type { Metadata } from "next";
import { Encode_Sans_Expanded } from "next/font/google";
import { ContactFormProvider } from "@/components/contact/ContactFormProvider";
import { FloatingContactIcons } from "@/components/layout/FloatingContactIcons";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PhoneContactSection } from "@/components/sections/PhoneContactSection";
import { PremiumServicesSection } from "@/components/sections/PremiumServicesSection";
import "./globals.css";

/* Closest free alternative to Surt Expanded (perpetualny.com) — có subset Vietnamese */
const encodeSansExpanded = Encode_Sans_Expanded({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nhà Web | Thiết kế & Vận hành website chuyên nghiệp",
  description:
    "Dịch vụ thiết kế & vận hành website chuyên nghiệp, chuẩn SEO tại Nhà Web.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon.png?v=3", type: "image/png", sizes: "48x48" },
      { url: "/logo/NhaWeb_favicon.webp?v=3", type: "image/webp" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: [{ url: "/apple-icon.png?v=3", sizes: "180x180", type: "image/png" }],
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
        <ContactFormProvider>
          <Header />
          <main className="flex flex-1 flex-col">
            {children}
            <PremiumServicesSection />
            <PhoneContactSection />
          </main>
          <Footer />
          <FloatingContactIcons />
        </ContactFormProvider>
      </body>
    </html>
  );
}
