export const filteredByValue = (arr, value) => {
  switch (value) {
    case 'todo':
      return arr.filter((elem) => !elem.status)

    case 'done':
      return arr.filter((elem) => elem.status)

    case 'all':
      return arr

    default:
      return arr
  }
}