// import {Map} from 'immutable'
import {OrderedMap,Map} from 'immutable'

// export function arrToMap(arr) {
//   return arr.reduce((emp,elem) =>{
//     emp[elem.id] = elem
//     return emp
//   },{})
// }

// export function arrToMap(arr) {
//   return arr.reduce((emp,elem) => emp.set(elem.id,elem),new Map({}))
// }

// export function arrToMap(arr,DataRecord = Map) {
export function arrToMap(arr,DataRecord = Map) {
  // return arr.reduce((emp,elem) => emp.set(elem.id,new Map({elem})),new Map({}))
  return arr.reduce((emp,elem) => emp.set(elem.id,new DataRecord(elem)),new OrderedMap({}))
}

// export function mapToArr(object) {
//   return Object.keys(object).map(id => object[id])
// }

export function mapToArr(object) {
  console.warn("object",object)
  console.warn("object.valueSeq().toArray()",object.valueSeq().toArray())
  return object.valueSeq().toArray()
}

const constraints = {
  userName:{min:5, max:20},
  comment:{min:5, max:50}
};

export function lengthValue(state) {
  console.log("state.userName",state.userName)
  return ((state.userName.length > constraints['userName'].min && state.userName.length < constraints['userName'].max)
    && (state.comment.length > constraints['comment'].min && state.comment.length < constraints['comment'].max))
}

export function wrongInInput(state,type) {
  return state[type].length < constraints[type].min || state[type].length > constraints[type].max
}