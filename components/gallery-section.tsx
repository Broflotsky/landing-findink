'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

interface DesignImage {
  attributes: {
    formats: {
      medium: {
        url: string
      }
    }
    url: string
  }
}

interface Design {
  id: number
  attributes: {
    type: string
    description: string
    image: {
      data: DesignImage
    }
    artist_profile_designs: {
      data: {
        attributes: {
          nickName: string
          slug: string
        }
      }
    }
  }
}

export function GallerySection() {
  const [designs, setDesigns] = useState<Design[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const res = await fetch('https://api.findink.co/api/designs?populate[image][populate]=*&populate[artist_profile_designs][populate]=locations&sort=createdAt%3Adesc')
        
        if (!res.ok) {
          throw new Error('Failed to fetch designs')
        }
        
        const data = await res.json()
        setDesigns(data.data)
      } catch (error) {
        console.error('Error fetching designs:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDesigns()
  }, [])

  if (isLoading) {
    return (
      <section id="gallery" className="bg-black py-24 flex justify-center items-center">
        <div className="container px-4 text-center text-white">
          Cargando galería...
        </div>
      </section>
    )
  }

  return (
    <section id="gallery" className="bg-black py-24 flex justify-center items-center">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Galería de Arte
          </h2>
          <p className="mt-4 text-gray-400">
            Explora nuestra colección de obras únicas
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {designs.map((design) => {
            const imageUrl = design.attributes.image?.data?.attributes?.formats?.medium?.url || 
                           design.attributes.image?.data?.attributes?.url ||
                           '/placeholder.svg?height=400&width=300'

            return (
              <div
                key={design.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <Image
                  src={imageUrl}
                  alt={design.attributes.description || 'Diseño de tatuaje'}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold">
                      {design.attributes.artist_profile_designs?.data?.attributes?.nickName || 'Artista'}
                    </p>
                    <p className="text-white/80 text-sm mt-1">
                      {design.attributes.type || 'Diseño'}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
