export function getFormattedDate(date: string) {
  const dateObj = new Date(date);
  return dateObj.toISOString().slice(0, 10);
}

export function getDateMinusDays(date: string, days: number) {
  const dateObj = new Date(date);
  return new Date(
    dateObj.getFullYear(),
    dateObj.getMonth(),
    dateObj.getDate() - days
  );
}
