/*
  Warnings:

  - Changed the type of `ultimaConexion` on the `TBL_USUARIOS` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "TBL_USUARIOS" DROP COLUMN "ultimaConexion",
ADD COLUMN     "ultimaConexion" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "estado" SET DEFAULT 'Activo';
