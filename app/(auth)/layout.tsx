import { Card } from "@/app/_components/ui/card"

export default function AuthLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <Card className="mx-auto max-w-sm">
      {children}
    </Card>
  )
}