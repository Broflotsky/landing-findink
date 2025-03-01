"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-black/95">
        <nav className="flex flex-col space-y-4 mt-6">
          <Link href="https://app.findink.co/explorer" className="text-lg text-white/70 hover:text-white" onClick={() => setOpen(false)}>
            Explorar
          </Link>
          <Link href="https://app.findink.co/blog" className="text-lg text-white/70 hover:text-white" onClick={() => setOpen(false)}>
            Blog
          </Link>
        </nav>
        <div className="mt-6 space-y-4">
          <Button variant="ghost" className="w-full justify-start text-white/70 hover:text-white" onClick={() => window.open('https://app.findink.co/auth/login')}>
            Inicia sesión
          </Button>
          <Button className="w-full"  onClick={() => window.open('https://app.findink.co/auth/register')}>Regístrate</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

