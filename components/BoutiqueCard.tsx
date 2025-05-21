import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BoutiqueCardProps {
  boutique?: {
    id: string;
    image: string;
    name: string;
    address: string;
    phone: string;
  };
}

export default function BoutiqueCard({ boutique = {
  id: "geneva",
  name: "BREITLING BOUTIQUE GENEVA",
  image:
    "https://www.breitling.com/api/image-proxy/a.mktgcdn.com/p/FAmR6aX4omChh6ewjSrSYf3qK49GIea6QVf1KseP8Tg/1280x755.jpg",
  address: "PLACE DES BERGUES 1 GENEVA",
  phone: "+41227381600",
} }: BoutiqueCardProps) {
  return (
    <div key={boutique?.id} className="bg-white border border-gray-100 shadow-sm flex flex-col max-w-[350px] max-h-[500px]">
      <div className="relative h-[245px] w-full mb-4">
        <Image src={boutique?.image || "/placeholder.svg"} alt={boutique?.name || "Boutique"} fill className="object-cover" />
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
            <Link href="#" className="text-breitling-13 font-bold flex items-center">
              Get Directions
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
            <Link href="#" className="text-breitling-13 font-bold flex items-center">
              View More
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="pb-6">
            <Button className="border border-black bg-white text-black hover:bg-gray-100 font-bold text-breitling-16 w-full uppercase">
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 