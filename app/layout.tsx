import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Footer from '@/components/footer/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SolarAgroTech',
  description: 'We are SolarAgroTech, pioneering precision farming solutions to address climate change and enhance food production through cutting-edge smart irrigation technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor:'#020624'}} className={inter.className}>{children}</body>
    <Footer/>
    </html>
  )
}
