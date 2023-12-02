/*
  Warnings:

  - You are about to drop the column `id_rel_role` on the `TBL_USUARIOS` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TBL_USUARIOS" DROP CONSTRAINT "TBL_USUARIOS_id_rel_role_fkey";

-- AlterTable
ALTER TABLE "TBL_USUARIOS" DROP COLUMN "id_rel_role",
ADD COLUMN     "id_role" TEXT;

-- AddForeignKey
ALTER TABLE "TBL_USUARIOS" ADD CONSTRAINT "TBL_USUARIOS_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "TBL_ROLES"("id") ON DELETE SET NULL ON UPDATE CASCADE;
