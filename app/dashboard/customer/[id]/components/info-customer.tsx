import { Customer, Ticket } from '@prisma/client';

interface CustomerIncludesTickets extends Customer {
  tickets: Ticket[];
}

type InfoCustomerProps = {
  customer: CustomerIncludesTickets | null;
};

export const InfoCustomer = ({ customer }: InfoCustomerProps) => {
  console.log(customer);
  return <div>InfoCustomer</div>;
};
