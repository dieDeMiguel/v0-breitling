import Image from "next/image"
import Link from "next/link"

export function StrapSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] w-full">
            <Image
              src="https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/1gG5P1CYo652jCQws0sEHn/810073117b6c6e74531288215ba8a155/strap_horizontal.png"
              alt="A bracelet set with different bracelets plus changing tool."
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col items-center text-center max-w-md mx-auto">
            <h3 className="text-4xl font-bold mb-4">BREITLING STRAPS</h3>
            <p className="text-lg mb-8">Pursue excellence, embrace our strap collection through Breitling style.</p>
            <Link
              href="/straps"
              className="bg-[#FFCC33] text-black hover:bg-[#e6b82e] font-bold py-3 px-12 inline-block uppercase w-full md:w-auto text-center"
            >
              Discover Straps
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
