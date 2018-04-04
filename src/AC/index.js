import {DELETE_ARTICLE,INCREMENT,SELECT,DATARANGE} from '../constants'

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