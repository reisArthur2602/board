'use client';
import { CreateTicket } from '@/app/actions/ticket/create-ticket';
import { BackButton } from '@/app/components/back-button';
import { Input } from '@/app/components/input';
import { CATEGORY_TICKET, PRIORITY, TYPE_TICKET } from '@/app/constants/ticket';
import { zodResolver } from '@hookform/resolvers/zod';
import { Customer } from '@prisma/client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormTicketProps = {
  userId: string;
  customers: Customer[];
};

const FormTicketSchema = z.object({
  title: z.string().min(1, 'O campo Título é obrigatório'),

  description: z.string().min(1, 'O campo Descrição é obrigatório'),

  customerId: z.string().min(1, 'O campo Cliente é obrigatório'),

  type: z.enum(['INCIDENT', 'REQUEST', 'PROBLEM', 'CHANGE'], {
    message:
      'O campo Tipo deve ser um dos seguintes: Incidente, Solicitação, Problema, Mudança',
  }),

  category: z.enum(['HARDWARE', 'SOFTWARE', 'NETWORK', 'GENERAL_SUPPORT'], {
    message:
      'O campo Categoria deve ser um dos seguintes: Hardware, Software, Rede, Suporte Geral',
  }),

  priority: z.enum(['LOW', 'AVERAGE', 'HIGH', 'CRITICAL'], {
    message:
      'O campo Prioridade deve ser um dos seguintes: Baixa, Média, Alta, Crítica',
  }),
});

export const FormTicket = ({ customers, userId }: FormTicketProps) => {
  const isDisableInput = customers.length === 0;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof FormTicketSchema>>({
    resolver: zodResolver(FormTicketSchema),
  });

  const handleCreateTicket = async (data: z.infer<typeof FormTicketSchema>) => {
    try {
      await CreateTicket({ ...data, userId }).then(() => reset());
      console.log('Chamado cadastrado com sucesso!');
    } catch (error) {
      console.log('Falha ao cadastrar chamado');
    }
  };

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(handleCreateTicket)}
    >
      <Input label="Cliente" helperText={errors.customerId?.message}>
        <Input.Select disabled={isDisableInput} {...register('customerId')}>
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
        <Input label="Tipo" helperText={errors.type?.message}>
          <Input.Select disabled={isDisableInput} {...register('type')}>
            <option value="">Selecione um Tipo</option>
            {TYPE_TICKET.map((type) => (
              <option value={type.value} key={type.value}>
                {type.label}
              </option>
            ))}
          </Input.Select>
        </Input>

        <Input label="Categoria" helperText={errors.category?.message}>
          <Input.Select disabled={isDisableInput} {...register('category')}>
            <option value="">Selecione uma Categoria</option>
            {CATEGORY_TICKET.map((category) => (
              <option value={category.value} key={category.value}>
                {category.label}
              </option>
            ))}
          </Input.Select>
        </Input>

        <Input label="Prioridade" helperText={errors.priority?.message}>
          <Input.Select disabled={isDisableInput} {...register('priority')}>
            <option value="">Selecione uma Prioridade</option>
            {PRIORITY.map((priority) => (
              <option value={priority.value} key={priority.value}>
                {priority.label}
              </option>
            ))}
          </Input.Select>
        </Input>
      </div>

      <Input label="Título" helperText={errors.title?.message}>
        <Input.Field
          placeholder="Título do chamado..."
          disabled={isDisableInput}
          {...register('title')}
        />
      </Input>
      <Input label="Descrição" helperText={errors.description?.message}>
        <Input.Textarea
          placeholder="Descreva o seu problema..."
          disabled={isDisableInput}
          {...register('description')}
        />
      </Input>

      <div className="flex items-center justify-between">
        <BackButton href="/dashboard" />
        <button className="bg-cyan-500 text-slate-50">Cadastrar Chamado</button>
      </div>
    </form>
  );
};
