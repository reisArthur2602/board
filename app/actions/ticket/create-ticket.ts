'use server';
import { db } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';

type CreateTicketProps = {
  title: string;
  description: string;
  customerId: string;
  userId: string;
  type: 'INCIDENT' | 'REQUEST' | 'PROBLEM' | 'CHANGE';
  category: 'HARDWARE' | 'SOFTWARE' | 'NETWORK' | 'GENERAL_SUPPORT';
  priority: 'LOW' | 'AVERAGE' | 'HIGH' | 'CRITICAL';
};

export const CreateTicket = async (data: CreateTicketProps) => {
  const ticket = await db.ticket.create({ data });
  revalidatePath('/dashboard');
  return ticket;
};
