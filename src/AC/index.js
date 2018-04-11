import {DELETE_ARTICLE,INCREMENT,SELECT,DATARANGE,ADD_COMMENT} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload:{ id }
    }
}

export function select(selection) {
    return {
        type: SELECT,
        payload:{selection}
    }
}

export function dataRange(dataRange) {
    return {
        type: DATARANGE,
        payload:{dataRange}
    }
}

export function addComment(user,text,articleId) {
    return {
        type: ADD_COMMENT,
        payload:{user,text,articleId},
        needRnd:true
    }
}