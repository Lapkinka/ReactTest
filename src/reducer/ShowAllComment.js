import {LOAD_ALL_COMMENTS, START, SUCCESS} from '../constants'
import {Map, Record, OrderedMap} from 'immutable'


const pageRecord = Record({
  records:[],
  total:undefined,
  loadingComments:false,
  loadedComments:false
})


const ReducerState = new Record({
    entities:new OrderedMap({})
})

const defaultState = new ReducerState()

export default (commentsState = defaultState,action) =>{
    const {type,payload} = action;
    switch(type){
        case LOAD_ALL_COMMENTS + START : {
          return commentsState.setIn(['entities',payload.page,'loadingComments'],true)
        }

        case LOAD_ALL_COMMENTS + SUCCESS : {
          return commentsState
            .setIn(['entities',payload.page],new pageRecord(payload.response))
            .setIn(['entities',payload.page,'loadingComments'],false)
            .setIn(['entities',payload.page,'loadedComments'],true)
        }
    }
    return commentsState
}