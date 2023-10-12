/*
  Warnings:

  - You are about to drop the column `id_permisos` on the `TBL_ROLES` table. All the data in the column will be lost.
  - You are about to drop the column `id_cantidadRepeticiones` on the `TBL_RUTINAS` table. All the data in the column will be lost.
  - You are about to drop the column `id_cantidadSeries` on the `TBL_RUTINAS` table. All the data in the column will be lost.
  - You are about to drop the column `id_tiemposDeDescanso` on the `TBL_RUTINAS` table. All the data in the column will be lost.
  - You are about to drop the `TBL_CANTIDADREPETICIONES` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TBL_CANTIDADSERIES` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TBL_TIEMPOSDEDESCANSO` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TBL_ROLES" DROP CONSTRAINT "TBL_ROLES_id_permisos_fkey";

-- DropForeignKey
ALTER TABLE "TBL_RUTINAS" DROP CONSTRAINT "TBL_RUTINAS_id_cantidadRepeticiones_fkey";

-- DropForeignKey
ALTER TABLE "TBL_RUTINAS" DROP CONSTRAINT "TBL_RUTINAS_id_cantidadSeries_fkey";

-- DropForeignKey
ALTER TABLE "TBL_RUTINAS" DROP CONSTRAINT "TBL_RUTINAS_id_tiemposDeDescanso_fkey";

-- AlterTable
ALTER TABLE "TBL_ROLES" DROP COLUMN "id_permisos";

-- AlterTable
ALTER TABLE "TBL_RUTINAS" DROP COLUMN "id_cantidadRepeticiones",
DROP COLUMN "id_cantidadSeries",
DROP COLUMN "id_tiemposDeDescanso";

-- DropTable
DROP TABLE "TBL_CANTIDADREPETICIONES";

-- DropTable
DROP TABLE "TBL_CANTIDADSERIES";

-- DropTable
DROP TABLE "TBL_TIEMPOSDEDESCANSO";

-- CreateTable
CREATE TABLE "TBL_REL_PERMISOS_ROLES" (
    "id" TEXT NOT NULL,
    "id_role" TEXT NOT NULL,
    "id_permiso" TEXT NOT NULL,

    CONSTRAINT "TBL_REL_PERMISOS_ROLES_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TBL_REL_PERMISOS_ROLES" ADD CONSTRAINT "TBL_REL_PERMISOS_ROLES_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "TBL_ROLES"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_REL_PERMISOS_ROLES" ADD CONSTRAINT "TBL_REL_PERMISOS_ROLES_id_permiso_fkey" FOREIGN KEY ("id_permiso") REFERENCES "TBL_PERMISOS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
