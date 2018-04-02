import React from 'react'

export default Component => class Accordion extends React.Component{
    state = {
        openElemId : null
    };
    render(){
        return <Component {...this.props} toggleOpenElem = {this.toggleOpenElem} openElemId = {this.state.openElemId}/>
    }
    toggleOpenElem = openElemId => ev => {
        this.setState({
            openElemId: openElemId === this.state.openElemId ? null : openElemId
        });
    }
}