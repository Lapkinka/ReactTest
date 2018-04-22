import {createSelector} from 'reselect'

const asd = state => state
// console.warn("asd STATE",asd)
const commentsGetter = state => state.comments.entities
console.warn(commentsGetter,"commentsGetter")
const idGetter = (state,props) => props.id
// console.warn("commentsGetter",commentsGetter)
// console.warn("idGetter",idGetter)


// export const commentsSelectorFactory = () => createSelector(commentsGetter,idGetter,(comments,id) =>{
//     console.log("factorycomment")
//     // return comments.find(elem => elem.id === id)
//     return comments[id]
// })

export const commentsSelectorFactory = () => createSelector(commentsGetter,idGetter,(comments,id) =>{
    // console.log("factorycomment")
    // console.warn("state",store)
    // console.warn("store.comments",store.comments)
    console.warn("comments in selector",comments)
    return comments.get(id)
    // return comments.find(elem => elem.id === id)
    // return store
})