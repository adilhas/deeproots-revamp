-- AlterTable
ALTER TABLE "PaymentDetails" ADD COLUMN     "declineReason" TEXT,
ADD COLUMN     "paymentStatus" TEXT NOT NULL DEFAULT 'not-submitted',
ADD COLUMN     "receiptUrl" TEXT;
