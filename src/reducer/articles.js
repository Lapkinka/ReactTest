import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE,ADD_COMMENT} from '../constants'
import { arrToMap } from '../helpers/helpersJs'

const articlesMap = arrToMap(defaultArticles)

export default (articlesState = articlesMap,action) =>{
    const {type,payload,randomId} = action;
    switch(type){
        case DELETE_ARTICLE : {
            // let copy = {...articlesState}
            delete articlesState[payload.id]
            return articlesState
        }
        case ADD_COMMENT : {
            let changeComments = [...articlesState[payload.articleId].comments]
            changeComments.push(randomId)
            return {...articlesState,[payload.articleId]:{...articlesState[payload.articleId],comments:changeComments}}
        }
    }

    return articlesState
}