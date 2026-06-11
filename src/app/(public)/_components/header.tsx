"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { LogIn, Menu } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const session = null

  const navItems = [{ href: "#profissionais", label: "Profissionais" }]

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          className="bg-transparent hover:bg-transparent text-black shadow-none"
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
      {session ? (
        <Link href="/dashboard" className="flex items-center justify-center gap-2">
          Acessar clinica
        </Link>
      ) : (
        <Button>
          <LogIn />
          Painel da clinica
        </Button>
      )}
    </>
  )

  return (
    <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-3xl font-bold text-zinc-500" href="/">
          Odonto<span className="text-emerald-500">PRO</span>
        </Link>

        <nav className="hidden md:flex items-center">
          <NavLinks />
        </nav>

        {/* esse componente Sheet é uma lib(modal) */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            className="md:hidden"
            render={
              <Button className="text-black hover:bg-transparent" variant="ghost" size="icon" />
            }
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px] z-[9999]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Veja nossos links</SheetDescription>
              <nav className="flex flex-col space-y-4 mt-6">
                <NavLinks />
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
