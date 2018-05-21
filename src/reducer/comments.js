import {normalizedComments as defaultComments} from '../fixtures'
import { ADD_COMMENT, LOAD_ALL_COMMENTS, LOAD_COMMENT, START, SUCCESS } from '../constants'
import {arrToMap} from '../helpers/helpersJs'
import {OrderedMap, Record, Map} from "immutable";

const CommentRecord = Record({
    text:undefined,
    user:undefined,
    id:undefined
})

const ReducerState = new Record({
    entities:new OrderedMap({}),
    total:null,
    pagination:new Map({})
})

const defaultState = new ReducerState()

// const commentsMap = arrToMap(defaultComments)

export default (commentsState = defaultState,action) =>{
// export default (commentsState = commentsMap,action) =>{
    const {type,payload,randomId,response} = action
    // console.warn("COMMENTSTATE REDUCER ----",commentsState)
    // console.warn("COMMENTSTATE REDUCER ----",commentsState.get(`entities`))
    switch(type){
        // case ADD_COMMENT : return {...commentsState,[randomId]:{id:randomId, user:payload.user, text:payload.text}}
        // case ADD_COMMENT : return commentsState.updateIn(['entities',payload.articleId,"comments"],comments => comments.concat(randomId))
        // case ADD_COMMENT : return commentsState.updateIn(['entities',randomId],{id:randomId, user:payload.user, text:payload.text})
        // case ADD_COMMENT : return commentsState.updateIn(['entities',randomId], new CommentRecord({user:payload.user,text:payload.text,id:randomId}))
        // case ADD_COMMENT : return commentsState.setIn(['entities',randomId], new CommentRecord({user:payload.user,text:payload.text,id:randomId}))
        case ADD_COMMENT : return commentsState.setIn(['entities',randomId], new CommentRecord({text:payload.text,user:payload.user,id:randomId}))

        // case LOAD_COMMENT + START : {
        //     // return arrToMap(response,articleRecord)
        //     // return commentsState.set('loading', true)
        //     return commentsState.setIn(['entities',payload.id,'loading'],true)
        // }

        case LOAD_COMMENT + SUCCESS : {
            // return arrToMap(response,articleRecord)
            // return commentsState.setIn(['entities',payload.id],new CommentRecord(payload.response))
            return commentsState.update(`entities`,entities => entities.merge(arrToMap(response,CommentRecord)))
            // return commentsState
            //     .set('entities', arrToMap(response,CommentRecord))
            //     .set('loading', false)
            //     .set('loaded', true)
        }

        case LOAD_ALL_COMMENTS + START : {
            return commentsState.setIn(['pagination',payload.page,'loading'],true)
        }

        case LOAD_ALL_COMMENTS + SUCCESS : {
            return commentsState
              .set('total',response.total)
              .mergeIn(['entities'],arrToMap(response.records,CommentRecord))
              .setIn(['pagination',payload.page,'loading'],false)
              .setIn(['pagination',payload.page,'ids'],response.records.map(elem => elem.id))
        }
    }


    return commentsState
}