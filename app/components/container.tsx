import React from 'react';
import { twMerge } from 'tailwind-merge';

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={twMerge('mx-auto w-full max-w-7xl px-3', className)}>
      {children}
    </div>
  );
};
