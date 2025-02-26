import Image from 'next/image'

const styles = [
  {
    name: 'Realismo',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    name: 'Tradicional',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    name: 'Minimalista',
    image: '/placeholder.svg?height=300&width=300'
  }
]

export function TrendingStyles() {
  return (
    <section className="bg-black py-20">
      <div className="container px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Estilos en Tendencia
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {styles.map((style) => (
            <div
              key={style.name}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={style.image}
                alt={style.name}
                width={300}
                height={300}
                className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-2xl font-bold text-white">{style.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

