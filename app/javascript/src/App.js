import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';

import HomeContainer from './HomeContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Router history={browserHistory}>
        <Route path='/' component={HomeContainer}/>
      </Router>
    )
  }
}

export default App;
