-- AlterTable
ALTER TABLE "PrivateSeedSubmission" ADD COLUMN     "firstReminderSent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "secondReminderSent" BOOLEAN NOT NULL DEFAULT false;
