import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

type NavMenuProps = {
  paths: {
    href: string;
    label: string;
  }[];
};

export const NavMenu = ({ paths }: NavMenuProps) => {
  return (
    <nav>
      <ol className="flex space-x-2 text-sm sm:text-base">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center gap-3">
            {index < paths.length - 1 ? (
              <>
                <Link href={path.href} className="hover:text-cyan-500">
                  {path.label}
                </Link>

                <ChevronRightIcon className="size-5" />
              </>
            ) : (
              <span className="font-bold text-cyan-500">{path.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
