'use server';
import { db } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const DeleteTicket = async (id: string) => {
  await db.ticket.delete({ where: { id } });
  revalidatePath('/dashboard');
  redirect('/dashboard');
};
