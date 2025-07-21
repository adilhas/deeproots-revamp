export type ApplicationDataType = {
  dealRoomOpen: boolean;
  id: string;
  fullName: string;
  email: string;
  contact: string;
  country: string;
  website: string;
  capital: string;
  value: string;
  whyJoin: string;
  canPassKyc: boolean;
  indvOrOrg: string;
  confidentiality: boolean;
  acknowledgement: boolean;
  applicationStatus: StatusType;
  createdAt: string;
  preApprovalUpdatedAt?: string;
  preApproval: StatusType;
  ndaSubmission?: NdaSubmissionType;
  kycDocuments?: KycDocumentType[];
  paymentDetails?: PaymentDetailsType;
  dealRoom: StatusType;
  usdtAddress?: string;
  usdcAddress?: string;
  contributionAmount?: string;
  seedTier?: string;
  managementNotes?: ManagementNotesType[];
};

export type StatusType =
  | 'not-submitted'
  | 'received'
  | 'under-review'
  | 'approved'
  | 'declined';

export type NdaSubmissionType = {
  id: string;
  userId: string;
  typedSignature: string;
  signatureImage: string;
  acceptedAt: string;
};

export type KycDocumentTypeEnum =
  | 'PASSPORT'
  | 'PROOF_OF_ADDRESS'
  | 'SELFIE_WITH_NOTE'
  | 'BUSINESS_LICENSE'
  | 'COMPANY_ADDRESS'
  | 'AUTHORIZATION_LETTER'
  | 'REP_ID_SELFIE';

export type KycDocumentType = {
  id: string;
  type: KycDocumentTypeEnum;
  url: string;
  userId: string;
  createdAt: string;
};

export type PaymentDetailsType = {
  id: string;
  amountSent: string;
  transactionLink: string;
  paymentImage: string;
  submissionId: string;
  updatedAt: string;
  createdAt: string;
  receiptUrl: string;
  declineReason: string;
  paymentStatus: string;
};

export type ManagementNotesType = {
  id: string;
  note: string;
  createdAt: string;
  updatedAt: string;
  submissionId: string;
};
