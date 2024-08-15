"use client"
import React from "react"
import { Container } from "./container"
import Image from "next/image"
import { signIn } from "next-auth/react"

export const Header = () => {
  const handleLoginWithGoogleClick = () => signIn("google")

  return (
    <header className="bg-white py-7">
      <Container className="flex items-center justify-between">
        <Image
          alt="Logo do Board"
          src="/board-logo.svg"
          width={120}
          height={44}
        />
        <button
          className="bg-slate-800 text-slate-50"
          onClick={handleLoginWithGoogleClick}
        >
          Comece Agora
        </button>
      </Container>
    </header>
  )
}
