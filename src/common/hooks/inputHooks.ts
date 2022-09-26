export const useNull = (arr: any[]) => {
  for (const item of arr) {
    if (!item) return false
  }
  return true
}
