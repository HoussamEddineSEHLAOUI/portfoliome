import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })

const siteUrl = 'https://hellomhoussam.com'
const title = 'Houssam Eddine Sehlaoui — Software Engineer'
const description =
  'Software Engineer building systems for financial markets. Java, Spring Boot, React, Kafka and microservices for capital markets, reporting and risk management.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s — Houssam Eddine Sehlaoui',
  },
  description,
  keywords: [
    'Houssam Eddine Sehlaoui',
    'Software Engineer',
    'Java',
    'Spring Boot',
    'React',
    'Kafka',
    'Microservices',
    'Capital Markets',
    'FinTech',
    'Risk Management',
    'Financial Reporting',
  ],
  authors: [{ name: 'Houssam Eddine Sehlaoui', url: siteUrl }],
  creator: 'Houssam Eddine Sehlaoui',
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Houssam Eddine Sehlaoui',
    title,
    description,
    images: [{ url: '/images/houssam.jpg', width: 1181, height: 1255, alt: 'Houssam Eddine Sehlaoui' }],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/images/houssam.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:border focus:border-hairline focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
