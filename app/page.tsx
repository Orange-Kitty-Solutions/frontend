import NavBar from "@/components/navBar"
import Hero from "@/components/index/hero"
import StatsSection from "@/components/index/statsSection"

export default function RealEstateLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary-400 text-neutral-50">
        <NavBar />
      </header>

      <main className="flex-grow">
        <Hero />

        <StatsSection />
        
        <div className="container mx-auto flex-col items-center text-center border py-10 ">
          <p className="font-inter font-bold text-6xl">Conoce nuestros servicios</p>
        </div>

      </main>
    </div>
    )
}