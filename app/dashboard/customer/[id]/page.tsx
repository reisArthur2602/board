import { Container } from '@/app/components/container';
import React from 'react';

type DetailsCustomerProps = {
  id: string;
};

const DetailsCustomer = ({ id }: DetailsCustomerProps) => {
  console.log(id);
  return <Container>DetailsCustomer</Container>;
};

export default DetailsCustomer;
