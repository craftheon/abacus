export default function ProtectedLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      {children}
    </main>
  )
}