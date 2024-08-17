import { CalendarIcon } from '@heroicons/react/16/solid';
import { Customer, Ticket } from '@prisma/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

interface CustomerIncludesTickets extends Customer {
  tickets: Ticket[];
}

type InfoCustomerProps = {
  customer: CustomerIncludesTickets | null;
};

export const InfoCustomer = ({ customer }: InfoCustomerProps) => {
  console.log(customer);
  return (
    <section className="flex flex-col gap-14">
      {/* title and button action */}
      <div className="flex justify-between">
        <div>
          <h1>{customer?.id}</h1>
          <span className="flex items-center gap-3 capitalize">
            <CalendarIcon className="size-4" />
            {customer?.created_at &&
              format(customer.created_at, 'MMMM dd, yyyy', { locale: ptBR })}
          </span>
        </div>
        <button className="bg-cyan-500 text-slate-50">Excluir Cliente</button>
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
    </section>
  );
};
