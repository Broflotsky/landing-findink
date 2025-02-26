import { Button } from '@/components/ui/button'

export function StudioInfo() {
  return (
    <section className="bg-teal-600 py-20">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            ¿Tienes un Estudio de Tatuajes?
          </h2>
          <p className="mb-8 text-lg text-white/90">
            Únete a nuestra plataforma y conecta con clientes que buscan tu estilo único. 
            Aumenta tu visibilidad y gestiona tus reservas de manera eficiente.
          </p>
          <Button size="lg" variant="secondary">
            Más Información
          </Button>
        </div>
      </div>
    </section>
  )
}

