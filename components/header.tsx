"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Phone, Globe, Search, Heart, User, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import BreitlingLogo from "@/components/BreitlingLogo"

interface HeaderProps {
  /**
   * Optional announcement message to display at the top of the header
   */
  announcement?: string
  /**
   * Optional link for the announcement message
   */
  announcementLink?: string
  /**
   * Optional text for the announcement link
   */
  announcementLinkText?: string
  /**
   * Optional phone number to display in the header
   */
  phoneNumber?: string
  /**
   * Optional country code to display in the header
   */
  countryCode?: string
  /**
   * Optional language to display in the header
   */
  language?: string
  /**
   * Optional array of languages to display in the dropdown
   */
  languages?: string[]
  /**
   * Optional array of navigation items
   */
  navItems?: Array<{ name: string; href: string }>
}

export default function Header({
  announcement = "Spoil your dad with a memorable gift for Father's Day. Order online by May 29, 12pm.",
  announcementLink = "#",
  announcementLinkText = "T&Cs apply.",
  phoneNumber = "+41 31 547 91 83",
  countryCode = "CH",
  language = "ENGLISH",
  languages = ["DEUTSCH", "FRANÇAIS", "ITALIANO"],
  navItems = [
    { name: "COLLECTIONS", href: "/collections" },
    { name: "WATCHES", href: "/watches" },
    { name: "STRAPS", href: "/straps" },
    { name: "SERVICES", href: "/services" },
    { name: "STORES", href: "/stores" },
    { name: "ABOUT", href: "/about" },
  ],
}: HeaderProps) {
  const [showAnnouncement, setShowAnnouncement] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header className="w-full">
      {showAnnouncement && (
        <div className="bg-[#0a2240] text-white py-4 px-6 flex items-center justify-between">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <p className="text-sm text-center">
            {announcement}{" "}
            <Link href={announcementLink} className="underline">
              {announcementLinkText}
            </Link>
          </p>
          <button onClick={() => setShowAnnouncement(false)} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      )}
      <div className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}>
        <div className="bg-breitling-yellow py-6 px-6">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2" strokeWidth={1} />
                <span className="font-normal mr-2 text-base">{countryCode}</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="p-0 h-auto font-normal text-base flex items-center">
                      {language}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-down h-4 w-4 ml-1"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {languages.map((lang) => (
                      <DropdownMenuItem key={lang}>{lang}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" strokeWidth={1} />
                <span className="text-base">{phoneNumber}</span>
              </div>
            </div>
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
              <BreitlingLogo />
            </Link>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="icon" className="rounded-full p-2 h-auto w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-dollar-sign"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                  <path d="M12 18V6" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full p-2 h-auto w-auto">
                <Search className="h-6 w-6" strokeWidth={1.5} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full p-2 h-auto w-auto">
                <Heart className="h-6 w-6" strokeWidth={1.5} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full p-2 h-auto w-auto">
                <User className="h-6 w-6" strokeWidth={1.5} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full p-2 h-auto w-auto">
                <ShoppingBag className="h-6 w-6" strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </div>
        <nav className="bg-breitling-yellow border-t border-[#e6b82e]">
          <div className="container mx-auto flex justify-center">
            <ul className="flex">
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className="font-normal text-lg py-3 px-6 block tracking-wide relative"
                    onMouseEnter={() => setActiveNavItem(item.name)}
                    onMouseLeave={() => setActiveNavItem(null)}
                  >
                    {item.name}
                    {activeNavItem === item.name && (
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-black"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
