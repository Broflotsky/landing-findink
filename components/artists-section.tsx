/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ArtistProfile {
  id: number
  attributes: {
    nickName: string
    slug: string
    locations: {
      data: any[]
    }
    profilePicture: {
      data: {
        attributes: {
          url: string
          formats: {
            medium: {
              url: string
            }
          }
        }
      }
    }
  }
}

async function getArtistProfiles() {
  
  const res = await fetch('https://back.findink.co/api/artist-profiles?populate[locations][populate]=city&populate[profilePicture][populate]=*&fields[6]=nickName&fields[7]=slug&pagination[pageSize]=6', {
    next: { revalidate: 3600 } // Revalidate every hour
  })
  
  if (!res.ok) {
    throw new Error('Failed to fetch artist profiles')
  }
  
  const data = await res.json()
  return data.data as ArtistProfile[]
}

export async function ArtistsSection() {
  
  const artists = await getArtistProfiles()

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
              key={artist.id}
              className="group overflow-hidden border-white/10 bg-black/50 transition-colors hover:bg-black/80"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={artist.attributes.profilePicture?.data?.attributes?.formats?.medium?.url || '/placeholder.svg?height=400&width=300'}
                    alt={artist.attributes.nickName}
                    width={300}
                    height={400}
                    className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {artist.attributes.nickName}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-teal-500"
                    >
                      Tatuador
                    </Badge>
                  </div>
                  <Button className="mt-6 w-full" variant="secondary" onClick={() => window.open(`https://app.findink.co/artist/${artist.attributes.slug}`)}>
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
