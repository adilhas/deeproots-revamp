/*
  Warnings:

  - You are about to drop the `SeederUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "KycDocument" DROP CONSTRAINT "KycDocument_userId_fkey";

-- DropForeignKey
ALTER TABLE "NdaSubmission" DROP CONSTRAINT "NdaSubmission_userId_fkey";

-- DropForeignKey
ALTER TABLE "SeederUser" DROP CONSTRAINT "SeederUser_applicationId_fkey";

-- AlterTable
ALTER TABLE "PrivateSeedSubmission" ADD COLUMN     "passwordHash" TEXT;

-- DropTable
DROP TABLE "SeederUser";

-- AddForeignKey
ALTER TABLE "KycDocument" ADD CONSTRAINT "KycDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "PrivateSeedSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NdaSubmission" ADD CONSTRAINT "NdaSubmission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "PrivateSeedSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
