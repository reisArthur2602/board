'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSideBar } from '../providers/sidebar';

export const SearchInput = () => {
  const [title, setTitle] = useState('');
  const router = useRouter();
  const { handleOpenSidebar } = useSideBar();

  const handleSubmitSearch = () => {
    handleOpenSidebar();
    router.push(`/dashboard/customer/search?title=${title}`);
  };

  return (
    <div className="mt-6 flex w-full max-w-[21.875rem] items-center gap-2">
      <input
        placeholder="Buscar por cliente"
        className="w-full border-none bg-slate-800 text-slate-50 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="flex size-11 items-center justify-center bg-cyan-500 p-0 text-slate-50"
        onClick={handleSubmitSearch}
      >
        <MagnifyingGlassIcon className="size-6" />
      </button>
    </div>
  );
};
