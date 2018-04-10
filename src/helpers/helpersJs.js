export function arrToMap(arr) {
  return arr.reduce((emp,elem) =>{
    emp[elem.id] = elem
    return emp
  },{})
}

export function mapToArr(object) {
  return Object.keys(object).map(id => object[id])
}