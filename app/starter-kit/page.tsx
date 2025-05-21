"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WatchCard } from "@/components/watch-card";

export default function StarterKitPage() {
  // Use a state to hold the BASE_URL and set it on the client side
  const [baseUrl, setBaseUrl] = useState<string>("");

  useEffect(() => {
    // Set the base URL on the client side
    const url = process.env.NEXT_PUBLIC_BASE_URL || 
      (typeof window !== 'undefined' ? window.location.origin : "");
    setBaseUrl(url);
  }, []);

  // Sample watch data for demonstration
  const sampleWatch = {
    id: "premier-b01-chronograph-42",
    name: "Premier B01 Chronograph 42",
    image: "/images/watches/premier-b01-chronograph-42.png",
    isNew: true,
    price: "8,300",
    model: "AB0118"
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Breitling UI Component Library</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">A collection of reusable UI components and templates for building Breitling-like applications.</p>
          </div>

          <section className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between p-2">
              <span className="flex flex-col">
                <h3 className="text-xl font-medium text-black">
                  Breitling Watch Card
                </h3>
                <p className="text-gray-700">A sleek watch card component for displaying Breitling watches.</p>
              </span>

              {baseUrl && (
                <a 
                  href={`https://v0.dev/t/breitling-components/watch-card`}
                  className="flex-shrink-0"
                  target="_blank"
                >
                  <img
                    src="https://v0.dev/chat-static/button.svg"
                    alt="Open in v0"
                    width="99"
                    height="32"
                  />
                </a>
              )}
            </div>
            <div className="p-6 bg-white rounded-md border border-gray-200 mt-4">
              <div className="max-w-xs mx-auto">
                <WatchCard watch={sampleWatch} />
              </div>
              <pre className="mt-8 p-4 bg-gray-100 rounded overflow-auto text-sm">
{`import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WatchCard({ watch }) {
  return (
    <div className="flex flex-col">
      <div className="relative group">
        {watch.isNew && (
          <div className="absolute top-0 left-0 bg-black text-white text-xs font-bold py-1 px-2 z-10">NEW</div>
        )}
        <Button variant="ghost" size="icon" className="absolute top-0 right-0 z-10 rounded-full hover:bg-white/20">
          <Heart className="h-5 w-5" />
        </Button>
        <Link href={\`/watches/\${watch.id}\`}>
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
}`}
              </pre>
            </div>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between p-2">
              <span className="flex flex-col">
                <h3 className="text-xl font-medium text-black">
                  Breitling Home Page
                </h3>
                <p className="text-gray-700">A complete Breitling homepage with hero section, categories, and product showcases.</p>
              </span>

              {baseUrl && (
                <a 
                  href={`https://v0.dev/t/breitling-components/home`}
                  className="flex-shrink-0"
                  target="_blank"
                >
                  <img
                    src="https://v0.dev/chat-static/button.svg"
                    alt="Open in v0"
                    width="99"
                    height="32"
                  />
                </a>
              )}
            </div>
            <div className="h-[500px] w-full rounded-md border border-gray-200 overflow-hidden shadow-sm mt-4">
              <iframe
                src="/"
                className="w-full h-full"
                title="Breitling Home Page"
              />
            </div>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between p-2">
              <span className="flex flex-col">
                <h3 className="text-xl font-medium text-black">
                  Breitling Dashboard
                </h3>
                <p className="text-gray-700">A comprehensive admin dashboard with analytics, orders, and product management.</p>
              </span>

              {baseUrl && (
                <a 
                  href={`https://v0.dev/t/breitling-components/dashboard`}
                  className="flex-shrink-0"
                  target="_blank"
                >
                  <img
                    src="https://v0.dev/chat-static/button.svg"
                    alt="Open in v0"
                    width="99"
                    height="32"
                  />
                </a>
              )}
            </div>
            <div className="h-[500px] w-full rounded-md border border-gray-200 overflow-hidden shadow-sm mt-4">
              <iframe
                src="/dashboard"
                className="w-full h-full"
                title="Breitling Dashboard"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
