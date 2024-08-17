import { Container } from '@/app/components/container';
import { db } from '@/app/lib/prisma';
import { ptBR } from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';
import Link from 'next/link';

const Customer = async () => {
  const TABLE_HEAD = [
    { label: 'Nome' },
    { label: 'Telefone' },
    { label: 'CNPJ' },
    { label: 'Email' },
    { label: 'Cadastro' },
  ];

  const customers = await db.customer.findMany({
    orderBy: { created_at: 'desc' },
  });

  return (
    <Container className="py-14">
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1>Clientes</h1>
          <button className="bg-cyan-500 text-slate-50">
            <Link href="/dashboard/customer/new">Cadastrar Cliente</Link>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[56.25rem] text-sm *:w-full *:text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((h, index) => (
                  <th
                    key={index}
                    className="px-3 py-4 font-bold text-slate-800"
                  >
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
      </section>
    </Container>
  );
};

export default Customer;
