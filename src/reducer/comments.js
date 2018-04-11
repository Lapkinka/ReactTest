import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT} from '../constants'
import {arrToMap} from '../helpers/helpersJs'

const commentsMap = arrToMap(defaultComments)

export default (commentsState = commentsMap,action) =>{
    const {type,payload,randomId} = action
    switch(type){
        case ADD_COMMENT :return {...commentsState,[randomId]:{id:randomId, user:payload.user, text:payload.text}}
    }

    return commentsState
}