export const getCommissionCategory = (value: string): number => {
  if (value === '이사') {
    return 1000
  } else if (value === '청소') {
    return 1000
  } else if (value === '취미생활') {
    return 4000
  } else if (value === '과외') {
    return 3000
  } else if (value === '설치 및 수리') {
    return 2000
  }
  return 0
}