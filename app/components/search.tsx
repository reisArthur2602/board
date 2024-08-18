'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const Search = () => {
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleSubmitSearch = () =>
    router.push(`/dashboard/customer/search/${title}`);

  return (
    <div className="flex w-full max-w-[37.5rem] items-center gap-2">
      <input
        placeholder="Buscar por cliente"
        className="w-full border-none bg-slate-200 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="flex size-11 items-center justify-center bg-cyan-500 p-0 text-slate-50"
        onClick={handleSubmitSearch}
      >
        <MagnifyingGlassIcon className="size-5" />
      </button>
    </div>
  );
};
