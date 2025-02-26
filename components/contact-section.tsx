import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="bg-black py-24 flex justify-center items-center">
      <div className="container px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Contacta con Nosotros
            </h2>
            <p className="mt-4 text-gray-400">
              Estamos aquí para responder tus preguntas y ayudarte a dar el
              siguiente paso en tu viaje artístico
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>Calle Principal 123, Ciudad</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>info@inkcanvas.com</span>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <Button variant="outline" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <Card className="border-white/10 bg-white/5">
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>
                Cuéntanos sobre tu idea para el tatuaje
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Input
                      placeholder="Nombre"
                      className="border-white/10 bg-white/5"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="border-white/10 bg-white/5"
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    placeholder="Tu mensaje"
                    className="min-h-[150px] border-white/10 bg-white/5"
                  />
                </div>
                <Button className="w-full">Enviar mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

