import React,{Component,PureComponent} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
// import ArticlesChart from './ArticlesChart'
import Articles from './routes/articles'
import NewArticle from './routes/NewArticle'
import NotFound from './routes/NotFound'
import UserForm from './userForm'
import Filters from './Filters/index'
import {ChangeWordsLanguage} from './ChangeWordsLanguage'
import Counter from './Counter'
import ChoiceLanguage from './ChoiceLanguage'
import CommentsAllShow from './routes/CommentsAllShow'
// import {HashRouter as Router,Route,Link,NavLink} from 'react-router-dom'
import {Route,Link,Switch,NavLink} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import history from '../history'

class App extends Component{
    static propTypes= {
        // articles:PropTypes.array.isRequired
    };
    static contextTypes = {
      store:PropTypes.object
    }

    static childContextTypes = {
      user:PropTypes.string,
      choiceLanguage:PropTypes.string
    }

    getChildContext(){
        return{
          user:this.state.userName,
          choiceLanguage:this.state.choiceLanguage
        }
    }

    state = {
        userName : '',
        choiceLanguage:"en"
    }
    render(){
        return(
            <ConnectedRouter history = {history}>
                <div>
                  <ChoiceLanguage onClick = {this.changeLanguage}/>
                    <div>
                        <h2>{ChangeWordsLanguage('menu',this.state.choiceLanguage)}</h2>
                        <div>
                          <NavLink activeStyle = {{color:"red"}} to = {"/counter"}>
                            <h2>{ChangeWordsLanguage('counter',this.state.choiceLanguage)}</h2>
                          </NavLink>
                        </div>

                        <div>
                          <NavLink activeStyle = {{color:"red"}} to = {"/filters"}>
                            <h2>{ChangeWordsLanguage('filters',this.state.choiceLanguage)}</h2>
                          </NavLink>
                        </div>

                        <div>
                          <NavLink activeStyle = {{color:"red"}} to = {"/articles"}>
                            <h2>{ChangeWordsLanguage('article_list',this.state.choiceLanguage)}</h2>
                          </NavLink>
                        </div>
                    </div>
                    <UserForm value = {this.state.userName} onChange = {this.handleUserChange}/>
                    <Switch>
                      <Route path = "/counter" component = {Counter}/>
                      <Route path = "/comments" component = {CommentsAllShow}/>
                      <Route path = "/filters" component = {Filters}/>
                      <Route path = "/articles/new" component = {NewArticle}/>
                      <Route path = "/articles" component = {Articles}/>
                      <Route path = "*" component = {NotFound}/>
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }

  handleUserChange = (userName) => this.setState({userName})
  changeLanguage = (choiceLanguage) => this.setState({choiceLanguage})
}

export default App