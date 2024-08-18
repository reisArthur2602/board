'use client';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { SearchInput } from './search-input';

export const Header = () => {
  const handleLoginWithGoogleClick = () => signIn('google');
  const handleLogoutWithClick = () => signOut();
  const { status } = useSession();

  return (
    <header className="bg-white py-7">
      <Container className="flex items-center justify-between">
        <Image
          alt="Logo do Board"
          src="/board-logo.svg"
          width={120}
          height={44}
        />

        {status === 'unauthenticated' && (
          <button
            className="bg-slate-800 text-slate-50"
            onClick={handleLoginWithGoogleClick}
          >
            Comece Agora
          </button>
        )}

        {status === 'authenticated' && (
          <>
            <SearchInput />
            <nav className="flex items-center gap-6">
              <Link href="/dashboard" className="hover:text-cyan-500">
                Chamados
              </Link>
              <Link href="/dashboard/customer" className="hover:text-cyan-500">
                Clientes
              </Link>
              <button
                className="bg-slate-800 text-slate-50"
                onClick={handleLogoutWithClick}
              >
                Sair
              </button>
            </nav>
          </>
        )}
      </Container>
    </header>
  );
};
