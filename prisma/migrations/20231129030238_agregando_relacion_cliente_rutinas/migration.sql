/*
  Warnings:

  - You are about to drop the column `descripcion` on the `TBL_EJERCICIO_RUTINA` table. All the data in the column will be lost.
  - You are about to drop the column `descripcion` on the `TBL_RUTINA_ENTRENAMIENTO` table. All the data in the column will be lost.
  - Added the required column `repeticiones` to the `TBL_REL_RUTINA_EJERCICIO` table without a default value. This is not possible if the table is not empty.
  - Added the required column `series` to the `TBL_REL_RUTINA_EJERCICIO` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TBL_EJERCICIO_RUTINA" DROP COLUMN "descripcion";

-- AlterTable
ALTER TABLE "TBL_REL_RUTINA_EJERCICIO" ADD COLUMN     "repeticiones" TEXT NOT NULL,
ADD COLUMN     "series" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TBL_RUTINA_ENTRENAMIENTO" DROP COLUMN "descripcion";

-- CreateTable
CREATE TABLE "TBL_REL_CLIENTE_RUTINA" (
    "id" TEXT NOT NULL,
    "id_cliente" TEXT NOT NULL,
    "id_rutina" TEXT NOT NULL,

    CONSTRAINT "TBL_REL_CLIENTE_RUTINA_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TBL_REL_CLIENTE_RUTINA" ADD CONSTRAINT "TBL_REL_CLIENTE_RUTINA_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "TBL_CLIENTES"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_REL_CLIENTE_RUTINA" ADD CONSTRAINT "TBL_REL_CLIENTE_RUTINA_id_rutina_fkey" FOREIGN KEY ("id_rutina") REFERENCES "TBL_RUTINA_ENTRENAMIENTO"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
