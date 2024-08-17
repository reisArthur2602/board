'use server';
import { db } from '@/app/lib/prisma';

export const FinishTicket = async (id: string) => {
  await db.ticket.update({ where: { id }, data: { status: 'FINISH' } });
};
