/*
  Warnings:

  - A unique constraint covering the columns `[applicationId]` on the table `SeederUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `applicationId` to the `SeederUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SeederUser" ADD COLUMN     "applicationId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "SeederUser_applicationId_key" ON "SeederUser"("applicationId");

-- AddForeignKey
ALTER TABLE "SeederUser" ADD CONSTRAINT "SeederUser_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "PrivateSeedSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
