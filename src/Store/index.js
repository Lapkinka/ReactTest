import {createStore,applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewars/logger'
import uuid from '../middlewars/uuid'

// const enhancer = applyMiddleware(uuid,logger)
const enhancer = applyMiddleware(uuid,logger)

const store = createStore(reducer,{},enhancer);

//dev only
window.store = store;

export default store