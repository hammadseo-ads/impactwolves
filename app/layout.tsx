import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Free Amazon Store Audit Tool - Impact Wolves",
  description:
    "Get a comprehensive analysis of your Amazon advertising performance with our free audit tool. Discover wasted ad spend, optimization opportunities, and actionable insights to boost your ROI.",
  keywords:
    "Amazon audit, Amazon advertising, PPC audit, Amazon store analysis, advertising optimization, Amazon marketing",
  authors: [{ name: "Impact Wolves" }],
  creator: "Impact Wolves",
  publisher: "Impact Wolves",
  robots: "index, follow",
  openGraph: {
    title: "Free Amazon Store Audit Tool - Impact Wolves",
    description:
      "Get a comprehensive analysis of your Amazon advertising performance with our free audit tool. Discover optimization opportunities and boost your ROI.",
    url: "https://impactwolves.vercel.app",
    siteName: "Impact Wolves",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Impact Wolves - Amazon Store Audit Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Amazon Store Audit Tool - Impact Wolves",
    description: "Get a comprehensive analysis of your Amazon advertising performance with our free audit tool.",
    images: ["/favicon.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MSR82BX');`,
          }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MSR82BX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
