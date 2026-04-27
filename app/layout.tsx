import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/layout/footer'
import { ToastContainer } from 'react-toastify'

export const metadata: Metadata = {
  title: 'Haifa Khiari - Software Engineer',
  description: 'Welcome to my portfolio! I am a passionate software engineer with experience in building web applications and digital products. Explore my projects, skills, and experience to learn more about my journey in tech.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
