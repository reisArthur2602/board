'use client';
import React from 'react';
import { useSideBar } from '../providers/sidebar';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { useSession } from 'next-auth/react';

export const Sidebar = () => {
  const { data } = useSession();
  const { handleOpenSidebar } = useSideBar();

  return (
    <div className="absolute flex h-full w-full justify-end bg-slate-950/30">
      <aside className="right-0 h-full w-[18.75rem] transform bg-slate-950 p-8">
        <div className="flex items-center justify-between border-b border-solid border-slate-800 pb-6">
          <h2 className="font-bold capitalize text-slate-50">
            Olá, {data?.user.name}
          </h2>
          <button onClick={handleOpenSidebar}>
            <XMarkIcon className="size-6 text-slate-50" />
          </button>
        </div>
        <nav className="flex flex-col justify-between">...</nav>
      </aside>
    </div>
  );
};
