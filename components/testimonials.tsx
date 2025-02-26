import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: "María G.",
    text: "Una experiencia increíble. El artista entendió perfectamente mi visión.",
    image: "/placeholder.svg?height=60&width=60"
  },
  {
    name: "Carlos R.",
    text: "Profesionalismo y calidad excepcional. Superó mis expectativas.",
    image: "/placeholder.svg?height=60&width=60"
  }
]

export function Testimonials() {
  return (
    <section className="bg-black py-20">
      <div className="container px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-900">
              <CardContent className="flex items-start gap-4 p-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="mb-2 text-gray-300">{testimonial.text}</p>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

