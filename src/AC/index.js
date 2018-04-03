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

// export function filters(articles) {
//     return {
//         type: SELECT,
//         payload:{articles}
//     }
// }

export function select(selection) {
    return {
        type: SELECT,
        payload:{selection}
    }
}

export function dataRange(from,to) {
    return {
        type: DATARANGE,
        payload:{from,to}
    }
}