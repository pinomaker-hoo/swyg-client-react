export const useNull = (arr: any[]) => {
  for (const item of arr) {
    if (!item) return false
  }
  return true
}

export const useSame = (a: any, b: any) => {
  if (a !== b) return false
  return true
}
