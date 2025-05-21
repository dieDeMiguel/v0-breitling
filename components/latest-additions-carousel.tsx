"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WatchCollection {
  id: string
  name: string
  image: string
  link: string
}

export function LatestAdditionsCarousel() {
  const watchCollections: WatchCollection[] = [
    {
      id: "top-time",
      name: "TOP TIME",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab3113171l1a1-soldier_49b973ee_thumbnail_1024.webp",
      link: "/collections/top-time/",
    },
    {
      id: "chronomat",
      name: "CHRONOMAT",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/a32398a11l1a1-soldier_3f640ffe_thumbnail_1024.webp",
      link: "/collections/chronomat/",
    },
    {
      id: "navitimer",
      name: "NAVITIMER",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/a32310171c1p1-soldier_24b12894_thumbnail_1024.webp",
      link: "/collections/navitimer/",
    },
    {
      id: "superocean",
      name: "SUPEROCEAN",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/a17376211l2s2-soldier_8fa9640e_thumbnail_1024.webp",
      link: "/collections/superocean/",
    },
    {
      id: "avenger",
      name: "AVENGER",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab0147101l1x1-soldier_c1e015fc_thumbnail_1024.webp",
      link: "/collections/avenger/",
    },
    {
      id: "superocean-heritage",
      name: "SUPEROCEAN HERITAGE",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab0162121b1a1-soldier_c495e620_thumbnail_1024.webp",
      link: "/collections/superocean-heritage/",
    },
    {
      id: "premier",
      name: "PREMIER",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/ab0145171c1p2-soldier_a4d2f949_thumbnail_1024.webp",
      link: "/collections/premier/",
    },
    {
      id: "professional",
      name: "PROFESSIONAL",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/x82310a51b1s2-soldier_28c873ac_thumbnail_1024.webp",
      link: "/collections/professional/",
    },
    {
      id: "classic-avi",
      name: "CLASSIC AVI",
      image:
        "https://www.breitling.com/api/image-proxy/www-breitling.eu.saleor.cloud/media/thumbnails/products/a233802a1l1x1-soldier_2faf6762_thumbnail_1024.webp",
      link: "/collections/classic-avi/",
    },
  ]

  const [activeSlide, setActiveSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const totalSlides = watchCollections.length
  const visibleSlides = 5
  const maxSlide = Math.max(0, totalSlides - visibleSlides)

  // Add these new state variables and refs
  const scrollbarRef = useRef<HTMLDivElement>(null)
  const [isDraggingScrollbar, setIsDraggingScrollbar] = useState(false)

  const handlePrev = () => {
    setActiveSlide((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setActiveSlide((prev) => Math.min(maxSlide, prev + 1))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  // Add these new handler functions
  const handleScrollbarMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDraggingScrollbar(true)
    handleScrollbarDrag(e)
  }

  const handleScrollbarMouseUp = () => {
    setIsDraggingScrollbar(false)
  }

  const handleScrollbarMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingScrollbar) return
    handleScrollbarDrag(e)
  }

  const handleScrollbarDrag = (e: React.MouseEvent) => {
    if (!scrollbarRef.current) return

    const rect = scrollbarRef.current.getBoundingClientRect()
    const scrollbarWidth = rect.width
    const offsetX = e.clientX - rect.left

    // Calculate the new slide position based on drag position
    const newPosition = Math.min(Math.max(0, Math.round((offsetX / scrollbarWidth) * maxSlide)), maxSlide)

    setActiveSlide(newPosition)
  }

  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth / visibleSlides
      carouselRef.current.scrollLeft = activeSlide * slideWidth
    }
  }, [activeSlide])

  // Add this useEffect to handle mouse events outside the component
  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false)
      setIsDraggingScrollbar(false)
    }

    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12">DISCOVER THE LATEST ADDITIONS</h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={activeSlide === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 -ml-6 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:bg-gray-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>

          <button
            onClick={handleNext}
            disabled={activeSlide >= maxSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 -mr-6 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:bg-gray-50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="overflow-hidden w-full"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div
              className="flex w-full transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${activeSlide * (100 / visibleSlides)}%)` }}
            >
              {watchCollections.map((watch) => (
                <div key={watch.id} className="w-[20%] flex-shrink-0 px-2">
                  <div className="flex flex-col">
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
                      </Link>
                      <button className="absolute top-2 right-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="h-5 w-5 text-[#072c54]" />
                      </button>
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="font-bold text-sm">{watch.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scrollbar - positioned between watches and button, width reduced by 30% */}
          <div className="flex justify-center my-8">
            <div
              ref={scrollbarRef}
              className="w-[70%] h-[2px] bg-gray-200 relative cursor-pointer"
              onMouseDown={handleScrollbarMouseDown}
              onMouseUp={handleScrollbarMouseUp}
              onMouseLeave={handleScrollbarMouseUp}
              onMouseMove={handleScrollbarMouseMove}
            >
              <div
                className="absolute h-[2px] bg-[#FFCC33] transition-all duration-300"
                style={{
                  width: `${(visibleSlides / totalSlides) * 100}%`,
                  left: `${(activeSlide / maxSlide) * (100 - (visibleSlides / totalSlides) * 100)}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-[#FFCC33] text-black hover:bg-[#e6b82e] font-bold px-12">DISCOVER</Button>
        </div>
      </div>
    </section>
  )
}
