/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `TBL_USUARIOS` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TBL_USUARIOS_nombre_key" ON "TBL_USUARIOS"("nombre");
