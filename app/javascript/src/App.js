import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { getData } from './Redux/modules/leagueData';

import NavigationBar from './NavigationBar';
import HomeContainer from './HomeContainer';
import StandingsContainer from './StandingsContainer';
import StatsContainer from './StatsContainer';
import AboutContainer from './AboutContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render(){
    return (
      <Provider store={this.props.store}>
        <Router>
          <NavigationBar />
          <Route exact={true} path='/' component={HomeContainer}/>
          <Route exact={true} path='/Standings' component={StandingsContainer}/>
          <Route exact={true} path='/Stats' component={StatsContainer}/>
          <Route exact={true} path='/About' component={AboutContainer}/>
        </Router>
      </Provider>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
