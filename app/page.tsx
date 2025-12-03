import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ScrollStack from "@/components/scroll-stack"
import MenuSection from "@/components/menu-section"
import SocialProof from "@/components/social-proof"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <HeroSection />
      <ScrollStack />
      <MenuSection />
      <SocialProof />
      <Footer />
    </main>
  )
}
