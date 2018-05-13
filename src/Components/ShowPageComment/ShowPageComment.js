import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Loader from '../Loader/loader'
import {loadAllComments} from '../../AC'

class ShowPageComment extends PureComponent {
    static defaultProps = {};

    static propTypes = {
      response:PropTypes.shape({
        records: PropTypes.array,
        total: PropTypes.number
      })
    };
    componentDidMount(){
        const{loadAllComments,page,response} = this.props
        console.log("response:",response)
        console.log("page:",page)
        if(!response || !response.loadedComments) loadAllComments(page)
    }
    render() {
      return(
        <div>
          {this.getBody()}
        </div>
      )
    }
    getBody (){
      const {response,page} = this.props;
      if(!response || !response.loadedComments) return <Loader/>
      if(page <= 0) return(<section>Enter a positive number</section>);
      let beginning = (page - 1) * 5, end = 5 * page
      let nowPageCount = [...response.records.slice(beginning,end)]
      if(!nowPageCount.length) return(<section>No comments on this page, please enter another</section>);
      return (
          <div>
              <span>total:{response.total}</span>
              <br/><br/>
              {nowPageCount.map((elem,i) => {
                  return (
                      <div key={i}>
                          <span>"id":{elem.id}</span>
                          <br/><br/>
                          <span>"user":{elem.user}</span>
                          <br/><br/>
                          <span>"text":{elem.text}</span>
                          <br/><br/>
                      </div>)
              })
              }
          </div>
      );
    }
}

export default connect((state,ownProps) =>({
  response: state.allComments.entities.get(ownProps.page)}),{loadAllComments})(ShowPageComment);
