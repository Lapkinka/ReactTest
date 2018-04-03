import {articles as defaultArticles} from '../../fixtures'
import {SELECT} from '../../constants'

export default (articlesState = defaultArticles,action) =>{
    const {type,payload} = action;
    console.log(payload,"payload SELECT")
    // const labels = payload === undefined || payload.selection === null ? null :
    //     payload.selection.map(elem =>elem.label);
    // console.log(labels,"labels SELECT")
    switch (type){
        case SELECT :return articlesState
    }

    return articlesState
}