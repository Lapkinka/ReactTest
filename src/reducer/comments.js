import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers/helpersJs'

const commentsMap = arrToMap(defaultComments)
console.log("commentsMap",commentsMap)

export default (commentsState = commentsMap,action) =>{
    const {type,payload} = action

    switch(type){
      // case ADD_COMMENT: return commentsState
      case ADD_COMMENT: return Object.assign({},commentsState,commentsState[payload.id])
    }

    return commentsState
}