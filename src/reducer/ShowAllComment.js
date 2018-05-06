import {LOAD_ALL_COMMENTS, START, SUCCESS} from '../constants'
import { arrToMap } from '../helpers/helpersJs'
import {Map, Record, OrderedMap} from 'immutable'

const ReducerState = new Record({
    loading:false,
    loaded:false,
    page:undefined,
    entities:new OrderedMap({})
})

const defaultState = new ReducerState()

export default (articlesState = defaultState,action) =>{
    const {type,payload,response} = action;
    console.warn(action,"---action--")
    switch(type){
        case LOAD_ALL_COMMENTS + START : {
            // return articlesState.setIn(['entities',payload.articleId,'commentsLoading'],true)
            return articlesState.set('loading', true)
        }

        case LOAD_ALL_COMMENTS + SUCCESS : {
            return articlesState
                .update('entities', arrToMap(response))
                .set('page', payload.page)
                .set('loading', false)
                .set('loaded', true)
                // .setIn(['entities',payload.articleId,'commentsLoading'],false)
                // .setIn(['entities',payload.articleId,'commentsLoaded'],true)
        }
    }

    return articlesState
}