export function sortedByStatus(arr){
  return arr.reduce((acc,el,i,arr) => {
    !el.status && acc.push(el)

    if(++i === arr.length){
      acc.push(...arr.filter(e=> e.status))
    }

    return acc
  },[])
}