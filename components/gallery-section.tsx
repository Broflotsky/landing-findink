import Image from "next/image"

const galleryImages = [
  {
    src: "/placeholder.svg?height=400&width=300",
    alt: "Tatuaje estilo realista",
  },
  {
    src: "/placeholder.svg?height=400&width=300",
    alt: "Tatuaje neo tradicional",
  },
  {
    src: "/placeholder.svg?height=400&width=300",
    alt: "Tatuaje minimalista",
  },
  {
    src: "/placeholder.svg?height=400&width=300",
    alt: "Tatuaje blackwork",
  },
  {
    src: "/placeholder.svg?height=400&width=300",
    alt: "Tatuaje acuarela",
  },
  {
    src: "/placeholder.svg?height=400&width=300",
    alt: "Tatuaje japonés",
  },
]

export function GallerySection() {
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
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

