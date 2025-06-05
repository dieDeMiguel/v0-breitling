import { Button } from "@/components/ui/button"
import { WatchCard } from "@/components/watch-card"
import { ChevronRight } from "lucide-react"

export function LatestAdditions() {
  const watches = [
    {
      id: "top-time",
      name: "TOP TIME",
      image: "/placeholder.svg?height=300&width=300",
      isNew: true,
    },
    {
      id: "chronomat",
      name: "CHRONOMAT",
      image: "/placeholder.svg?height=300&width=300",
      isNew: false,
    },
    {
      id: "navitimer",
      name: "NAVITIMER",
      image: "/placeholder.svg?height=300&width=300",
      isNew: false,
    },
    {
      id: "superocean",
      name: "SUPEROCEAN",
      image: "/placeholder.svg?height=300&width=300",
      isNew: false,
    },
    {
      id: "avenger",
      name: "AVENGER",
      image: "/placeholder.svg?height=300&width=300",
      isNew: true,
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">DISCOVER THE LATEST ADDITIONS</h2>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {watches.map((watch) => (
              <WatchCard key={watch.id} watch={watch} />
            ))}
          </div>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="flex justify-center mt-12">
          <Button className="bg-[#FFCC33] text-black hover:bg-[#e6b82e] font-bold px-12">DISCOVER</Button>
        </div>
      </div>
    </section>
  )
}
