import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
// import { headers } from 'next/headers'

import { authOptions } from "../(auth)/api/auth/[...nextauth]/route";

export default async function ProtectedLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    // const headersList = headers()
    // const pathname = headersList.get('x-pathname')
    // const redirectUrl = pathname ? `/login?redirect=${pathname}` : '/login'
    redirect('/login')
  }
  return (
    <main>
      {children}
    </main>
  )
}