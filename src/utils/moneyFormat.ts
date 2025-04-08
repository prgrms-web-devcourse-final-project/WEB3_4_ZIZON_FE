export function formatMoney(amount: number | string): string {
  return String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
