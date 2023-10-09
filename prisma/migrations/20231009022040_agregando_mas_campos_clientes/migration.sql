/*
  Warnings:

  - Added the required column `primerApellido` to the `TBL_CLIENTES` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TBL_CLIENTES" ADD COLUMN     "primerApellido" TEXT NOT NULL,
ADD COLUMN     "segundoApellido" TEXT;
