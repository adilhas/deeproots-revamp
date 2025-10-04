/*
  Warnings:

  - You are about to drop the column `source` on the `documents` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "documents"
ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

-- CreateTable
CREATE TABLE "MorePayment" (
    "id" TEXT NOT NULL,
    "amountSent" TEXT NOT NULL,
    "transactionLink" TEXT,
    "paymentImage" TEXT,
    "paymentStatus" TEXT NOT NULL DEFAULT 'submitted',
    "comment" TEXT,
    "receiptUrl" TEXT,
    "submissionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "MorePayment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MorePayment_submissionId_idx" ON "MorePayment"("submissionId");

-- CreateIndex
CREATE INDEX "MorePayment_paymentStatus_idx" ON "MorePayment"("paymentStatus");

-- CreateIndex
CREATE INDEX "MorePayment_createdAt_idx" ON "MorePayment"("createdAt");

-- AddForeignKey
ALTER TABLE "MorePayment" ADD CONSTRAINT "MorePayment_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "PrivateSeedSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
