'use client';
import { useSideBar } from '../providers/sidebar';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { signOut, useSession } from 'next-auth/react';
import {
  ArrowLeftStartOnRectangleIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';
import { TicketIcon } from '@heroicons/react/20/solid';
import { SearchInput } from './search-input';

export const Sidebar = () => {
  const { data } = useSession();
  const { handleOpenSidebar } = useSideBar();
  const handleLogoutWithClick = () => signOut();

  return (
    <div className="fixed inset-0 h-full w-full bg-slate-950/55">
      <aside
        className={`fixed inset-y-0 right-0 flex h-full w-full transform flex-col overflow-y-hidden bg-slate-950 p-8 text-slate-600 sm:w-[25rem]`}
      >
        <div className="flex items-center justify-between border-b border-solid border-slate-800 pb-6">
          <h2 className="font-bold capitalize text-slate-50">
            👋🏽 Olá!, {data?.user.name}
          </h2>
          <button onClick={handleOpenSidebar}>
            <XMarkIcon className="size-6 text-slate-50" />
          </button>
        </div>

        <SearchInput />
        <nav className="flex flex-1 flex-col justify-between py-8 *:w-full">
          <div className="flex flex-col gap-3 font-bold">
            <Link
              onClick={handleOpenSidebar}
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg p-3 transition-all duration-300 hover:bg-slate-800 hover:text-slate-50"
            >
              <TicketIcon className="size-6" />
              <>Chamados</>
            </Link>

            <Link
              onClick={handleOpenSidebar}
              href="/dashboard/customer"
              className="flex items-center gap-3 rounded-lg p-3 transition-all duration-300 hover:bg-slate-800 hover:text-slate-50"
            >
              <UserGroupIcon className="size-6" />
              <>Clientes</>
            </Link>
          </div>

          <button
            className="flex items-center gap-3 p-0 text-slate-50"
            onClick={handleLogoutWithClick}
          >
            <ArrowLeftStartOnRectangleIcon className="size-6" />
            <>Sair</>
          </button>
        </nav>
      </aside>
    </div>
  );
};
