'use server';
import { db } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const DeleteCustomer = async (id: string) => {
  const tickets = db.ticket.deleteMany({ where: { customerId: id } });
  const customer = db.customer.delete({ where: { id } });

  await Promise.all([tickets, customer]).then(() => {
    revalidatePath('/dashboard/customer');
    revalidatePath('/dashboard');
    redirect('/dashboard/customer');
  });
};
