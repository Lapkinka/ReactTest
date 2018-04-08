import {createSelector} from 'reselect'

const commentsGetter = state => state.comments
const idGetter = (state,props) => props.id

export const commentsSelectorFactory = () => createSelector(commentsGetter,idGetter,(comments,id) =>{
    console.log("factorycomment")
    // return comments.find(elem => elem.id === id)
    return comments[id]
})