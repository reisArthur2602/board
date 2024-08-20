'use client';

import { Container } from './container';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import { useSideBar } from '../providers/sidebar';

export const Header = () => {
  const { handleOpenSidebar } = useSideBar();
  const handleLoginWithGoogleClick = () => signIn('google');

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
          <button
            onClick={handleOpenSidebar}
            className="h-fit border border-solid p-1"
          >
            <Bars3Icon className="size-6 text-slate-800" />
          </button>
        )}
      </Container>
    </header>
  );
};
