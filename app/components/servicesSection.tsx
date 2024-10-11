import { CalendarCog, PaintRoller, BrainCircuit } from 'lucide-react';
import { Button } from "@/components/ui/button"

const services = [
    {
      title: "Automatiza la gestion",
      text: "Automatiza pagos, cobros y solicitudes de mantenimiento, eliminando la necesidad de intervención manual.",
      icon: <CalendarCog size={250} className="mr-4 text-primary-400" />,
    },
    {
      title: "Gestión Total de Administración y Reparaciones",
      text: "Nos encargamos de la administración y reparaciones de tu propiedad, manteniéndola en óptimas condiciones sin complicaciones para ti.",
      icon: <PaintRoller size={250} className="mr-4 text-primary-400" />,
    },
    {
      title: "Selección Inteligente de Inquilinos con IA",
      text: "Utiliza análisis de datos e inteligencia artificial para crear perfiles de inquilinos y recomendar los mejores candidatos según su historial.",
      icon: <BrainCircuit size={250} className="mr-4 text-primary-400 " />,
    },
  ];

const ServicesSection = () => {
    return (
        <div className="container mx-auto flex flex-col items-center py-10 ">
          <p className="font-space font-bold text-6xl mb-10">Conoce nuestros servicios</p>
          {services.map((service, index) => (
            <div
            key={index}
            className={`flex w-4/5 py-20 justify-evenly mx-auto mb-6 ${
              index % 2 === 1 ? "flex-row-reverse" : "flex-row"
            }`}
            >
                <div>{service.icon}</div>
                <div className="flex flex-col items-center text-left justify-evenly">
                    <div className="flex flex-col items-center text-center justify-between">
                        <p className="font-bold text-4xl mb-4 max-w-xl">{service.title}</p>
                        <p className="text-lg max-w-lg">{service.text}</p>
                    </div>
                    <Button className="w-4/5 bg-primary-400 hover:bg-primary-500 text-neutral-50">
                    Agenda Tu Cita
                    </Button>
                </div>
            </div>
        ))}
        </div>
    )
}

export default ServicesSection