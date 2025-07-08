-- CreateTable
CREATE TABLE "SeederAccountToken" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SeederAccountToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeederUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SeederUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SeederAccountToken_token_key" ON "SeederAccountToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "SeederUser_email_key" ON "SeederUser"("email");
