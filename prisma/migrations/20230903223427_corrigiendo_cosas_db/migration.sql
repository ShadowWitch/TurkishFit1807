-- AlterTable
ALTER TABLE "TBL_USUARIOS" ALTER COLUMN "ultimaConexion" DROP NOT NULL,
ALTER COLUMN "ultimaConexion" SET DEFAULT CURRENT_TIMESTAMP;