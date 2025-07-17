-- CreateTable
CREATE TABLE "ManagementNotes" (
    "id" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "submissionId" TEXT NOT NULL,

    CONSTRAINT "ManagementNotes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ManagementNotes_submissionId_idx" ON "ManagementNotes"("submissionId");

-- AddForeignKey
ALTER TABLE "ManagementNotes" ADD CONSTRAINT "ManagementNotes_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "PrivateSeedSubmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
