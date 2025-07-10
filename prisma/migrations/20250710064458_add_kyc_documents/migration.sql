/*
  Warnings:

  - You are about to drop the column `acknowledgement` on the `PrivateSeedSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `canPassKyc` on the `PrivateSeedSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `confidentiality` on the `PrivateSeedSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `disclosureTerm` on the `PrivateSeedSubmission` table. All the data in the column will be lost.
  - You are about to drop the column `nonUsCitizen` on the `PrivateSeedSubmission` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `PrivateSeedSubmission` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "KycDocumentType" AS ENUM ('PASSPORT', 'PROOF_OF_ADDRESS', 'SELFIE_WITH_NOTE', 'BUSINESS_LICENSE', 'COMPANY_ADDRESS', 'AUTHORIZATION_LETTER', 'REP_ID_SELFIE');

-- AlterTable
ALTER TABLE "PrivateSeedSubmission" DROP COLUMN "acknowledgement",
DROP COLUMN "canPassKyc",
DROP COLUMN "confidentiality",
DROP COLUMN "disclosureTerm",
DROP COLUMN "nonUsCitizen",
ADD COLUMN     "dealRoomOpen" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "preApproval" TEXT NOT NULL DEFAULT 'pending',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "applicationStatus" SET DEFAULT 'received';

-- CreateTable
CREATE TABLE "KycDocument" (
    "id" TEXT NOT NULL,
    "type" "KycDocumentType" NOT NULL,
    "url" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KycDocument_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "KycDocument" ADD CONSTRAINT "KycDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "SeederUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
