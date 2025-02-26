import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeaturesSection } from "@/components/features-section"
import { ArtistsSection } from "@/components/artists-section"
import { ProcessSection } from "@/components/process-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <Hero />
        <FeaturesSection />
        <ArtistsSection />
        <ProcessSection />
        <GallerySection />
        <ContactSection />
      </main>
    </>
  )
}

