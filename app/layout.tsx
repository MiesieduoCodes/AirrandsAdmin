import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AirrandsAdmin',
  description: 'Admin Dashboard for the Airrands App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
