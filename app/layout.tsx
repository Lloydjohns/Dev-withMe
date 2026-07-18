import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],  
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexusdigital.io"),
  title: "Nexus Digital | Enterprise IT Solutions & Digital Transformation",
  description:
    "Nexus Digital delivers enterprise-grade IT solutions, cloud infrastructure, cybersecurity, automation, and digital transformation services. We engineer scalable systems that power business growth.",
  keywords: [
    "IT solutions",
    "digital transformation",
    "cloud infrastructure",
    "cybersecurity",
    "business automation",
    "enterprise software",
    "DevOps",
    "system integration",
    "managed services",
  ],
  authors: [{ name: "Nexus Digital" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexusdigital.io",
    siteName: "Nexus Digital",
    title: "Nexus Digital | Enterprise IT Solutions & Digital Transformation",
    description:
      "Enterprise-grade IT solutions, cloud infrastructure, cybersecurity, and digital transformation services.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Nexus Digital - Enterprise IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Digital | Enterprise IT Solutions & Digital Transformation",
    description:
      "Enterprise-grade IT solutions, cloud infrastructure, cybersecurity, and digital transformation services.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
