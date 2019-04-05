import React, { Component } from 'react';
import {
  Link,
  Route,
  Prompt,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul class='list'>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/product/0">台灯</Link></li>
            <li><Link to="/good/1">沐浴露</Link></li>
            <li><Link to="/product/2">SK2</Link></li>
          </ul>
          <hr />
          <Route path='/' exact render={(Routerprops)=>{
            return (
            <div>
              <button onClick={Routerprops.history.goBack}>返回上级</button>
              <span>这是首页</span>
            </div>)
          }}></Route>
          <Route path={['/product/:id','/good/:id']} component={Product}></Route>
        </div>
      </Router>
    );
  }
}
class Product extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <button onClick={this.props.history.goBack}>返回上级</button>
        <span>这是{this.props.match.params.id}的页面</span>
        <p>
        <button onClick={()=>this.props.history.push('/',null)}>回到首页</button>
        </p>
      </div>
    )
  }
}
export default App;
