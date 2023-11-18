/*
  Warnings:

  - You are about to drop the column `id_departamento` on the `TBL_MUNICIPIO` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[codigo]` on the table `TBL_MUNICIPIO` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "TBL_MUNICIPIO" DROP COLUMN "id_departamento";

-- CreateIndex
CREATE UNIQUE INDEX "TBL_MUNICIPIO_codigo_key" ON "TBL_MUNICIPIO"("codigo");
