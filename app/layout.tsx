import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { Toaster } from "@/components/ui/sonner"

import { authOptions } from './(auth)/api/auth/[...nextauth]/route'
import './globals.css'


export const metadata: Metadata = {
  title: {
    default: 'Wealthful - The all-in-one wealth management tool.',
    template: `%s - Wealthful`,
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard')
  }

  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
