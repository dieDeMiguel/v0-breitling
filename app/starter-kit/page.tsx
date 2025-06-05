"use client";

import { useEffect, useState } from "react";
import HeaderFooter from "@/components/header-footer";
import BoutiqueCard from "@/components/BoutiqueCard";

export default function StarterKitPage() {
  // Use a state to hold the BASE_URL and set it on the client side
  const [baseUrl, setBaseUrl] = useState<string>("");

  useEffect(() => {
    // Set the base URL on the client side
    const url = process.env.NEXT_PUBLIC_BASE_URL || 
      (typeof window !== 'undefined' ? window.location.origin : "");
    setBaseUrl(url);
  }, []);

  // Function to create properly encoded v0 URLs
  const createV0Link = (title: string, prompt: string, registryItem: string) => {
    const encodedUrl = encodeURIComponent(`${baseUrl}/r/${registryItem}.json`);
    const encodedPrompt = encodeURIComponent(prompt);
    const encodedTitle = encodeURIComponent(title);
    
    return `https://v0.dev/chat/api/open?title=${encodedTitle}&prompt=${encodedPrompt}&url=${encodedUrl}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Breitling UI Component Library</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">A collection of reusable UI components and templates for building Breitling-like applications.</p>
          </div>

          // TODO: Add a section for the Breitling Boutique Card
          <section className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between p-2">
              <span className="flex flex-col">
                <h3 className="text-xl font-medium text-black">
                  Breitling Boutique Card
                </h3>
                <p className="text-gray-700">A card component for displaying Breitling boutique information.</p>
              </span>
              
              {baseUrl && (
                <a 
                  href={createV0Link(
                    "Breitling Boutique Card",
                    "A card component for displaying Breitling boutique information.",
                    "boutique-card"
                  )}
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
            <div className="h-[520px] w-full flex justify-center items-center rounded-md border border-gray-200 overflow-hidden shadow-sm mt-4">
              <BoutiqueCard />
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

              {baseUrl && (
                <a 
                  href={createV0Link(
                    "Breitling Header and Footer", 
                    "A layout component with Breitling header and footer.", 
                    "header-footer"
                  )}
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
            <div className="h-[1000px] w-full rounded-md border border-gray-200 overflow-hidden shadow-sm mt-4">
              <HeaderFooter />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
