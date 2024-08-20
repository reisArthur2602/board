import { Container } from '@/app/components/container';

import { db } from '@/app/lib/prisma';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import Link from 'next/link';
import { redirect } from 'next/navigation';

type SearchResultsProps = {
  searchParams: { title: string };
};
const SearchResults = async ({ searchParams }: SearchResultsProps) => {
  if (!searchParams.title) return redirect('/dashboard/customer');

  const customers = await db.customer.findMany({
    where: { name: { contains: searchParams.title, mode: 'insensitive' } },
  });

  const TABLE_HEAD = [
    { label: 'Nome' },
    { label: 'Telefone' },
    { label: 'CNPJ' },
    { label: 'Email' },
    { label: 'Cadastro' },
  ];

  return (
    <Container className="py-14">
      <h1 className="mb-6">Resultados para &quot;{searchParams.title}&quot;</h1>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[56.25rem] text-sm *:w-full *:text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((h, index) => (
                <th key={index} className="px-3 py-4 font-bold text-slate-800">
                  {h.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {customers.map((c) => (
              <tr
                className="border-t border-solid *:px-3 *:py-4 hover:bg-slate-950/5"
                key={c.id}
              >
                <td className="capitalize">
                  <Link href={`/dashboard/customer/${c.id}`}>{c.name}</Link>
                </td>
                <td>
                  <Link href={`/dashboard/customer/${c.id}`}>{c.phone}</Link>
                </td>
                <td>
                  <Link href={`/dashboard/customer/${c.id}`}>{c.cnpj}</Link>
                </td>
                <td>
                  <Link href={`/dashboard/customer/${c.id}`}>{c.email}</Link>
                </td>
                <td className="capitalize">
                  <Link href={`/dashboard/customer/${c.id}`}>
                    {c.created_at &&
                      format(c.created_at, 'MMMM dd, yyyy', {
                        locale: ptBR,
                      })}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default SearchResults;
