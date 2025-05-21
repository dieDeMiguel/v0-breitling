import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { copperplate } from './fonts/fonts'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // choose the weights you want
  variable: '--font-lato', // optional: for CSS variable usage
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Breitling | Swiss Luxury Watches",
  description: "Breitling is a Swiss luxury watchmaker, known for precision-made chronometers designed for aviators.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${copperplate.className} ${lato.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
