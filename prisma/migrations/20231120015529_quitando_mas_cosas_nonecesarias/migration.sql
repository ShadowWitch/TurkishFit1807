/*
  Warnings:

  - You are about to drop the `TBL_PROGRESO` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TBL_PROGRESO" DROP CONSTRAINT "TBL_PROGRESO_id_chequeo_fkey";

-- DropTable
DROP TABLE "TBL_PROGRESO";
