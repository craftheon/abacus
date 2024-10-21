import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link href="/">
      <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">Wealthful</h1>
    </Link>
  )
}