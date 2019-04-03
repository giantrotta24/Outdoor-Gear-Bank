import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import Wrapper from './components/Wrapper';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Home from './components/pages/home';
import Main from './components/pages/Main';
// import PrivateRoute from './components/PrivateRoute';
import Maintenance from "./components/pages/Maintenance";
import Rent from "./components/pages/Rent";
import Return from "./components/pages/Return";
import Inventory from "./components/pages/Inventory";

class App extends Component {
<<<<<<< HEAD
  
  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <div className="App">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2 className="mt-3">Outdoor Gear Bank</h2>
        </div>
          <Route exact path="/" component={Main} />
          <Route exact path="/rent" component={Rent} />
          <Route exact path="/return" component={Return} />
          <Route exact path="/maintenance" component={Maintenance} />
          <Route exact path="/inventory" component={Inventory} />

          {/* <Route exact path="/calander" component={Calendar} /> */}
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} /> */}
        
        {/* <p className="App-main mt-3 ml-3">
          Supplemental information display area. <code>...</code>
        </p> */}
=======
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
              component={Home}
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
            <Switch>
            <Route
              exact path="/main"
              component={Main}
            />
            <Route
              exact path="/rent"
              component={Rent}
            />
            <Route
              exact path="/return"
              component={Return}
            />
            <Route
              exact path="/maintenance"
              component={Maintenance}
            />
            <Route
              exact path="/inventory"
              component={Inventory}
            />

            </Switch>
          </Wrapper>
        </Router>
>>>>>>> 0228cd799eeb3416c8c696c5a6a757eefedc25e3
      </div>
    );
  }
}

export default App;
