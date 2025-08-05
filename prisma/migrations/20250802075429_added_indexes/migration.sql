-- CreateIndex
CREATE INDEX "KycDocument_id_idx" ON "KycDocument"("id");

-- CreateIndex
CREATE INDEX "NdaSubmission_id_idx" ON "NdaSubmission"("id");

-- CreateIndex
CREATE INDEX "PaymentDetails_paymentStatus_idx" ON "PaymentDetails"("paymentStatus");

-- CreateIndex
CREATE INDEX "PaymentDetails_updatedAt_idx" ON "PaymentDetails"("updatedAt");

-- CreateIndex
CREATE INDEX "PrivateSeedSubmission_id_idx" ON "PrivateSeedSubmission"("id");

-- CreateIndex
CREATE INDEX "PrivateSeedSubmission_email_idx" ON "PrivateSeedSubmission"("email");

-- CreateIndex
CREATE INDEX "PrivateSeedSubmission_preApprovalUpdatedAt_idx" ON "PrivateSeedSubmission"("preApprovalUpdatedAt");
