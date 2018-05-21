import {createStore,applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewars/logger'
import uuid from '../middlewars/uuid'
import api from '../middlewars/api'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import history from '../history'

// const enhancer = applyMiddleware(uuid,logger)
  const enhancer = applyMiddleware(thunk, routerMiddleware(history), uuid,api,logger)

const store = createStore(reducer,{},enhancer);

//dev only
window.store = store;

export default store