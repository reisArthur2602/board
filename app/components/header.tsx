import React from "react"
import { Container } from "./container"
import Image from "next/image"

export const Header = () => {
  return (
    <header className="bg-white py-7">
      <Container className="flex items-center justify-between">
        <Image
          alt="Logo do Board"
          src="/board-logo.svg"
          width={120}
          height={44}
        />
        <button className="bg-slate-800 text-slate-50">Comece Agora</button>
      </Container>
    </header>
  )
}
