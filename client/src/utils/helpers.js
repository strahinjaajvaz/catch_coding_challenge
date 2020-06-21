export function sortAsc(a, b) {
  return b.salePrice - a.salePrice;
}

export function sortDesc(a, b) {
  return a.salePrice - b.salePrice;
}

export function formatCentsToDollars(cents) {
  return (cents / 100).toFixed(2);
}
