import React,{Component} from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component{
    static PropTypes = {

    };
    render(){
        return(
            <div>
                Name:<input type = 'text' value = {this.props.userName} onChange={this.handleUserChange}/>
            </div>
        )
    }
    handleUserChange = (ev) =>{
        this.props.onChange(ev.target.value)
        // this.setState({
        //     userName:ev.target.value
        // })
    }

}

export default UserForm
