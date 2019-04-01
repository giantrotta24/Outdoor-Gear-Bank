import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//components
import Wrapper from './components/Wrapper';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
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
      console.log('Get user response: ');
      console.log(response.data);
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          <Wrapper>
            {this.state.loggedIn &&
              <p>Welcome {this.state.username}!</p>
            }
            <Route
              exact path="/"
              render={() =>
                <LogIn
                  updateUser={this.updateUser}
                />}
            />
            <Route
              path="/login"
              render={() =>
                <LogIn
                  updateUser={this.updateUser}
                />}
            />
            <Route
              path="/signup"
              render={() =>
                <SignUp />}
            />
          </Wrapper>
        </Router>
      </div>
    );
  }
}

export default App;
