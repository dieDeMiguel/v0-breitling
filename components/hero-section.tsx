"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface HeroContent {
  id: number
  video: string
  title: React.ReactNode
  subtitle?: string
}

export function HeroSection() {
  const heroContent: HeroContent[] = [
    {
      id: 1,
      video:
        "https://www.breitling.com/api/image-proxy/videos.ctfassets.net/11yu5j5b14kx/5xWX6kmvQ5cEodUEx0R2G8/c91e57206e4511cfa6bd8b5e65354582/BRL_Toptime_AB_15s_Banner_1920x895_03-2.mp4",
      title: (
        <>
          <span className="text-[#FFCC33]">AUSTIN BUTLER&apos;S:</span> TOP TIME,
          <br />
          NAVITIMER & CHRONOMAT
        </>
      ),
    },
    {
      id: 2,
      video:
        "https://www.breitling.com/api/image-proxy/videos.ctfassets.net/11yu5j5b14kx/7lYcnW0r12rmUD2Q0p2TfP/dfe10cf68b43f7209eff2a05873bfc74/BRL_Lancia_Rally_Cutdown_Desktop_7MB.mp4",
      title: (
        <>
          <span className="text-[#FFCC33]">TOP TIME RACING</span> & MARTINI
          <br />
          RACING
        </>
      ),
      subtitle: "Fueled by racing history, made for today",
    },
    {
      id: 3,
      video:
        "https://www.breitling.com/api/image-proxy/videos.ctfassets.net/11yu5j5b14kx/4Ms9Vl7N37YuiLUaPfJLbm/0ab8b77fd0ec4280d92f5a502505665a/BRL_CoppiBartali_Desktop_cutdown_10sec_7Mb.mp4",
      title: (
        <>
          <span className="text-[#FFCC33]">TOP TIME</span> COPPI & BARTALI
        </>
      ),
    },
  ]

  const [activeHero, setActiveHero] = useState<number>(0)

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {heroContent.map((content, index) => (
        <div
          key={content.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            activeHero === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-full object-cover"
              key={content.video} // Key helps React recognize when to reload the video
            >
              <source src={content.video} type="video/mp4" />
              <source src={content.video} type="video/webm" />
            </video>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
              {content.subtitle && <p className="text-xl mb-6">{content.subtitle}</p>}
              <Button className="mt-8 bg-[#FFCC33] text-black hover:bg-[#e6b82e] font-bold">DISCOVER</Button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveHero(index)}
            className={`w-8 h-1 transition-colors duration-300 ${
              activeHero === index ? "bg-[#FFCC33]" : "bg-gray-400"
            }`}
            aria-label={`View hero slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
