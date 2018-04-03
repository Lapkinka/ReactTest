import {combineReducers} from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
// import filtersReducer from './mainFilters'
import dataRangeReducer from './filters/dataRange'
import selectReducer from './filters/select'

export default combineReducers({
    count:counterReducer,
    articles:articlesReducer,
    // filters:filtersReducer,
    label:selectReducer,
    date:dataRangeReducer
})