import { BackButton } from '@/app/components/back-button';
import { Input } from '@/app/components/input';
import React from 'react';

export const FormTicket = () => {
  return (
    <form className="flex flex-col gap-6">
      <Input label="Cliente">
        <Input.Select>
          <option value="">Selecione um Cliente</option>
        </Input.Select>
      </Input>

      <div className="flex items-center gap-3">
        <Input label="Tipo">
          <Input.Select>
            <option value="">Selecione um Tipo</option>
          </Input.Select>
        </Input>

        <Input label="Categoria">
          <Input.Select disabled>
            <option value="">Selecione uma Categoria</option>
          </Input.Select>
        </Input>
        <Input label="Prioridade">
          <Input.Select>
            <option value="">Selecione uma Prioridade</option>
          </Input.Select>
        </Input>
      </div>

      <Input label="Título">
        <Input.Field placeholder="Título do chamado..." />
      </Input>
      <Input label="Descrição">
        <Input.Textarea placeholder="Descreva o seu problema..." />
      </Input>

      <div className="flex items-center justify-between">
        <BackButton href="/dashboard" />
        <button className="bg-cyan-500 text-slate-50">Cadastrar Chamado</button>
      </div>
    </form>
  );
};
