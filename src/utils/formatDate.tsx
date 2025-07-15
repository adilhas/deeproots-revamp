export function formatDate(isoDateStr: string): string {
  const date = new Date(isoDateStr);

  const day: number = date.getUTCDate();
  const year: number = date.getUTCFullYear();
  const monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month: string = monthNames[date.getUTCMonth()];

  // Helper to add ordinal suffix
  function getOrdinalSuffix(n: number): string {
    if (n >= 11 && n <= 13) return `${n}th`;
    switch (n % 10) {
      case 1:
        return `${n}st`;
      case 2:
        return `${n}nd`;
      case 3:
        return `${n}rd`;
      default:
        return `${n}th`;
    }
  }

  return `${month} ${getOrdinalSuffix(day)}, ${year}`;
}
