import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const artists = [
  {
    name: 'Realismo',
    image: '/placeholder.svg?height=400&width=300',
    specialty: 'Especialista en retratos'
  },
  {
    name: 'Neo Traditional',
    image: '/placeholder.svg?height=400&width=300',
    specialty: 'Diseños únicos y coloridos'
  },
  {
    name: 'Blackwork',
    image: '/placeholder.svg?height=400&width=300',
    specialty: 'Arte en negro y geometría'
  }
]

export function FeaturedArtists() {
  return (
    <section className="bg-black py-20">
      <div className="container px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Tatuadores Destacados
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <Card key={artist.name} className="bg-gray-900 text-white">
              <CardContent className="p-0">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={300}
                  height={400}
                  className="h-[400px] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{artist.name}</h3>
                  <p className="text-gray-400">{artist.specialty}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

