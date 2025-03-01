/* eslint-disable @typescript-eslint/no-explicit-any */
import { Palette, Calendar, Shield, Users, Search, BookCheck, Star, Lightbulb } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Feature {
  title: string
  description: string
  icon: any // Idealmente usar un tipo más específico para los iconos de Lucide
}

const features = {
  artists: [
    {
      title: "Muestra tu arte",
      description: "Crea un impresionante portafolio para mostrar tus mejores trabajos",
      icon: Palette,
    },
    {
      title: "Gestiona reservas",
      description: "Maneja tu agenda y citas sin esfuerzo",
      icon: Calendar,
    },
    {
      title: "Pagos seguros",
      description: "Recibe pagos de forma segura y fácil",
      icon: Shield,
    },
    {
      title: "Aumenta tu audiencia",
      description: "Incrementa tu visibilidad y atrae nuevos clientes",
      icon: Users,
    },
  ],
  clients: [
    {
      title: "Encuentra tu artista ideal",
      description: "Explora portafolios y encuentra al artista perfecto para tu tatuaje",
      icon: Search,
    },
    {
      title: "Reserva facilmente",
      description: "Agenda citas con tus artistas favoritos sin complicaciones",
      icon: BookCheck,
    },
    {
      title: "Lee y escribe reseñas",
      description: "Comparte tus experiencias y lee las opiniones de otros",
      icon: Star,
    },
    {
      title: "Inspírate",
      description: "Explora una amplia galería de diseños de tatuajes para inspirarte",
      icon: Lightbulb,
    },
  ],
}

const FeatureCard = ({ feature }: { feature: Feature }) => {
  const Icon = feature.icon
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="mb-4 rounded-full bg-[#108E8B]/10 p-3">
        <Icon className="h-6 w-6 text-[#108E8B]" />
      </div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  )
}

const FeaturesGrid = ({ features }: { features: Feature[] }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {features.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section id="caracteristicas" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Características
        </h2>
        <Tabs defaultValue="artistas" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="artistas">Para artistas</TabsTrigger>
            <TabsTrigger value="clientes">Para clientes</TabsTrigger>
          </TabsList>
          <TabsContent value="artistas" className="mt-4">
            <FeaturesGrid features={features.artists} />
          </TabsContent>
          <TabsContent value="clientes" className="mt-4">
            <FeaturesGrid features={features.clients} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
