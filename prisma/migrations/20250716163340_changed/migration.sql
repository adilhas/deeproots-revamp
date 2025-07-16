-- AlterTable
ALTER TABLE "NdaSubmission" ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "PaymentDetails" ADD COLUMN     "usdcAddress" TEXT,
ADD COLUMN     "usdtAddress" TEXT,
ALTER COLUMN "updatedAt" DROP NOT NULL;
