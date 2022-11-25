export function formatNumber(value: number | null) {
  if (!value)
    return '0'
  return value.toString().replace(/(?<!\d*\.\d*)(?=(\B\d{3})+(\.\d+)?$)/g, ',')
}
