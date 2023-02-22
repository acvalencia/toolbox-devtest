// returns true if the string is empty or only contains blanks
export const isEmpty = (str) => {
  return !str.trim()
}

// The row needs to be formatted for four columns
// Each column must have a non-empty string
export const validateRow = (row) => {
  if (row.length !== 4) return false
  return !row.some(isEmpty)
}
