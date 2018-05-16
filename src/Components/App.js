import React,{Component,PureComponent} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
// import ArticlesChart from './ArticlesChart'
import Articles from './routes/articles'
import NewArticle from './routes/NewArticle'
import NotFound from './routes/NotFound'
import UserForm from './userForm'
import Filters from './Filters/index'
import Counter from './Counter'
import CommentsAllShow from './routes/CommentsAllShow'
// import {HashRouter as Router,Route,Link,NavLink} from 'react-router-dom'
import {Route,Link,Switch,NavLink} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import history from '../history'

class App extends Component{
    static propTypes= {
        // articles:PropTypes.array.isRequired
    };

    static childContextTypes = {
        user:PropTypes.string
    }

    getChildContext(){
        return{
            user:this.state.userName
        }
    }

    state = {
        userName : ''
    }
    render(){
        // const {articles} = this.props;
        return(
            <ConnectedRouter history = {history}>
                <div>
                    <div>
                        <h2>Menu</h2>
                        <div><NavLink activeStyle = {{color:"red"}} to = {"/counter"}>Counter</NavLink></div>
                        <div><NavLink activeStyle = {{color:"red"}} to = {"/filters"}>Filters</NavLink></div>
                        <div><NavLink activeStyle = {{color:"red"}} to = {"/articles"}>ArticleList</NavLink></div>
                    </div>
                    <UserForm value={this.state.userName} onChange = {this.handleUserChange}/>
                    <Switch>
                      <Route path = "/counter" component = {Counter}/>
                      <Route path = "/comments" component = {CommentsAllShow}/>
                      <Route path = "/filters" component = {Filters}/>
                      <Route path = "/articles/new" component = {NewArticle}/>
                      <Route path = "/articles" component = {Articles}/>
                      <Route path = "*" component = {NotFound}/>
                    </Switch>
                    {/*<Counter/>*/}
                    {/*<Filters />*/}
                    {/*<ArticleList />*/}
                    {/*<ArticlesChart articles = {articles}/>*/}
                </div>
            </ConnectedRouter>
        )
    }

  handleUserChange = (userName) => this.setState({userName})
}

export default App