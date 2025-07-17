export function getSeedTierFromCapital(capital: string): string | null {
  const sanitized = capital.replace(/[^0-9.]/g, '');
  const numericCapital = parseFloat(sanitized);

  if (isNaN(numericCapital)) return null;

  if (numericCapital >= 5000 && numericCapital < 10000) {
    return 'tier-1';
  } else if (numericCapital >= 10000 && numericCapital < 100000) {
    return 'tier-2';
  } else if (numericCapital >= 100000) {
    return 'tier-3';
  }

  return null;
}
