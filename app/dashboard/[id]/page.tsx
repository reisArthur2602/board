import { Container } from '@/app/components/container';

type DetailsTicketProps = {
  params: { id: string };
};
const DetailsTicket = ({ params }: DetailsTicketProps) => {
  console.log(params.id);
  return <Container>DetailsTicket</Container>;
};
export default DetailsTicket;
