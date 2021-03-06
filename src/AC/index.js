import {DELETE_ARTICLE,INCREMENT,SELECT,DATARANGE,ADD_COMMENT,LOAD_ARTICLES,LOAD_ART,LOAD_COMMENT,START,FAIL,SUCCESS,LOAD_ALL_COMMENTS} from '../constants'
import {push,replace} from 'react-router-redux'

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

export function loadArticles() {
    return{
        type:LOAD_ARTICLES,
        callAPI:'/api/article'
    }
}

// export function loadArt(id) {
//     return{
//         type:LOAD_ART,
//         callAPI:`/api/article/${id}`
//     }
// }

export function loadArt(id) {
    return (dispatch) => {
      dispatch({
        type: LOAD_ART,
        payload: {id},
        callAPI: `/api/article/${id}`
      })
    // return {
    //     type: LOAD_ART,
    //     payload: {id},
    //     callAPI: `/api/article/${id}`
    // }

        setTimeout(() =>{
            fetch(`/api/article/${id}`)
                .then(res => {
                  if(res.status >= 400) throw new Error(res.statusText)

                  return res.json()
                })
                .then(response => dispatch({
                    type:LOAD_ART + SUCCESS,
                    payload:{ id, response}
                }))
                .catch(error =>{
                    dispatch({
                      type:LOAD_ART + FAIL,
                      payload:{id,error}
                    })
                    dispatch(replace("/error"))
                })
        },1000)
    }
}

export function loadComment(articleId) {
    return{
        type:LOAD_COMMENT,
        payload: {articleId},
        callAPI:`/api/comment?article=${articleId}`
    }
}

export function loadAllComments(page) {
    // return{
    //     type:LOAD_ALL_COMMENTS,
    //     payload:{page},
    //     callAPI:`/api/comment`
    // }
    return (dispatch,getState) => {
        const {comments:{pagination}} = getState()
      if(pagination.getIn([page,'loading']) || pagination.getIn([page,'ids'])) return
      dispatch({
            type: LOAD_ALL_COMMENTS,
            payload:{page},
            callAPI:`/api/comment?limit=5&offset=${(page-1)*5}`
        })

        // setTimeout(() =>{
        //     fetch(`/api/comment`)
        //         .then(res => res.json())
        //         .then(response => dispatch({
        //             type:LOAD_ALL_COMMENTS + SUCCESS,
        //             payload:{ page, response}
        //         }))
        //         .catch(error => dispatch({
        //         type:LOAD_ALL_COMMENTS + FAIL,
        //         payload:{ page, error}
        //     }))
        // },1000)
    }
}