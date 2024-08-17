import { Container } from '@/app/components/container';
import { NavMenu } from '@/app/components/nav-menu';
import React from 'react';

type DetailsCustomerProps = {
  params: { id: string };
};

const DetailsCustomer = ({ params }: DetailsCustomerProps) => {
  const paths = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/customer', label: 'Clientes' },
    { href: '/dashboard/customer/details', label: 'Detalhes do cliente' },
  ];
  console.log(params.id);
  return (
    <Container>
      <div className="my-14">
        <NavMenu paths={paths} />
      </div>
      ...
    </Container>
  );
};

export default DetailsCustomer;
