-- AlterTable
ALTER TABLE "PrivateSeedSubmission" ADD COLUMN     "dealRoom" TEXT NOT NULL DEFAULT 'not-submitted';

-- CreateTable
CREATE TABLE "PaymentDetails" (
    "id" TEXT NOT NULL,
    "amountSent" TEXT NOT NULL,
    "transactionLink" TEXT NOT NULL,
    "paymentImage" TEXT NOT NULL,
    "submissionId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PaymentDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymentDetails_submissionId_key" ON "PaymentDetails"("submissionId");

-- AddForeignKey
ALTER TABLE "PaymentDetails" ADD CONSTRAINT "PaymentDetails_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "PrivateSeedSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
