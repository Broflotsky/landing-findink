'use client'
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-[#108E8B]/90" />
      <div className="absolute inset-0 bg-black bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative flex min-h-screen items-center justify-center">
        <div className="container px-4 py-32 text-center">
          <h1 className="mx-auto max-w-4xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
          Revolucionando el Mundo del Tatuaje

          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Conecta con los mejores artistas del tatuaje, muestra tu trabajo y gestiona tu negocio de tatuajes en un solo lugar.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2" onClick={() => window.open('https://app.findink.co/explorer')}>
              Explora nuestros diseños
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="secondary" onClick={() => window.open('https://app.findink.co/explorer')}>
              Conoce a nuestros artistas
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

