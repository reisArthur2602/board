import { Container } from '@/app/components/container';

type SearchResultsProps = {
  params: { title: string };
};
const SearchResults = ({ params }: SearchResultsProps) => {
  console.log(params.title);
  return <Container>SearchResults</Container>;
};

export default SearchResults;
