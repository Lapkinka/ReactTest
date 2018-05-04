// import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ARTICLES, LOAD_ART, START, SUCCESS, FAIL, LOAD_COMMENT} from '../constants'
import { arrToMap } from '../helpers/helpersJs'
import {Map, Record, OrderedMap} from 'immutable'

const ArticleRecord = Record({
    text:undefined,
    title:'',
    id:undefined,
    loading:false,
    commentsLoaded:false,
    commentsLoading:false,
    comments:[],

})
// const articlesMap = arrToMap(defaultArticles)
// const defaultState = new Map({
//     loading:false,
//     loaded:false,
//     entities:new OrderedMap({})
// })

const ReducerState = new Record({
    loading:false,
    loaded:false,
    entities:new OrderedMap({})
})

const defaultState = new ReducerState()

// export default (articlesState = articlesMap,action) =>{
export default (articlesState = defaultState,action) =>{
    const {type,payload,response,randomId} = action;
    switch(type){
        case DELETE_ARTICLE : {
            // let copy = {...articlesState}
            // delete articlesState[payload.id]
            // return articlesState
            // return articlesState.delete(payload.id)
            return articlesState.deleteIn(['entities',payload.id])
        }
                case ADD_COMMENT : {
            // return articlesState.update(payload.articleId,(article) => article.set())
            // return articlesState.updateIn([payload.articleId,"comments"],(comments) => comments.concat(randomId))
            return articlesState.updateIn(['entities',payload.articleId,"comments"],comments => comments.concat(randomId))
            // let changeComments = [...articlesState[payload.articleId].comments]
            // changeComments.push(randomId)
            // return {...articlesState,[payload.articleId]:{...articlesState[payload.articleId],comments:changeComments}}
        }
        case LOAD_ARTICLES + START : {
            // return arrToMap(response,articleRecord)
            return articlesState.set('loading', true)
        }
        case LOAD_ARTICLES + SUCCESS : {
            // return arrToMap(response,articleRecord)
            return articlesState
                .set('entities', arrToMap(response,ArticleRecord))
                .set('loading', false)
                .set('loaded', true)
        }
        case LOAD_ART + START : {
            // return arrToMap(response,articleRecord)
            return articlesState.setIn(['entities',payload.id,'loading'],true)
        }

        case LOAD_ART + SUCCESS : {
            // return arrToMap(response,articleRecord)
            return articlesState.setIn(['entities',payload.id],new ArticleRecord(payload.response))
        }
        case LOAD_COMMENT + START : {
            return articlesState.setIn(['entities',payload.articleId,'commentsLoading'],true)
        }

        case LOAD_COMMENT + SUCCESS : {
            return articlesState
                .setIn(['entities',payload.articleId,'commentsLoading'],false)
                .setIn(['entities',payload.articleId,'commentsLoaded'],true)
        }
    }

    return articlesState
}