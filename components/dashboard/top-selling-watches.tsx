import Image from "next/image"

interface TopWatch {
  id: string
  name: string
  model: string
  image: string
  sales: number
  price: string
}

export function TopSellingWatches() {
  const topWatches: TopWatch[] = [
    {
      id: "navitimer-b01-46",
      name: "Navitimer B01 Chronograph 46",
      model: "AB0127",
      image: "/images/watches/navitimer-b01-chronograph-46.png",
      sales: 182,
      price: "9,600"
    },
    {
      id: "superocean-42",
      name: "Superocean Automatic 42",
      model: "A17375",
      image: "/images/watches/superocean-automatic-42.png",
      sales: 156,
      price: "4,750"
    },
    {
      id: "premier-b01-42",
      name: "Premier B01 Chronograph 42",
      model: "AB0118",
      image: "/images/watches/premier-b01-chronograph-42.png",
      sales: 134,
      price: "8,300"
    },
    {
      id: "chronomat-b01-42",
      name: "Chronomat B01 42",
      model: "AB0134",
      image: "/images/watches/chronomat-b01-42.png",
      sales: 129,
      price: "8,100"
    }
  ]

  return (
    <div className="space-y-4">
      {topWatches.map((watch) => (
        <div key={watch.id} className="flex items-center p-2 hover:bg-gray-50 rounded-md">
          <div className="relative w-12 h-12 mr-3">
            <Image 
              src={watch.image || "/placeholder.svg"} 
              alt={watch.name} 
              fill 
              className="object-contain" 
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{watch.name}</p>
            <p className="text-xs text-gray-500">{watch.model}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold">{watch.sales} sold</p>
            <p className="text-xs text-gray-500">{watch.price} CHF</p>
          </div>
        </div>
      ))}
    </div>
  )
} 