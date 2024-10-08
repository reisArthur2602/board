import { Container } from '@/app/components/container';
import { NavMenu } from '@/app/components/nav-menu';
import React from 'react';
import { FormTicket } from './components/form-ticket';
import { db } from '@/app/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

const NewTicket = async () => {
  const paths = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/customer/new', label: 'Cadastrar Cliente' },
  ];

  const customers = await db.customer.findMany();

  const session = await getServerSession(authOptions);
  const user_id = session?.user.id as string;

  return (
    <Container className="py-14">
      <div className="mb-14">
        <NavMenu paths={paths} />
      </div>

      <section>
        <h1 className="mb-6">Informações do chamado</h1>
        <FormTicket customers={customers} userId={user_id} />
      </section>
    </Container>
  );
};

export default NewTicket;
