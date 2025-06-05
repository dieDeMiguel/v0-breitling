import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WatchCardProps {
  /**
   * Watch data to display in the card
   */
  watch: {
    id: string
    name: string
    image: string
    isNew?: boolean
    price?: string
    model?: string
  }
  /**
   * Optional className to apply to the card
   */
  className?: string
}

/**
 * A card component for displaying watch information
 */
export function WatchCard({ watch, className }: WatchCardProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="relative group">
        {watch.isNew && (
          <div className="absolute top-0 left-0 bg-black text-white text-xs font-bold py-1 px-2 z-10">NEW</div>
        )}
        <Button variant="ghost" size="icon" className="absolute top-0 right-0 z-10 rounded-full hover:bg-white/20">
          <Heart className="h-5 w-5" />
        </Button>
        <Link href={`/watches/${watch.id}`}>
          <div className="relative h-[200px] w-full">
            <Image src={watch.image || "/placeholder.svg"} alt={watch.name} fill className="object-contain" />
          </div>
        </Link>
      </div>
      <div className="mt-4 text-center">
        {watch.model && <p className="text-xs text-gray-500">{watch.model}</p>}
        <h3 className="font-bold">{watch.name}</h3>
        {watch.price && <p className="mt-2">{watch.price} CHF</p>}
      </div>
    </div>
  )
}
