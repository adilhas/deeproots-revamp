/*
  Warnings:

  - You are about to drop the column `usdcAddress` on the `PaymentDetails` table. All the data in the column will be lost.
  - You are about to drop the column `usdtAddress` on the `PaymentDetails` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PaymentDetails" DROP COLUMN "usdcAddress",
DROP COLUMN "usdtAddress";

-- AlterTable
ALTER TABLE "PrivateSeedSubmission" ADD COLUMN     "usdcAddress" TEXT,
ADD COLUMN     "usdtAddress" TEXT;
