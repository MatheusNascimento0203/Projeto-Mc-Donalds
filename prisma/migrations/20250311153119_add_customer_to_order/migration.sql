/*
  Warnings:

  - Added the required column `cpf` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
