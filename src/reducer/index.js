import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import commentsReducer from './comments'
import filtersReducer from './mainFilters'

export default combineReducers({
    count:counterReducer,
    articles:articlesReducer,
    comments:commentsReducer,
    filters:filtersReducer,
    router:routerReducer
})