import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative h-screen bg-black">
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9mFr2imO8DEw2tsovevEj9GTRYh4Vj.png"
          alt="Tattoo artist working"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Arte que perdura en tu piel
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-300">
          Encuentra al artista perfecto para tu próximo tatuaje
        </p>
        <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
          Reserva tu cita
        </Button>
      </div>
    </section>
  )
}

