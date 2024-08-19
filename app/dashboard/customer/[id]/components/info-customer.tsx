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
import Link from 'next/link';
import { toast } from 'react-toastify';

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
      if (customer)
        DeleteCustomer(customer.id).then(() =>
          toast.success('Cliente deletado com sucesso!'),
        );
    } catch (error) {
      toast.error('Falha ao deletar cliente');
    }
  };

  return (
    <section className="flex flex-col gap-14">
      <div className="flex flex-col justify-between gap-6 sm:flex-row">
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
              {customer?.tickets.map((ticket) => (
                <tr
                  key={ticket.id}
                  className="cursor-pointer border-t border-solid *:px-3 *:py-4 hover:bg-slate-950/5"
                >
                  <td>
                    <Link href={`/dashboard/${ticket.id}`}>
                      {formatCategory(ticket.category)}
                    </Link>
                  </td>

                  <td>
                    <Link href={`/dashboard/${ticket.id}`}>
                      {formatType(ticket.type)}
                    </Link>
                  </td>
                  <td>
                    <Link href={`/dashboard/${ticket.id}`}>
                      {formatPriority(ticket.priority)}
                    </Link>
                  </td>
                  <td className="capitalize">
                    <Link href={`/dashboard/${ticket.id}`}>
                      {ticket.updated_at &&
                        format(ticket.updated_at, 'MMMM dd, yyyy', {
                          locale: ptBR,
                        })}
                    </Link>
                  </td>
                  <td className="capitalize">
                    <Link href={`/dashboard/${ticket.id}`}>
                      {ticket.User?.name}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
