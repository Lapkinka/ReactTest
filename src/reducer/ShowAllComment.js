import {LOAD_ALL_COMMENTS, START, SUCCESS} from '../constants'
import { arrToMap } from '../helpers/helpersJs'
import {Map, Record, OrderedMap} from 'immutable'

const ReducerState = new Record({
    loading:false,
    loaded:false,
    sum:undefined,
    page:undefined,
    entities:[]
})

const defaultState = new ReducerState()

export default (articlesState = defaultState,action) =>{
    const {type,payload} = action;
    console.warn(action,"---action--")
    console.warn(payload,"---payload--")
    if(payload!==undefined){
        console.warn(payload.response,"---payloadfdsfsdfsd--")
    }

    switch(type){
        case LOAD_ALL_COMMENTS + START : {
            // return articlesState.setIn(['entities',payload.articleId,'commentsLoading'],true)
            return articlesState
                .set('loading', true)

        }

        case LOAD_ALL_COMMENTS + SUCCESS : {
            return articlesState
                .set('page', payload.page)
                .set('entities', payload.response.records)
                .set('sum', payload.response.total)
                .set('loading', false)
                .set('loaded', true)
                // .setIn(['entities',payload.articleId,'commentsLoading'],false)
                // .setIn(['entities',payload.articleId,'commentsLoaded'],true)
        }
    }

    return articlesState
}