import {articles as defaultArticles} from '../fixtures'
import {MAINFILTER} from '../constants'
// import dataRangeReducer from './filters/dataRange'
// import selectReducer from './filters/select'


export default (articlesState = defaultArticles,action) =>{
    // const label = selectReducer
    // const date = dataRangeReducer
    const {type,payload} = action;
    // console.log("label:",label)
    // console.log("date:",date)
    // console.log("payload:",payload)
    switch (type){
        case MAINFILTER :return articlesState
    }

    return articlesState
}