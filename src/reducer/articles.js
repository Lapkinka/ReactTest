import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'
import { arrToMap } from '../helpers/helpersJs'

const articlesMap = arrToMap(defaultArticles)

export default (articlesState = articlesMap,action) =>{
    const {type,payload} = action
    switch(type){
        // case DELETE_ARTICLE : return articlesState
        // case DELETE_ARTICLE : return Object.assign({},articlesMap,articlesMap[payload.id].id !== payload.id)
        case DELETE_ARTICLE : {
            let copy = {...articlesState}
            delete articlesState[payload.id]
            return articlesState
        }
    }

    return articlesState
}