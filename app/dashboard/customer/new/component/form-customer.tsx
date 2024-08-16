'use client';
import { BackButton } from '@/app/components/back-button';
import { Input } from '@/app/components/input';
import React from 'react';

export const FormCustomer = () => {
  return (
    <form className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Input label="Email" placeholder="email@email.com" />
        <Input label="Nome" placeholder="Ex: Arthur Reis" />
      </div>
      <div className="flex items-center gap-3">
        <Input label="Telefone" placeholder="(xx) xxxxx-xxxx" />
        <Input label="CNPJ" placeholder="xx.xxx.xxx/xxxx-xx" />
      </div>
      <div className="flex items-center justify-between">
        <BackButton href="/dashboard/customer" />
        <button className="bg-cyan-500 text-slate-50">Cadastrar Cliente</button>
      </div>
    </form>
  );
};
