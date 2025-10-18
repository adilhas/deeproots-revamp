/*
  Warnings:

  - Added the required column `submissionId` to the `SeederAccountToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SeederAccountToken" ADD COLUMN     "submissionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SeederAccountToken" ADD CONSTRAINT "SeederAccountToken_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "PrivateSeedSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
