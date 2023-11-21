/*
  Warnings:

  - You are about to drop the `TBL_MUNICIPIO` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TBL_CLIENTES" DROP CONSTRAINT "TBL_CLIENTES_id_municipio_fkey";

-- DropTable
DROP TABLE "TBL_MUNICIPIO";
