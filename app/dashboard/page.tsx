import React from 'react';
import { Container } from '../components/container';
import Link from 'next/link';
import { db } from '../lib/prisma';
import {
  formatCategory,
  formatPriority,
  formatType,
} from '../utils/format-table';
import { ptBR } from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';

const Dashboard = async () => {
  const TABLE_HEAD = [
    { label: 'Clientes' },
    { label: 'Categoria' },
    { label: 'Tipo' },
    { label: 'Prioridade' },
    { label: 'Cadastro' },
    { label: 'Responsável' },
  ];

  const tickets = await db.ticket.findMany({
    include: { User: true, customer: true },
    orderBy: { updated_at: 'desc' },
  });

  return (
    <Container className="py-14">
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1>Chamados</h1>
          <button className="bg-cyan-500 text-slate-50">
            <Link href="/dashboard/new">Cadastrar Chamado</Link>
          </button>
        </div>

        <div className="w-full overflow-x-auto">
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
              {tickets.map((t) => (
                <tr
                  key={t.id}
                  className="cursor-pointer border-t border-solid *:px-3 *:py-4 hover:bg-slate-950/5"
                >
                  <td className="capitalize">
                    <Link href={`/dashboard/${t.id}`}>{t.customer?.name}</Link>
                  </td>

                  <td>
                    <Link href={`/dashboard/${t.id}`}>
                      {formatCategory(t.category)}
                    </Link>
                  </td>

                  <td>
                    <Link href={`/dashboard/${t.id}`}>
                      {formatType(t.type)}
                    </Link>
                  </td>
                  <td>
                    <Link href={`/dashboard/${t.id}`}>
                      {formatPriority(t.priority)}
                    </Link>
                  </td>
                  <td className="capitalize">
                    <Link href={`/dashboard/${t.id}`}>
                      {t.updated_at &&
                        format(t.updated_at, 'MMMM dd, yyyy', { locale: ptBR })}
                    </Link>
                  </td>
                  <td className="capitalize">
                    <Link href={`/dashboard/${t.id}`}>{t.User?.name}</Link>
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

export default Dashboard;
