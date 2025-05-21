import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WatchProduct {
  id: string
  sku: string
  name: string
  price: string
  image: string
  link: string
  isNew?: boolean
}

export function TrendingNowSection() {
  const trendingWatches: WatchProduct[] = [
    {
      id: "top-time-b31",
      sku: "AB3113171L1A1",
      name: "TOP TIME B31",
      price: "5 600,00 CHF",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab3113171l1a1-soldier_49b973ee_thumbnail_1024.webp",
      link: "/watches/top-time/top-time-b31/AB3113171L1A1/",
      isNew: true,
    },
    {
      id: "top-time-b01-racing",
      sku: "AB01771A1L1X1",
      name: "TOP TIME B01 RACING",
      price: "6 950,00 CHF",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab01771a1l1x1-soldier_2c434022_thumbnail_1024.webp",
      link: "/watches/top-time/top-time-b01-cushion/AB01771A1L1X1/",
      isNew: true,
    },
    {
      id: "navitimer-b01-chronograph-46",
      sku: "AB0137241L1P1",
      name: "NAVITIMER B01 CHRONOGRAPH 46",
      price: "8 850,00 CHF",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab0137241l1p1-soldier_1f3baa75_thumbnail_1024.webp",
      link: "/watches/navitimer/navitimer-b01-chronograph-46-my22/AB0137241L1P1/",
    },
    {
      id: "chronomat-b01-42",
      sku: "UB0134131L1S1",
      name: "CHRONOMAT B01 42",
      price: "8 950,00 CHF",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ub0134131l1s1-soldier_13b61f23_thumbnail_1024.webp",
      link: "/watches/chronomat/chronomat-b01-42/UB0134131L1S1/",
    },
    {
      id: "top-time-b01-fausto-coppi",
      sku: "AB01768A1A1X1",
      name: "TOP TIME B01 FAUSTO COPPI",
      price: "6 950,00 CHF",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab01768a1a1x1-soldier_1c025f07_thumbnail_1024.webp",
      link: "/watches/top-time/top-time-b01/AB01768A1A1X1/",
      isNew: true,
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">TRENDING NOW</h2>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {trendingWatches.map((watch) => (
              <div key={watch.id} className="flex flex-col">
                <div className="relative group">
                  <Link href={watch.link} className="block relative">
                    <div className="relative h-[350px] w-full">
                      <Image
                        src={watch.image || "/placeholder.svg"}
                        alt={watch.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 20vw"
                      />
                    </div>
                    {watch.isNew && (
                      <div className="absolute top-0 left-0 bg-black text-white text-xs font-normal py-1 px-2 z-10">
                        NEW
                      </div>
                    )}
                  </Link>
                  <button className="absolute top-0 right-0 p-2">
                    <Heart className="h-5 w-5 text-[#072c54]" />
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">{watch.sku}</p>
                  <h3 className="font-normal text-sm">{watch.name}</h3>
                  <p className="mt-2 text-sm text-[#072c54]">{watch.price}</p>
                </div>
                <div className="mt-4 text-center">
                  <Button
                    className="bg-white text-black border border-black hover:bg-gray-100 font-normal text-sm w-full"
                    size="sm"
                  >
                    Add to bag
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
