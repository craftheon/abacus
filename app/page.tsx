import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 pt-1 gap-12 text-gray-600 md:px-8">
      <nav className="flex items-center justify-between p-4 mb-10">
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">Abacus</h1>
        <Link href="/login" className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg">
          Login
        </Link>
      </nav>
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-sm text-indigo-600 font-medium">
          Build products for everyone
        </h1>
        <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
          The all-in-one life management tool.
        </h2>
        <p className="max-w-2xl mx-auto">
          Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
        </p>
        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
          <Link href="/signup" className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
            Get started with Abacus
          </Link>
        </div>
      </div>
      <div className="mt-14">
        <img src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png" className="w-full shadow-lg rounded-lg border" alt="" />
      </div>
    </section>
  )
}
