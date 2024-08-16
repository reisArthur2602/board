'use server';
import { db } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

type CreateCustomerProps = {
  name: string;
  email: string;
  phone: string;
  cnpj: string;
  userId: string;
};

export const CreateCustomer = async (data: CreateCustomerProps) => {
  const customer = db.customer.create({ data });
  revalidatePath('/dashboard/customer');
  return customer;
};
