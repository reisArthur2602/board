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
  });

  return (
    <Container>
      <section className="mt-14 flex flex-col gap-6">
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
                  <td className="capitalize">{t.customer?.name}</td>
                  <td>{formatCategory(t.category)}</td>
                  <td>{formatType(t.type)}</td>
                  <td>{formatPriority(t.priority)}</td>
                  <td className="capitalize">
                    {t.updated_at &&
                      format(t.updated_at, 'MMMM dd, yyyy', { locale: ptBR })}
                  </td>
                  <td className="capitalize">{t.User?.name}</td>
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
