/*
  Warnings:

  - You are about to drop the column `id_pago` on the `TBL_CONTRATOS` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TBL_CLIENTES" DROP CONSTRAINT "TBL_CLIENTES_id_contrato_fkey";

-- AlterTable
ALTER TABLE "TBL_CLIENTES" ALTER COLUMN "id_contrato" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TBL_CONTRATOS" DROP COLUMN "id_pago";

-- AddForeignKey
ALTER TABLE "TBL_CLIENTES" ADD CONSTRAINT "TBL_CLIENTES_id_contrato_fkey" FOREIGN KEY ("id_contrato") REFERENCES "TBL_CONTRATOS"("id") ON DELETE SET NULL ON UPDATE CASCADE;
