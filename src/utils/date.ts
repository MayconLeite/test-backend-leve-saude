export function isValidDatetimeFormat(datetime: string): boolean {
  return /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(datetime)
}

export function formatToISO(datetime: string): string {
  return datetime.replace(' ', 'T') + ':00Z'
}
