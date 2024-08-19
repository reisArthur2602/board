'use client';
import { DeleteTicket } from '@/app/actions/ticket/delete-ticket';
import { FinishTicket } from '@/app/actions/ticket/finish-ticket';
import {
  formatCategory,
  formatPriority,
  formatType,
} from '@/app/utils/format-table';
import { CalendarIcon } from '@heroicons/react/16/solid';
import { Prisma } from '@prisma/client';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { toast } from 'react-toastify';

type InfoTicketProps = {
  ticket: Prisma.TicketGetPayload<{
    include: { customer: true; User: true };
  }> | null;
};

export const InfoTicket = ({ ticket }: InfoTicketProps) => {
  const handleFinishTicket = () => {
    try {
      if (ticket)
        FinishTicket(ticket.id).then(() =>
          toast.success('O Chamado foi finalizado com sucesso!'),
        );
    } catch (error) {
      toast.error('Falha ao finalizar chamado');
    }
  };

  const handleDeleteTicket = () => {
    try {
      if (ticket)
        DeleteTicket(ticket.id).then(() =>
          toast.success('O Chamado foi removido com sucesso!'),
        );
    } catch (error) {
      toast.error('Falha ao remover chamado');
    }
  };

  return (
    <section className="flex flex-col gap-14">
      {/* TITLE AND BUTTONS */}
      <div className="flex flex-col justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <h1>{ticket?.title}</h1>
          <span className="flex items-center justify-center gap-3 capitalize sm:justify-start">
            <CalendarIcon className="size-4" />
            {ticket?.updated_at &&
              format(ticket.updated_at, 'MMMM dd, yyyy', { locale: ptBR })}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="w-full border border-solid text-slate-800 sm:w-fit"
            onClick={handleDeleteTicket}
          >
            Excluir
          </button>
          <button
            className="w-full bg-cyan-500 text-slate-50 sm:w-fit"
            onClick={handleFinishTicket}
          >
            Finalizar Chamado
          </button>
        </div>
      </div>

      {/* SUMARY */}
      <div className="flex flex-col">
        <h3 className="mb-3 text-sm font-bold text-slate-800">SUMÁRIO</h3>

        <span className="flex items-center gap-3 border-t border-solid py-4 capitalize">
          <b>Id:</b>
          <p>{ticket?.id}</p>
        </span>

        <span className="flex items-center gap-3 border-t border-solid py-4">
          <b>Prioridade:</b>
          <p>{ticket && formatPriority(ticket.priority)}</p>
        </span>

        <span className="flex items-center gap-3 border-t border-solid py-4">
          <b>Categoria:</b>
          <p> {ticket && formatCategory(ticket.category)}</p>
        </span>

        <span className="flex items-center gap-3 border-t border-solid py-4">
          <b>Tipo:</b>
          <p> {ticket && formatType(ticket.type)}</p>
        </span>

        <span className="flex items-center gap-3 border-t border-solid py-4">
          <b>Descrição:</b>
          <p>{ticket?.description}</p>
        </span>
      </div>

      {/* CUSTOMER */}
      <div className="flex flex-col">
        <h3 className="mb-3 text-sm font-bold text-slate-800">CLIENTE</h3>

        <span className="flex items-center gap-3 border-t border-solid py-4 capitalize">
          <b>Id:</b>
          <p>{ticket?.customer?.id}</p>
        </span>

        <span className="flex items-center gap-3 border-t border-solid py-4 capitalize">
          <b>Nome:</b>
          <p>{ticket?.customer?.name}</p>
        </span>

        <span className="flex items-center gap-3 border-t border-solid py-4">
          <b>Email:</b>
          <p>{ticket?.customer?.email}</p>
        </span>

        <span className="flex items-center gap-3 border-t border-solid py-4">
          <b>Telefone:</b>
          <p>{ticket?.customer?.phone}</p>
        </span>

        <span className="flex items-center gap-3 border-t border-solid py-4">
          <b>CNPJ:</b>
          <p>{ticket?.customer?.cnpj}</p>
        </span>
      </div>

      {/* RESPONSABLE */}
      <div className="flex flex-col">
        <h3 className="mb-3 text-sm font-bold text-slate-800">RESPONSÁVEL</h3>

        <span className="flex items-center gap-3 border-t border-solid py-4 capitalize">
          <b>Name:</b>
          <p>{ticket?.User?.name}</p>
        </span>

        <span className="flex items-center gap-3 border-t border-solid py-4">
          <b>Email:</b>
          <p>{ticket?.User?.email}</p>
        </span>
      </div>
    </section>
  );
};
