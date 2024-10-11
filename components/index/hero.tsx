import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const Hero  = () => {
    return (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/5 pr-8 pb-5">
            <div className="h-full flex flex-col flex-wrap justify-between px-20 pt-10">
              <h1 className="text-8xl font-space font-bold mb-4">
                Obten la <span className="text-primary-400">libertad</span><br />
                con la que sueñas
              </h1>
              <p className="mb-6 font-inter font-bold">
                Gestiona tus propiedades y contratos con facilidad, automatiza los cobros
                y mantenimientos, y toma decisiones inteligentes con análisis de datos y
                IA.
              </p>
              <form className="space-y-4 mb-6">
                  <div className="flex space-x-5">
                      <Input type="text" placeholder="Nombre" />
                      <Input type="email" placeholder="Email" />
                  </div>
                <Button className="w-full bg-primary-400 hover:bg-primary-500 text-neutral-50">
                  Contacta con nosotros
                </Button>
                <p className="text-sm text-neutral-400 mb-4 text-center">
                Nunca compartiremos tu información con nadie.
              </p>
              </form>
              
              <div className="flex items-center">
                <span className="text-xl font-bold mr-2">Excellent</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">Trustpilot</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 mt-8 md:mt-0 h-[38.8rem]">
            <Image
              src="/buildings-landing.jpg"
              alt="Modern city buildings"
              width={800}
              height={800}
              className="h-full w-full "
            />
          </div>
        </div>
    )
};

export default Hero;