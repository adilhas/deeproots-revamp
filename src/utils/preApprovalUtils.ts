export function isPreApprovalTimeOut(preApprovalUpdatedAt: string) {
  if (!preApprovalUpdatedAt) return true;
  const start = new Date(preApprovalUpdatedAt).getTime();
  const now = Date.now();
  return now > start + 24 * 60 * 60 * 1000;
  //   return now > start + 1 * 60 * 1000;
}
