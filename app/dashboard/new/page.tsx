import { Container } from '@/app/components/container';
import { NavMenu } from '@/app/components/nav-menu';
import React from 'react';

const NewTicket = () => {
  const paths = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/customer/new', label: 'Cadastrar Cliente' },
  ];
  return (
    <Container>
      <div className="my-14">
        <NavMenu paths={paths} />
      </div>

      <section>
        <h1 className="mb-6">Informações do chamado</h1>
      </section>
    </Container>
  );
};

export default NewTicket;
