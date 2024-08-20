import { getServerSession } from 'next-auth';
import React, { ReactNode } from 'react';
import { authOptions } from '../lib/auth';
import { redirect } from 'next/navigation';

type PrivateLayoutProps = {
  children: ReactNode;
};

const PrivateLayout = async ({ children }: PrivateLayoutProps) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/');
  return <>{children}</>;
};

export default PrivateLayout;
