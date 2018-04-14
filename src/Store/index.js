import {createStore,applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewars/logger'
import uuid from '../middlewars/uuid'
import api from '../middlewars/api'
import thunk from 'redux-thunk'

// const enhancer = applyMiddleware(uuid,logger)
const enhancer = applyMiddleware(uuid,api,logger)

const store = createStore(reducer,{},enhancer);

//dev only
window.store = store;

export default store