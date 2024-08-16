-- CreateEnum
CREATE TYPE "TypeTicket" AS ENUM ('INCIDENT', 'REQUEST', 'PROBLEM', 'CHANGE');

-- CreateEnum
CREATE TYPE "CategoryTicket" AS ENUM ('HARDWARE', 'SOFTWARE', 'NETWORK', 'GENERAL_SUPPORT');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('LOW', 'AVERAGE', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "StatusTicket" AS ENUM ('OPEN', 'FINISH');

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "StatusTicket" NOT NULL DEFAULT 'OPEN',
    "type" "TypeTicket" NOT NULL,
    "category" "CategoryTicket" NOT NULL,
    "priority" "Priority" NOT NULL,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "customerId" TEXT,
    "userId" TEXT,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
