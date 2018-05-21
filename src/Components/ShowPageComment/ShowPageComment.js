import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Loader from '../Loader/loader'
import {loadAllComments} from '../../AC'
import {NavLink} from 'react-router-dom'
import Comments from '../Comments'
import ChangeWordsLanguage from '../ChangeWordsLanguage'
import './style.css'

class ShowPageComment extends PureComponent {
    // static defaultProps = {};

    // static propTypes = {
    //   response:PropTypes.shape({
    //     records: PropTypes.array,
    //     total: PropTypes.number
    //   }),
    //   loadingComments:PropTypes.shape({
    //     loading: PropTypes.bool
    //   }),
    // };
    componentWillMount(){
      this.props.loadAllComments(this.props.page)
    }
    componentWillReceiveProps({page,loadAllComments}){
      loadAllComments(page)
    }
    // componentDidMount(){
    //     const{loadAllComments,page,response,loadingComments} = this.props
    //     if(!response || loadingComments.loading) loadAllComments(page)
    // }
    render() {
      const {total} = this.props
      console.log("total",total)
      if(!total) return <Loader/>
      return(
        <div>
          {this.getBody()}
          {this.getLinks()}
        </div>
      )
    }
    getBody (){
      // const {response,page,loadingComments} = this.props;
      // console.log(loadingComments,"fdsgdgdf")
      // if(!response || !loadingComments.loading) {
      //   if(loadingComments !== undefined) console.log(loadingComments.page.loading)
      //   return <Loader/>
      // }
      // if(page <= 0) return(<section>Enter a positive number</section>);
      // let beginning = (page - 1) * 5, end = 5 * page
      // let nowPageCount = [...response.records.slice(beginning,end)]
      // if(!nowPageCount.length) return(<section>No comments on this page, please enter another</section>);
      // let result = {
      //   total:response.total,
      //   records:nowPageCount.map(elem => {
      //     return {
      //       id:elem.id,
      //       user:elem.user,
      //       text:elem.text
      //     }
      //   })
      // }
      // return (
      //   <div className='fix'>
      //     {JSON.stringify(result,null, '\t')}
      //   </div>
      // );
      const{comments,loading} = this.props
      console.log("comments,",comments)
      console.log("loading",loading)
      if(loading || !comments) return <Loader/>
      return <ul>{comments.map(elem => <li key={elem}><Comments id={elem}/></li>)}</ul>

    }
    getLinks (){
      const {total} = this.props;
      return(
        <div>
          {Array.from({length:Math.ceil(total/5)},(el,i) => {
            return(
              <div key={i}>
                <NavLink activeStyle = {{color:"red"}} to = {`/comments/${i+1}`}>
                  <ChangeWordsLanguage word = {'page'} symbol = {':'}/>
                  {i+1}
                </NavLink>
              </div>)
          })}
        </div>
      )
    }
}

export default connect((state,{page}) =>({
  total:state.comments.total,
  loading:state.comments.pagination.getIn([page,'loading']),
  comments:state.comments.pagination.getIn([page,'ids'])
}),{loadAllComments})(ShowPageComment);
