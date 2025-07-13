import Hero from "@/components/hero"
import Features from "@/components/features"
import TechStack from "@/components/tech-stack"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import HalftoneBackground from "@/components/halftone-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <HalftoneBackground />
      <div className="relative z-10">
        <Hero />
        <Features />
        <TechStack />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
