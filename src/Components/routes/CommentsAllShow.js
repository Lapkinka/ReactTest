import React from 'react';
import {Route,Redirect} from "react-router-dom"
import ShowPageComment from '../ShowPageComment/ShowPageComment'

function CommentsAllShow ({match}) {
    if(match.isExact) return <Redirect to = "/comments/1"/>
    return <Route path="/comments/:page" render={getPagination}/>
}

function getPagination ({match}) {
  return <ShowPageComment page={match.params.page}/>
}

export default CommentsAllShow
