import React,{Component,PureComponent} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
// import ArticlesChart from './ArticlesChart'
import UserForm from './userForm'
import Filters from './Filters/index'
import Counter from './Counter'

class App extends Component{
    static propTypes= {
        // articles:PropTypes.array.isRequired
    };
    render(){
        // const {articles} = this.props;
        return(
            <div>
                <UserForm/>
                <Counter/>
                <Filters />
                <ArticleList />
                {/*<ArticlesChart articles = {articles}/>*/}
            </div>
        )
    }
}

export default App