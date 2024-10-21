import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
// import { headers } from 'next/headers'
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { authOptions } from "@/app/(auth)/api/auth/[...nextauth]/route";
import AppSidebar from "@/components/sidebar/app-sidebar";
import AppBreadCrumbs from "@/components/sidebar/app-breadcrumbs";



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
    // redirect('/login')
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <AppBreadCrumbs />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}