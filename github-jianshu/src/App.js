import React, { Component } from 'react';
//引入react-redux的核心组件providier
import { Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./common/hearder/index";
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';


class App extends Component {
  render() {
    return (
      // Provider包裹的组件都用能力去后去store中的内容，或者说provider把store中的数据都提供给了内部的所有组件
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header/> 
            <Route path='/' exact component={Home}>  </Route>
            <Route path='/detail' exact component={Detail}>  </Route>
            {/* <Route path='/' exact render={()=> <div>home</div>}>  </Route>
            <Route path='/detail' exact render={()=><div>detail</div>}>  </Route> */}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
