/*
  Warnings:

  - You are about to drop the column `correo` on the `TBL_CLIENTES` table. All the data in the column will be lost.
  - You are about to drop the column `direccionDetallada` on the `TBL_CLIENTES` table. All the data in the column will be lost.
  - You are about to drop the column `telefono2` on the `TBL_CLIENTES` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TBL_CLIENTES" DROP COLUMN "correo",
DROP COLUMN "direccionDetallada",
DROP COLUMN "telefono2";
