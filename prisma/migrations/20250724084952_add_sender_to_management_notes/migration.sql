-- CreateEnum
CREATE TYPE "SenderType" AS ENUM ('ADMIN', 'SEEDER');

-- AlterTable
ALTER TABLE "ManagementNotes" ADD COLUMN     "sender" "SenderType" NOT NULL DEFAULT 'ADMIN';
