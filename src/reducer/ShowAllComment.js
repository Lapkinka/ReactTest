import {LOAD_ALL_COMMENTS, START, SUCCESS} from '../constants'
import {Map, Record, OrderedMap} from 'immutable'


const pageRecord = Record({
  records:[],
  total:undefined
})


const ReducerState = new Record({
    entities:new OrderedMap({}),
    loadingComments:new Map({}),
})

const defaultState = new ReducerState()

export default (commentsState = defaultState,action) =>{
    const {type,payload} = action;
    switch(type){
        case LOAD_ALL_COMMENTS + START : {
          return commentsState.setIn(['loadingComments',payload.page,'loading'],true)
        }

        case LOAD_ALL_COMMENTS + SUCCESS : {
          return commentsState
            .setIn(['entities',payload.page],new pageRecord(payload.response))
            .setIn(['loadingComments',payload.page,'loading'],false)
        }
    }
    return commentsState
}