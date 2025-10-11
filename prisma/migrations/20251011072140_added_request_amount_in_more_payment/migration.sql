/*
  Warnings:

  - You are about to drop the column `paymentStatus` on the `MorePayment` table. All the data in the column will be lost.
  - Added the required column `requestedAmount` to the `MorePayment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('requested', 'request_approved', 'request_rejected', 'payment_submitted', 'payment_approved', 'payment_rejected');

-- DropIndex
DROP INDEX "MorePayment_paymentStatus_idx";

-- AlterTable
ALTER TABLE "MorePayment" DROP COLUMN "paymentStatus",
ADD COLUMN     "adminComment" TEXT,
ADD COLUMN     "paymentApprovedAt" TIMESTAMP(3),
ADD COLUMN     "paymentSubmittedAt" TIMESTAMP(3),
ADD COLUMN     "requestApprovedAt" TIMESTAMP(3),
ADD COLUMN     "requestedAmount" TEXT NOT NULL,
ADD COLUMN     "status" "PaymentStatus" NOT NULL DEFAULT 'requested',
ALTER COLUMN "amountSent" DROP NOT NULL;

-- AlterTable
ALTER TABLE "documents" ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "embedding" DROP NOT NULL,
ALTER COLUMN "metadata" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "MorePayment_status_idx" ON "MorePayment"("status");
