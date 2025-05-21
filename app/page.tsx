import { HeroSection } from "@/components/hero-section"
import { CategorySection } from "@/components/category-section"
import { PromotionalSection } from "@/components/promotional-section"
import { LatestAdditionsCarousel } from "@/components/latest-additions-carousel"
import { StrapSection } from "@/components/strap-section"
import { BoutiqueSection } from "@/components/boutique-section"
import { EBoutiqueServices } from "@/components/e-boutique-services"

/**
 * Home page component for the Breitling website
 */
export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CategorySection />
      <PromotionalSection />
      <LatestAdditionsCarousel />
      <StrapSection />
      <BoutiqueSection />
      <EBoutiqueServices />
    </div>
  )
}
