import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"


import { Navbar } from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="dark" >
        <div >
          <Navbar/>
          <div className="md:px-[8%] px-[6%] ">
          {children}
          </div>
        </div>
        
      </ThemeProvider>
        </body>
    </html>
  )
}
