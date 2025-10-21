/*
  Warnings:

  - A unique constraint covering the columns `[submissionId]` on the table `SeederAccountToken` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "PrivateSeedSubmission" ADD COLUMN     "dealRoomExpireIn" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "SeederAccountToken_submissionId_key" ON "SeederAccountToken"("submissionId");
