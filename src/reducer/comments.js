import {normalizedComments as defaultComments} from '../fixtures'
import {} from '../constants'
import {arrToMap} from '../helpers/helpersJs'

const commentsMap = arrToMap(defaultComments)

export default (commentsState = commentsMap,action) =>{
    const {type,payload} = action

    switch(type){
    }

    return commentsState
}