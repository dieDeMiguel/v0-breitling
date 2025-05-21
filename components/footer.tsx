import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Youtube, Twitter, Globe } from "lucide-react"

interface FooterProps {
  /**
   * Optional phone number to display in the footer
   */
  phoneNumber?: string
  /**
   * Optional email to display in the footer
   */
  email?: string
  /**
   * Optional hours to display in the footer
   */
  hours?: string
  /**
   * Optional copyright year to display in the footer
   */
  copyrightYear?: string
}

export default function Footer({
  phoneNumber = "+41 31 547 91 83",
  email = "INFO.CH@BREITLING.COM",
  hours = "MON-FRI: 09:00-18:00, SAT: CLOSED, SUN: CLOSED",
  copyrightYear = "2025",
}: FooterProps) {
  return (
    <footer className="bg-[#0a0a14] text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <Link href="/newsletter" className="flex items-center text-[#FFCC33] font-bold mb-4">
              SUBSCRIBE TO OUR NEWSLETTER
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 h-5 w-5"
              >
                <path
                  clipRule="evenodd"
                  d="M14.0607 10L7.35355 3.29291L5.93934 4.70712L11.2322 10L5.93934 15.2929L7.35355 16.7071L14.0607 10Z"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
            <div className="flex items-center text-[#FFCC33] mb-2">
              <Link href={`tel:${phoneNumber.replace(/\s/g, "")}`} className="mr-4">
                {phoneNumber}
              </Link>
              <span className="text-gray-400">{hours}</span>
            </div>
            <Link href={`mailto:${email}`} className="text-gray-400">
              {email}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-t border-b border-gray-800">
          <div>
            <h3 className="font-bold mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/find-boutique" className="text-gray-400 hover:text-white">
                  Find a boutique
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Our services
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-gray-400 hover:text-white">
                  Check your order
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-gray-400 hover:text-white">
                  My account
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-white">
                  Register your Breitling
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">WATCHES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/watches/womens" className="text-gray-400 hover:text-white">
                  Women's watches
                </Link>
              </li>
              <li>
                <Link href="/watches/mens" className="text-gray-400 hover:text-white">
                  Men's watches
                </Link>
              </li>
              <li>
                <Link href="/watches/gold" className="text-gray-400 hover:text-white">
                  Gold
                </Link>
              </li>
              <li>
                <Link href="/watches/limited" className="text-gray-400 hover:text-white">
                  Limited editions
                </Link>
              </li>
              <li>
                <Link href="/watches/novelties" className="text-gray-400 hover:text-white">
                  Novelties
                </Link>
              </li>
              <li>
                <Link href="/watches/collections" className="text-gray-400 hover:text-white">
                  All collections
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/books" className="text-gray-400 hover:text-white">
                  Breitling Books
                </Link>
              </li>
              <li>
                <Link href="/about/partnerships" className="text-gray-400 hover:text-white">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/about/sustainability" className="text-gray-400 hover:text-white">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-gray-400 hover:text-white">
                  Download catalog
                </Link>
              </li>
              <li>
                <Link href="/about/career" className="text-gray-400 hover:text-white">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">SOCIAL NETWORK</h3>
            <div className="grid grid-cols-4 gap-4 mb-8">
              <Link href="#" className="hover:text-[#FFCC33]">
                <Instagram className="h-6 w-6" strokeWidth={1} />
              </Link>
              <Link href="#" className="hover:text-[#FFCC33]">
                <Facebook className="h-6 w-6" strokeWidth={1} />
              </Link>
              <Link href="#" className="hover:text-[#FFCC33]">
                <Youtube className="h-6 w-6" strokeWidth={1} />
              </Link>
              <Link href="#" className="hover:text-[#FFCC33]">
                <Twitter className="h-6 w-6" strokeWidth={1} />
              </Link>
            </div>
            <h3 className="font-bold mb-4">COUNTRY/REGION</h3>
            <Button className="border border-white bg-transparent hover:bg-white/10 w-full justify-start">
              <Globe className="h-5 w-5 mr-2" strokeWidth={1} />
              SWITZERLAND - ENGLISH
            </Button>
          </div>
        </div>

        <div className="pt-8 text-gray-400 text-sm">
          <div className="flex flex-wrap gap-6 mb-4">
            <Link href="/legal" className="hover:text-white">
              Legal statement
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & conditions
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/imprint" className="hover:text-white">
              Imprint
            </Link>
            <Link href="/accessibility" className="hover:text-white">
              Accessibility
            </Link>
          </div>
          <p>©{copyrightYear} Breitling. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
