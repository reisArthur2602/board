'use client';
import { DeleteCustomer } from '@/app/actions/customer/delete-customer';
import {
  formatCategory,
  formatPriority,
  formatType,
} from '@/app/utils/format-table';
import { CalendarIcon } from '@heroicons/react/16/solid';
import { Prisma } from '@prisma/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

type InfoCustomerProps = {
  customer: Prisma.CustomerGetPayload<{
    include: { tickets: { include: { User: true } } };
  }> | null;
};

export const InfoCustomer = ({ customer }: InfoCustomerProps) => {
  const TABLE_HEAD = [
    { label: 'Tipo' },
    { label: 'Categoria' },
    { label: 'Prioridade' },
    { label: 'Cadastro' },
    { label: 'Responsável' },
  ];

  const handleDeleteCustomer = () => {
    try {
      if (customer) DeleteCustomer(customer.id);
    } catch (error) {
      console.log('Falha ao deletar cliente');
    }
  };

  return (
    <section className="flex flex-col gap-14">
      <div className="flex justify-between">
        <div>
          <h1>{customer?.id}</h1>
          <span className="flex items-center gap-3 capitalize">
            <CalendarIcon className="size-4" />
            {customer?.created_at &&
              format(customer.created_at, 'MMMM dd, yyyy', { locale: ptBR })}
          </span>
        </div>
        <button
          className="bg-cyan-500 text-slate-50"
          onClick={handleDeleteCustomer}
        >
          Excluir Cliente
        </button>
      </div>

      <div className="flex flex-col">
        <h3 className="mb-3 text-sm font-bold text-slate-800">SUMÁRIO</h3>

        <span className="flex items-center gap-3 border-t border-solid py-4 capitalize">
          <b>Nome:</b>
          <p>{customer?.name}</p>
        </span>

        <span className="flex items-center gap-3 border-t border-solid py-4">
          <b>Email:</b>
          <p>{customer?.email}</p>
        </span>

        <span className="flex items-center gap-3 border-t border-solid py-4">
          <b>Telefone:</b>
          <p>{customer?.phone}</p>
        </span>

        <span className="flex items-center gap-3 border-t border-solid py-4">
          <b>CNPJ:</b>
          <p>{customer?.cnpj}</p>
        </span>
      </div>

      <div>
        <h3 className="mb-6 text-sm font-bold text-slate-800">CHAMADOS</h3>

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
            {customer?.tickets.map((t) => (
              <tr
                key={t.id}
                className="cursor-pointer border-t border-solid *:px-3 *:py-4 hover:bg-slate-950/5"
              >
                <td>{formatType(t.type)}</td>
                {/* <td className="capitalize">{t.customer?.name}</td> */}
                <td>{formatCategory(t.category)}</td>
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
  );
};
