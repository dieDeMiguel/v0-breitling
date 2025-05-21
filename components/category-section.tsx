import Image from "next/image"
import Link from "next/link"

export function CategorySection() {
  return (
    <section className="py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-[500px] group overflow-hidden">
          <Image
            src="https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/cQuJkkUMYx8ldj5yi7xfo/23e8818f13d39f6bcf12153a0c2cf439/HP-men.jpg"
            alt="Men's Watches"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#FFCC33]">MEN&apos;S</span> WATCHES
            </h2>
            <Link href="/watches/mens" className="text-[#FFCC33] font-bold group-hover:underline flex items-center">
              Discover
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                <path fill="none" d="M0 0h24v24H0Z" data-name="Path 245"></path>
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6Z" data-name="Path 246"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="relative h-[500px] group overflow-hidden">
          <Image
            src="https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/2pVwY1VARlHQ7i0VZgVSSJ/3ea579c72354fef7911518bb45751234/HP-women.jpg"
            alt="Women's Watches"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-end p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#FFCC33]">WOMEN&apos;S</span> WATCHES
            </h2>
            <Link href="/watches/womens" className="text-[#FFCC33] font-bold group-hover:underline flex items-center">
              Discover
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                <path fill="none" d="M0 0h24v24H0Z" data-name="Path 245"></path>
                <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6Z" data-name="Path 246"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
