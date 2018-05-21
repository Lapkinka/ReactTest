import React from 'react'
import PropTypes from 'prop-types'
import App from './App'
import store from '../Store'
import {Provider} from 'react-redux'


// function Root (props){
function Root (){
    return(
        <Provider store = {store}>
            {/*<App {...props}/>*/}
            <App/>
        </Provider>
    )
}

Root.propTypes = {
};

export default Root