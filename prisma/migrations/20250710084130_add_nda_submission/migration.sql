-- CreateTable
CREATE TABLE "NdaSubmission" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "typedSignature" TEXT NOT NULL,
    "signatureImage" TEXT NOT NULL,
    "acceptedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NdaSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NdaSubmission_userId_key" ON "NdaSubmission"("userId");

-- AddForeignKey
ALTER TABLE "NdaSubmission" ADD CONSTRAINT "NdaSubmission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "SeederUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
