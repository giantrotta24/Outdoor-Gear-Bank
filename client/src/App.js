import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Wrapper from './components/Wrapper';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Home from './components/pages/home';
import Main from './components/pages/Main';
import PrivateRoute from './components/PrivateRoute';
import Maintenance from './components/pages/Maintenance';
import Rent from './components/pages/Rent';
import Return from './components/pages/Return';
import Inventory from './components/pages/Inventory';
import Checkout from './components/pages/Checkout';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
    }

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get('/user/').then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <NavBar updateUser={this.updateUser} username={this.state.username} loggedIn={this.state.loggedIn} />
        <Wrapper>

          <Switch>
            <Route
              exact path='/'
              component={Home}
            />
            <Route
              path='/login'
              render={() =>
                <LogIn
                  updateUser={this.updateUser}
                />}
            />
            <Route
              path='/logout'
              render={() =>
                <LogIn
                  updateUser={this.updateUser}
                />}
            />
            <Route
              path='/signup'
              render={() =>
                <SignUp />}
            />
            <PrivateRoute
              isAuthenticated={this.state.loggedIn}
              exact path='/main'
              component={Main}
            />
            <PrivateRoute
              isAuthenticated={this.state.loggedIn}
              exact path='/rent'
              component={Rent}
            />
            <PrivateRoute
              isAuthenticated={this.state.loggedIn}
              path='/return'
              component={Return}
            />
            <PrivateRoute
              isAuthenticated={this.state.loggedIn}
              path='/maintenance'
              component={Maintenance}
            />
            <PrivateRoute
              isAuthenticated={this.state.loggedIn}
              path='/inventory'
              component={Inventory}
            />
            <PrivateRoute
              isAuthenticated={this.state.loggedIn}
              path="/checkout"
              component={Checkout}
            />
          </Switch>
        </Wrapper>
        <Footer />
      </Router>

    );
  }
}

export default App;
