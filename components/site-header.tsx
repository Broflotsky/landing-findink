"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MobileNav } from "./mobile-nav"
import logo from "../public/findinklogo.svg"


export function SiteHeader() {
  return (
    <header id="header" className="sticky top-0 z-50 w-full border-b border-white/10 bg-black backdrop-blur-xl flex justify-evenly items-center">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="relative h-8 w-32">
          <Image
            src={logo}
            alt="FindInk"
            fill
            className="object-contain brightness-0 invert"
            priority
          />
        </Link>

        <nav className="hidden space-x-6 text-sm font-medium text-white/70 md:flex">
          <Link href="/explore" className="hover:text-white">
            Explorar
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <Button variant="ghost" className="text-white hover:text-black ">
            Inicia sesión
          </Button>
          <Button>Regístrate</Button>
        </div>

        <MobileNav />
      </div>
    </header>
  )
}
