import type React from "react"
import Image from "next/image"
import Link from "next/link"

interface PromotionalItem {
  id: string
  image: string
  title: React.ReactNode
  subtitle?: string
  link: string
}

export function PromotionalSection() {
  const promotionalItems: PromotionalItem[] = [
    {
      id: "fathers-day",
      image:
        "https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/5DbZkA9VHgocC66AXJWUvO/0df903c9181dd44eea02a4d1b80957f8/Fday_sb.jpg",
      title: (
        <>
          <span className="text-[#FFCC33]">HAPPY</span> FATHER&apos;S DAY!
        </>
      ),
      subtitle: "Find the best fit for your dad",
      link: "/watches/father-day",
    },
    {
      id: "austin-butler",
      image:
        "https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/a9nezdtKQrw2HlAsWmXWR/6a033c330e174c74d773fcdfd0b04249/Navitimer_austin.jpg",
      title: (
        <>
          <span className="text-[#FFCC33]">AUSTIN BUTLER</span> WEARS THE LEGENDARY NAVITIMER
        </>
      ),
      link: "/watches/austin-butler-navitimer",
    },
    {
      id: "top-time-racing",
      image:
        "https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/TM8mVIDbiIYKNsUZOXpWh/87c8d95bfc564abbdcbd7b50361a7810/racing_sub_banner.jpg",
      title: (
        <>
          <span className="text-[#FFCC33]">TOP TIME RACING</span> & MARTINI RACING
        </>
      ),
      subtitle: "Fueled by racing history, made for today",
      link: "/watches/top-time-racing",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promotionalItems.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="relative h-[220px] mb-4 overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt="" fill className="object-cover" />
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-normal mb-2">{item.title}</h3>
                {item.subtitle && <p className="text-sm mb-6">{item.subtitle}</p>}
                <Link
                  href={item.link}
                  className="bg-[#FFCC33] text-black hover:bg-[#e6b82e] font-normal py-3 px-12 inline-block uppercase"
                >
                  Discover
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
