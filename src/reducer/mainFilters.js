import {DATARANGE, DELETE_ARTICLE, SELECT} from '../constants'

const defaultFilters = {
    selection:[],
    dataRange :{
        from:null,
        to:null
    }
}

export default (filters = defaultFilters,action) =>{
    const {type,payload} = action;
    switch (type){
        case DATARANGE : return Object.assign({},filters,{dataRange:payload.dataRange})
        case SELECT  : return Object.assign({},filters,{selection:payload.selection})
        case DELETE_ARTICLE : return Object.assign({},filters,{selection:filters.selection.filter(elem => elem !== payload.id)})
        // case DELETE_ARTICLE : return Object.assign({},filters,{selection:articles.filter(article => article.id !== payload.id)})
        // case DELETE_ARTICLE :     console.log(articles.filter(article => article.id !== payload.id))
    }
    return filters
}