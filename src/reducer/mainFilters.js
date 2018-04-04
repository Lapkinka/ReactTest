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
    console.log(" action in mainFilters:", action)
    switch (type){
        case DATARANGE : return Object.assign({},filters,{dataRange:payload.dataRange})
        case SELECT  : return Object.assign({},filters,{selection:payload.selection})
        case DELETE_ARTICLE : return Object.assign({},filters,{selection:payload.selection.filter(article => article.id !== payload.id)})
    }
    return filters
}