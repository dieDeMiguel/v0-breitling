"use client"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import BoutiqueCard from "./BoutiqueCard"

interface Boutique {
  id: string
  name: string
  image: string
  address: string
  phone: string
}

export function BoutiqueSection() {
  const boutiques: Boutique[] = [
    {
      id: "geneva",
      name: "BREITLING BOUTIQUE GENEVA",
      image:
        "https://www.breitling.com/api/image-proxy/a.mktgcdn.com/p/FAmR6aX4omChh6ewjSrSYf3qK49GIea6QVf1KseP8Tg/1280x755.jpg",
      address: "PLACE DES BERGUES 1 GENEVA",
      phone: "+41227381600",
    },
    {
      id: "bern",
      name: "BREITLING BOUTIQUE BERN",
      image:
        "https://www.breitling.com/api/image-proxy/a.mktgcdn.com/p/XlkodE_RZDpVoTGr7Q-RqHDG4C8CmskyWGmYR_VHtJY/8256x5504.jpg",
      address: "1-3 MARKTGASS-PASSAGE BERN",
      phone: "+41763674293",
    },
    {
      id: "interlaken",
      name: "BREITLING BOUTIQUE INTERLAKEN",
      image:
        "https://www.breitling.com/api/image-proxy/a.mktgcdn.com/p/oONKanX2i-43iPVCMTw40kfM6uE_qlnkvS_vQLz53dM/2000x1125.jpg",
      address: "37 HÖHEWEG INTERLAKEN",
      phone: "+41338267073",
    },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">BREITLING BOUTIQUE</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {boutiques.map((boutique) => (
            <BoutiqueCard key={boutique.id} boutique={boutique} />
          ))}
          {/* Find a Store Card */}
          <div className="bg-white border border-gray-100 shadow-sm flex flex-col">
            <div className="relative h-[245px] w-full mb-4">
              <Image
                src="https://www.breitling.com/api/image-proxy/images.ctfassets.net/11yu5j5b14kx/45zUbWeNMcy0mPOOXuc4a5/d367c1cfebd65ac41960605849cd8e98/Group_1739325817.png"
                alt="Find a Store"
                fill
                className="object-cover"
              />
            </div>
            <div className="px-4 flex-1 flex flex-col">
              <p className="text-breitling-13 mb-auto">
                Visit us in a Breitling boutique or at official retailers and convince yourself of our high-quality
                products. Discover new models, get individual advice and find the Breitling watch that suits you best.
              </p>
              <div className="pb-6 mt-6">
                <Button className="bg-breitling-yellow text-black hover:bg-[#e6b82e] font-bold w-full uppercase">
                  Find a Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
