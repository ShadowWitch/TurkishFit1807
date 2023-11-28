-- CreateTable
CREATE TABLE "TBL_USUARIOS" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "correoElectronico" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "ultimaConexion" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "imagenPerfil" TEXT,
    "estado" TEXT DEFAULT 'Activo',
    "id_rel_role" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "TBL_USUARIOS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TBL_ROLES" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "TBL_ROLES_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TBL_PERMISOS" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "acciones" TEXT[],
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "TBL_PERMISOS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TBL_REL_PERMISOS_ROLES" (
    "id" TEXT NOT NULL,
    "id_role" TEXT NOT NULL,
    "id_permiso" TEXT NOT NULL,

    CONSTRAINT "TBL_REL_PERMISOS_ROLES_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TBL_CLIENTES" (
    "id" TEXT NOT NULL,
    "DNI" TEXT NOT NULL,
    "primerNombre" TEXT NOT NULL,
    "segundoNombre" TEXT NOT NULL,
    "primerApellido" TEXT NOT NULL,
    "segundoApellido" TEXT,
    "otroNombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "fechaDeIngreso" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "TBL_CLIENTES_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TBL_CONTRATOS" (
    "id" TEXT NOT NULL,
    "descripcion" TEXT,
    "fechaDeInicio" TIMESTAMP(3) NOT NULL,
    "fechaDeFin" TIMESTAMP(3) NOT NULL,
    "ultimaRenovacion" TIMESTAMP(3) NOT NULL,
    "estado" TEXT NOT NULL,
    "id_cliente" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "TBL_CONTRATOS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TBL_INFORMACIONCHEQUEO" (
    "id" TEXT NOT NULL,
    "peso" TEXT NOT NULL,
    "estatura" TEXT NOT NULL,
    "nivelDeMasa" TEXT,
    "nivelDeGrasa" TEXT,
    "fechaDelChequeo" TIMESTAMP(3) NOT NULL,
    "id_cliente" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "TBL_INFORMACIONCHEQUEO_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TBL_RUTINAS" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "cantidad_series" INTEGER NOT NULL,
    "cantidad_repeticiones" INTEGER NOT NULL,
    "tiempo_descanso" DOUBLE PRECISION NOT NULL,
    "id_ejercicio" TEXT NOT NULL,
    "id_objetivosCatalogos" TEXT NOT NULL,
    "id_cliente" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "TBL_RUTINAS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TBL_EJERCICIO" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "imagen" TEXT,
    "id_tipo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "TBL_EJERCICIO_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TBL_TIPOSEJERCICIOS" (
    "id" TEXT NOT NULL,
    "nombreTipo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "TBL_TIPOSEJERCICIOS_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TBL_CLIENTES_DNI_key" ON "TBL_CLIENTES"("DNI");

-- AddForeignKey
ALTER TABLE "TBL_USUARIOS" ADD CONSTRAINT "TBL_USUARIOS_id_rel_role_fkey" FOREIGN KEY ("id_rel_role") REFERENCES "TBL_REL_PERMISOS_ROLES"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_REL_PERMISOS_ROLES" ADD CONSTRAINT "TBL_REL_PERMISOS_ROLES_id_role_fkey" FOREIGN KEY ("id_role") REFERENCES "TBL_ROLES"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_REL_PERMISOS_ROLES" ADD CONSTRAINT "TBL_REL_PERMISOS_ROLES_id_permiso_fkey" FOREIGN KEY ("id_permiso") REFERENCES "TBL_PERMISOS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_CONTRATOS" ADD CONSTRAINT "TBL_CONTRATOS_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "TBL_CLIENTES"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_INFORMACIONCHEQUEO" ADD CONSTRAINT "TBL_INFORMACIONCHEQUEO_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "TBL_CLIENTES"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_RUTINAS" ADD CONSTRAINT "TBL_RUTINAS_id_ejercicio_fkey" FOREIGN KEY ("id_ejercicio") REFERENCES "TBL_EJERCICIO"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_RUTINAS" ADD CONSTRAINT "TBL_RUTINAS_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "TBL_CLIENTES"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TBL_EJERCICIO" ADD CONSTRAINT "TBL_EJERCICIO_id_tipo_fkey" FOREIGN KEY ("id_tipo") REFERENCES "TBL_TIPOSEJERCICIOS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
