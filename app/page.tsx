import NavBar from "@/components/navBar"
import Hero from "@/components/index/hero"
import StatsSection from "@/components/index/statsSection"
import ImageSlider from "@/components/index/servicesSectionImproved"


export default function RealEstateLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary-400 text-neutral-50">
        <NavBar />
      </header>

      <main className="flex-grow">
        <Hero />

        <StatsSection />
        
        <ImageSlider />

      </main>
    </div>
    )
}