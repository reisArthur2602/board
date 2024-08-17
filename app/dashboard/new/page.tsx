import { Container } from '@/app/components/container';
import { NavMenu } from '@/app/components/nav-menu';
import React from 'react';
import { FormTicket } from './components/form-ticket';
import { db } from '@/app/lib/prisma';

const NewTicket = async () => {
  const paths = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/customer/new', label: 'Cadastrar Cliente' },
  ];

  const customers = await db.customer.findMany();

  return (
    <Container>
      <div className="my-14">
        <NavMenu paths={paths} />
      </div>

      <section>
        <h1 className="mb-6">Informações do chamado</h1>
      </section>

      <FormTicket customers={customers} />
    </Container>
  );
};

export default NewTicket;
