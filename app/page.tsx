import Link from "next/link";

import { Button } from "./_components/ui/button";
import SiteLogo from "./_components/site-logo";

export default function Home() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 pt-1 gap-12 text-gray-600 md:px-8">
      <nav className="flex items-center justify-between p-4 mb-10">
        <SiteLogo />
        <Button variant="secondary">
          <Link href="/login">
            Login
          </Link>
        </Button>
      </nav>
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h2 className="text-sm text-gray-900 font-medium">
          Build products for everyone
        </h2>
        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
          The all-in-one life management tool.
        </h1>
        <p className="max-w-2xl mx-auto">
          Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
        </p>
        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
          <Button className="block py-2 px-4 text-white font-medium">
            <Link href="/signup">
              Get started with Abacus
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-14">
        <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png" className="w-full shadow-lg rounded-lg border" alt="" />
      </div>
    </section>
  )
}
