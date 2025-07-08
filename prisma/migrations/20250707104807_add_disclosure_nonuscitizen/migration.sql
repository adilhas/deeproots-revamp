-- CreateTable
CREATE TABLE "PrivateSeedSubmission" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "capital" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "whyJoin" TEXT NOT NULL,
    "canPassKyc" TEXT NOT NULL,
    "indvOrOrg" TEXT NOT NULL,
    "confidentiality" BOOLEAN NOT NULL,
    "acknowledgement" BOOLEAN NOT NULL,
    "disclosureTerm" BOOLEAN NOT NULL,
    "nonUsCitizen" BOOLEAN NOT NULL,
    "applicationStatus" TEXT NOT NULL DEFAULT 'Received',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PrivateSeedSubmission_pkey" PRIMARY KEY ("id")
);
