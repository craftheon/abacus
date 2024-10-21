import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { Card } from "@/components/ui/card"
import SiteLogo from "@/components/site-logo"
import { authOptions } from "./api/auth/[...nextauth]/route"

export default async function AuthLayout(
  { children }: { children: React.ReactNode }
) {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/dashboard')
  }

  return (
    <main className="max-w-screen-xl mx-auto px-4 pt-1 gap-12">
      <nav className="flex items-center justify-between p-4 mb-10">
        <SiteLogo />
      </nav>
      <Card className="mx-auto mt-20 max-w-sm">
        {children}
      </Card>
    </main>
  )
}