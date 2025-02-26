import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cómo elijo mi primer tatuaje?",
    answer: "Toma tu tiempo para investigar estilos, artistas y diseños. Considera el significado personal y la ubicación del tatuaje. Nuestros artistas pueden ayudarte a refinar tu idea."
  },
  {
    question: "¿Cuál es el proceso de reserva?",
    answer: "Contacta con nosotros para discutir tu idea, programar una consulta y realizar un depósito para asegurar tu cita."
  },
  {
    question: "¿Qué debo hacer antes de mi cita?",
    answer: "Descansa bien, come antes de tu sesión y evita el alcohol. Usa ropa cómoda y sigue las instrucciones específicas de tu artista."
  }
]

export function FaqSection() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
          Preguntas Frecuentes
        </h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

