import { Container } from '@/app/components/container';
import { NavMenu } from '@/app/components/nav-menu';
import { InfoTicket } from './components/info-ticket';
import { db } from '@/app/lib/prisma';

type DetailsTicketProps = {
  params: { id: string };
};
const DetailsTicket = async ({ params }: DetailsTicketProps) => {
  const ticket = await db.ticket.findUnique({
    where: { id: params.id },
    include: { customer: true, User: true },
  });

  const paths = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/customer', label: 'Detalhes do Chamado' },
  ];
  return (
    <Container className="py-14">
      <div className="mb-14">
        <NavMenu paths={paths} />
      </div>
      <InfoTicket ticket={ticket} />
    </Container>
  );
};
export default DetailsTicket;
