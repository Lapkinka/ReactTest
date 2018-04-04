import {combineReducers} from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import filtersReducer from './mainFilters'

export default combineReducers({
    count:counterReducer,
    articles:articlesReducer,
    filters:filtersReducer
})