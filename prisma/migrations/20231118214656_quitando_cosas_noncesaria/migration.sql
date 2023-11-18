/*
  Warnings:

  - You are about to drop the `TBL_PAGOS` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TBL_CONTRATOS" DROP CONSTRAINT "TBL_CONTRATOS_id_pago_fkey";

-- DropForeignKey
ALTER TABLE "TBL_PAGOS" DROP CONSTRAINT "TBL_PAGOS_id_cliente_fkey";

-- DropTable
DROP TABLE "TBL_PAGOS";
