import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

export const Search = () => {
  return (
    <div className="flex w-full max-w-[37.5rem] items-center gap-2">
      <input
        placeholder="Buscar por cliente"
        className="w-full border-none bg-slate-200 outline-none"
      />
      <button className="flex size-11 items-center justify-center bg-cyan-500 p-0 text-slate-50">
        <MagnifyingGlassIcon className="size-5" />
      </button>
    </div>
  );
};
