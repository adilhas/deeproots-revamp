-- CreateTable
CREATE TABLE "Document" (
    "id" BIGSERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "embedding" BYTEA NOT NULL,
    "source" TEXT,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);
