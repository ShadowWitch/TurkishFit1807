/*
  Warnings:

  - You are about to drop the `TBL_DEPARTAMENTO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TBL_DIETAS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TBL_NETWORKINGCLIENT` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TBL_NETWORKINGCORS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TBL_NETWORKINGLOGS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TBL_OBJETIVOSCATALOGOS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TBL_PAIS` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TBL_PARAMETROSCATALOGOS` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cantidad_repeticiones` to the `TBL_RUTINAS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cantidad_series` to the `TBL_RUTINAS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tiempo_descanso` to the `TBL_RUTINAS` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TBL_DEPARTAMENTO" DROP CONSTRAINT "TBL_DEPARTAMENTO_id_pais_fkey";

-- DropForeignKey
ALTER TABLE "TBL_DIETAS" DROP CONSTRAINT "TBL_DIETAS_id_objetivosCatalogos_fkey";

-- DropForeignKey
ALTER TABLE "TBL_MUNICIPIO" DROP CONSTRAINT "TBL_MUNICIPIO_id_departamento_fkey";

-- DropForeignKey
ALTER TABLE "TBL_NETWORKINGLOGS" DROP CONSTRAINT "TBL_NETWORKINGLOGS_id_networkingClient_fkey";

-- DropForeignKey
ALTER TABLE "TBL_RUTINAS" DROP CONSTRAINT "TBL_RUTINAS_id_objetivosCatalogos_fkey";

-- AlterTable
ALTER TABLE "TBL_CONTRATOS" ALTER COLUMN "descripcion" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TBL_RUTINAS" ADD COLUMN     "cantidad_repeticiones" INTEGER NOT NULL,
ADD COLUMN     "cantidad_series" INTEGER NOT NULL,
ADD COLUMN     "tiempo_descanso" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "TBL_DEPARTAMENTO";

-- DropTable
DROP TABLE "TBL_DIETAS";

-- DropTable
DROP TABLE "TBL_NETWORKINGCLIENT";

-- DropTable
DROP TABLE "TBL_NETWORKINGCORS";

-- DropTable
DROP TABLE "TBL_NETWORKINGLOGS";

-- DropTable
DROP TABLE "TBL_OBJETIVOSCATALOGOS";

-- DropTable
DROP TABLE "TBL_PAIS";

-- DropTable
DROP TABLE "TBL_PARAMETROSCATALOGOS";
