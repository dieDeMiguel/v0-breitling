import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BoutiqueCardProps {
  boutique?: {
    id: string
    image: string
    name: string
    address: string
    phone: string
  }
}

export default function BoutiqueCard({
  boutique = {
    id: "geneva",
    name: "BREITLING BOUTIQUE GENEVA",
    image:
      "https://www.breitling.com/api/image-proxy/a.mktgcdn.com/p/FAmR6aX4omChh6ewjSrSYf3qK49GIea6QVf1KseP8Tg/1280x755.jpg",
    address: "PLACE DES BERGUES 1 GENEVA",
    phone: "+41227381600",
  },
}: BoutiqueCardProps) {
  // Function to create a Google Maps URL with the address
  const getDirectionsUrl = (address: string) => {
    const encodedAddress = encodeURIComponent(address)
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  }

  return (
    <div
      key={boutique?.id}
      className="bg-white border-2 border-gray-100 rounded-breitling-default shadow-sm flex flex-col max-w-[350px] max-h-[500px] transition-all duration-300 ease-in-out hover:border-[#FFC62D] hover:border-2 hover:shadow-lg hover:shadow-[#FFC62D]/20 hover:-translate-y-1 cursor-pointer overflow-hidden"
    >
      <div className="relative h-[245px] w-full mb-4 overflow-hidden">
        <Image
          src={boutique?.image || "/placeholder.svg"}
          alt={boutique?.name || "Boutique"}
          fill
          className="object-cover"
        />
      </div>
      <div className="px-4 flex-1 flex flex-col">
        <h3 className="font-bold text-breitling-14 mb-4">{boutique?.name}</h3>
        <div className="flex items-start mb-3">
          <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
          <p className="text-breitling-13">{boutique?.address}</p>
        </div>
        <div className="flex items-center mb-6">
          <Phone className="h-5 w-5 mr-2 flex-shrink-0" strokeWidth={1.5} />
          <p className="text-breitling-13">{boutique?.phone}</p>
        </div>
        <div className="flex flex-col space-y-4 mt-auto">
          <div className="flex flex-col space-y-1">
            <a
              href={getDirectionsUrl(boutique?.address || "")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-breitling-13 font-bold flex items-center hover:text-[#FFC62D] transition-colors"
            >
              Get Directions
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
            <Link
              href="#"
              className="text-breitling-13 font-bold flex items-center hover:text-[#FFC62D] transition-colors"
            >
              View More
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="pb-6">
            <Button className="border-2 border-black bg-white text-black hover:bg-[#FFC62D] hover:text-[#111820] hover:border-[#FFC62D] hover:border-2 font-bold text-breitling-16 w-full uppercase transition-colors duration-300 rounded-breitling-default">
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
