'use client';
import { BackButton } from '@/app/components/back-button';
import { Input } from '@/app/components/input';
import { CATEGORY_TICKET, PRIORITY, TYPE_TICKET } from '@/app/constants/ticket';
import { Customer } from '@prisma/client';
import React from 'react';

type FormTicketProps = {
  // userId: string;
  customers: Customer[];
};

export const FormTicket = ({ customers }: FormTicketProps) => {
  const isDisableInput = customers.length === 0;

  return (
    <form className="flex flex-col gap-6">
      <Input label="Cliente">
        <Input.Select disabled={isDisableInput}>
          <option value="">Selecione um Cliente</option>
          {customers &&
            customers.map((customer) => (
              <option value={customer.id} key={customer.id}>
                {customer.name}
              </option>
            ))}
        </Input.Select>
      </Input>

      <div className="flex items-center gap-3">
        <Input label="Tipo">
          <Input.Select disabled={isDisableInput}>
            <option value="">Selecione um Tipo</option>
            {TYPE_TICKET.map((type) => (
              <option value={type.value} key={type.value}>
                {type.label}
              </option>
            ))}
          </Input.Select>
        </Input>

        <Input label="Categoria">
          <Input.Select disabled={isDisableInput}>
            <option value="">Selecione uma Categoria</option>
            {CATEGORY_TICKET.map((category) => (
              <option value={category.value} key={category.value}>
                {category.label}
              </option>
            ))}
          </Input.Select>
        </Input>

        <Input label="Prioridade">
          <Input.Select disabled={isDisableInput}>
            <option value="">Selecione uma Prioridade</option>
            {PRIORITY.map((priority) => (
              <option value={priority.value} key={priority.value}>
                {priority.label}
              </option>
            ))}
          </Input.Select>
        </Input>
      </div>

      <Input label="Título">
        <Input.Field
          placeholder="Título do chamado..."
          disabled={isDisableInput}
        />
      </Input>
      <Input label="Descrição">
        <Input.Textarea
          placeholder="Descreva o seu problema..."
          disabled={isDisableInput}
        />
      </Input>

      <div className="flex items-center justify-between">
        <BackButton href="/dashboard" />
        <button className="bg-cyan-500 text-slate-50">Cadastrar Chamado</button>
      </div>
    </form>
  );
};
