/*
  Warnings:

  - You are about to drop the `documents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "Blog_slug_key";

-- DropIndex
DROP INDEX "PasswordResetToken_token_key";

-- DropIndex
DROP INDEX "SeederAccountToken_token_key";

-- DropTable
DROP TABLE "documents";
