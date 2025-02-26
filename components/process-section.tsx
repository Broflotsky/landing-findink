import { Card, CardContent } from "@/components/ui/card"
import { Palette, Calendar, Pencil, Sparkles, MessageSquare, Clock } from 'lucide-react'

const steps = [
  {
    title: "Consulta inicial",
    description:
      "Discutimos tu idea, estilo y ubicación del tatuaje en una sesión personalizada.",
    icon: MessageSquare,
  },
  {
    title: "Diseño conceptual",
    description:
      "Nuestros artistas crean bocetos personalizados basados en tu visión.",
    icon: Pencil,
  },
  {
    title: "Refinamiento",
    description:
      "Ajustamos el diseño según tus comentarios hasta lograr el resultado perfecto.",
    icon: Palette,
  },
  {
    title: "Programación",
    description:
      "Elegimos la fecha ideal para tu sesión considerando el tamaño y complejidad.",
    icon: Calendar,
  },
  {
    title: "Preparación",
    description:
      "Te proporcionamos guías detalladas para prepararte para tu sesión.",
    icon: Clock,
  },
  {
    title: "La experiencia",
    description:
      "Creamos tu tatuaje en un ambiente profesional, seguro y confortable.",
    icon: Sparkles,
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative bg-black py-24 flex justify-center items-center">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Nuestro Proceso
          </h2>
          <p className="mt-4 text-gray-400">
            Un viaje personalizado desde la idea hasta la obra final
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-white/10 bg-white/5 transition-colors hover:bg-white/10"
            >
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

