import { Prisma } from '@prisma/client';

type InfoTicketProps = {
  ticket: Prisma.TicketGetPayload<{
    include: { customer: true; User: true };
  }> | null;
};

export const InfoTicket = ({ ticket }: InfoTicketProps) => {
  console.log(ticket);
  return <section className="flex flex-col gap-14">InfoTicket</section>;
};
