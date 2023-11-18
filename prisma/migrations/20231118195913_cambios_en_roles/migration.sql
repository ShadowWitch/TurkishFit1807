/*
  Warnings:

  - You are about to drop the column `id_role` on the `TBL_USUARIOS` table. All the data in the column will be lost.
  - Added the required column `id_rel_role` to the `TBL_USUARIOS` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TBL_USUARIOS" DROP CONSTRAINT "TBL_USUARIOS_id_role_fkey";

-- AlterTable
ALTER TABLE "TBL_USUARIOS" DROP COLUMN "id_role",
ADD COLUMN     "id_rel_role" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TBL_USUARIOS" ADD CONSTRAINT "TBL_USUARIOS_id_rel_role_fkey" FOREIGN KEY ("id_rel_role") REFERENCES "TBL_REL_PERMISOS_ROLES"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
