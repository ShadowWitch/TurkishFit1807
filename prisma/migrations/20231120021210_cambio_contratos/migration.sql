/*
  Warnings:

  - You are about to drop the column `id_contrato` on the `TBL_CLIENTES` table. All the data in the column will be lost.
  - Added the required column `id_cliente` to the `TBL_CONTRATOS` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TBL_CLIENTES" DROP CONSTRAINT "TBL_CLIENTES_id_contrato_fkey";

-- AlterTable
ALTER TABLE "TBL_CLIENTES" DROP COLUMN "id_contrato";

-- AlterTable
ALTER TABLE "TBL_CONTRATOS" ADD COLUMN     "id_cliente" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TBL_CONTRATOS" ADD CONSTRAINT "TBL_CONTRATOS_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "TBL_CLIENTES"("id") ON DELETE CASCADE ON UPDATE CASCADE;
