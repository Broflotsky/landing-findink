import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const artists = [
  {
    name: "Alex Rivera",
    specialty: "Realismo & Retratos",
    experience: "8 años",
    image: "/placeholder.svg?height=400&width=300",
    styles: ["Realismo", "Black & Grey", "Retratos"],
  },
  {
    name: "Luna Chen",
    specialty: "Neo Traditional",
    experience: "6 años",
    image: "/placeholder.svg?height=400&width=300",
    styles: ["Neo Traditional", "Color", "Japonés"],
  },
  {
    name: "Marco Díaz",
    specialty: "Blackwork",
    experience: "5 años",
    image: "/placeholder.svg?height=400&width=300",
    styles: ["Blackwork", "Geométrico", "Minimalista"],
  },
]

export function ArtistsSection() {
  return (
    <section id="artists" className="bg-black py-24 flex justify-center items-center">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Artistas Destacados
          </h2>
          <p className="mt-4 text-gray-400">
            Cada artista aporta su estilo único y años de experiencia
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <Card
              key={artist.name}
              className="group overflow-hidden border-white/10 bg-black/50 transition-colors hover:bg-black/80"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={300}
                    height={400}
                    className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {artist.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {artist.specialty} • {artist.experience}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {artist.styles.map((style) => (
                      <Badge
                        key={style}
                        variant="secondary"
                        className="bg-white/10"
                      >
                        {style}
                      </Badge>
                    ))}
                  </div>
                  <Button className="mt-6 w-full" variant="secondary">
                    Ver portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

