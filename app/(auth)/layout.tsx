import { Card } from "@/app/_components/ui/card"
import SiteLogo from "../_components/site-logo"

export default function AuthLayout(
  { children }: { children: React.ReactNode }
) {
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