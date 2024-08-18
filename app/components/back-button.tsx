import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

type BackButtonProps = {
  href: string;
};

export const BackButton = ({ href }: BackButtonProps) => {
  return (
    <button className="w-fit border border-solid px-1" type="button">
      <Link href={href}>
        <ChevronLeftIcon className="size-6" />
      </Link>
    </button>
  );
};
