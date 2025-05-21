"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WatchCard } from "@/components/watch-card";
import HeaderFooter from "@/components/header-footer";

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
            </div>
            <div className="p-6 bg-white rounded-md border border-gray-200 mt-4">
              <div className="max-w-xs mx-auto">
                <WatchCard watch={sampleWatch} />
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between p-2">
              <span className="flex flex-col">
                <h3 className="text-xl font-medium text-black">
                  Breitling Header and Footer
                </h3>
                <p className="text-gray-700">A layout component with Breitling header and footer.</p>
              </span>
            </div>
            <div className="h-[500px] w-full rounded-md border border-gray-200 overflow-hidden shadow-sm mt-4">
              <HeaderFooter />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
