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

  const customers = await db.customer.findMany();

  return (
    <Container>
      <section className="mt-14 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1>Clientes</h1>
          <button className="bg-cyan-500 text-slate-50">
            <Link href="/dashboard/new">Cadastrar Cliente</Link>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[56.25rem] *:w-full *:text-left">
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
                <tr key={c.id} className="border-t border-solid *:px-3 *:py-4">
                  <td className="capitalize">{c.name}</td>
                  <td>{c.phone}</td>
                  <td>{c.cnpj}</td>
                  <td>{c.email}</td>
                  <td className="capitalize">
                    {c.created_at &&
                      format(c.created_at, 'MMMM dd, yyyy', { locale: ptBR })}
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
