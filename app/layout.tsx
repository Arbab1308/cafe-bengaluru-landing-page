import type React from "react"
import type { Metadata, Viewport } from "next"
import { Manrope, Rozha_One } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const rozhaOne = Rozha_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rozha",
})

export const metadata: Metadata = {
  title: "Cafe Bengaluru | Authentic South Indian QSR in Raipur",
  description:
    "Experience the authentic taste of Karnataka in Raipur. Pure Ghee Dosas, Idlis, Filter Coffee & more. Order on Zomato & Swiggy.",
  keywords: ["South Indian food Raipur", "Cafe Bengaluru", "Dosa", "Filter Coffee", "Karnataka cuisine"],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#E67E22",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${rozhaOne.variable}`}>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script async src="https://unpkg.com/aos@next/dist/aos.umd.js"></script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof AOS !== 'undefined') {
                AOS.init({
                  duration: 800,
                  once: true,
                  offset: 100
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
