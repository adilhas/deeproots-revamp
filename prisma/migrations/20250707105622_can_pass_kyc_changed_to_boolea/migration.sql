/*
  Warnings:

  - Changed the type of `canPassKyc` on the `PrivateSeedSubmission` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "PrivateSeedSubmission" DROP COLUMN "canPassKyc",
ADD COLUMN     "canPassKyc" BOOLEAN NOT NULL;
