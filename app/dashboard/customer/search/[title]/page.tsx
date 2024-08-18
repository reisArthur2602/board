import { Container } from '@/app/components/container';
import { db } from '@/app/lib/prisma';

type SearchResultsProps = {
  params: { title: string };
};
const SearchResults = async ({ params }: SearchResultsProps) => {
  const customers = await db.customer.findMany({
    where: { name: { contains: params.title, mode: 'insensitive' } },
  });

  console.log(customers);
  return <Container>SearchResults</Container>;
};

export default SearchResults;
