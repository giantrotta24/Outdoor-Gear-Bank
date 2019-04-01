import React, { Component } from "react";
<<<<<<< HEAD
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import Wrapper from './components/Wrapper';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import LogIn from './components/LogIn';
import Home from './components/pages/Home';
import Main from './components/pages/Main';
import PrivateRoute from './components/PrivateRoute';
=======
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Main from "./components/pages/Main";
>>>>>>> 0f9afde8edf45683296ee13fe59331f58f1616ca
import Maintenance from "./components/pages/Maintenance";
import Rent from "./components/pages/Rent";
import Return from "./components/pages/Return";
import Inventory from "./components/pages/Inventory";
<<<<<<< HEAD
=======

// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";
>>>>>>> 0f9afde8edf45683296ee13fe59331f58f1616ca

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
<<<<<<< HEAD
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
=======
      <Router>
        <div>
          <NavTabs />
          <div className="App">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Welcome to Outdoor Gear Bank</h2>
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
        
        <p className="App-main mt-3 ml-3">
          Supplemental information display area. <code>...</code>
        </p>
>>>>>>> 0f9afde8edf45683296ee13fe59331f58f1616ca
      </div>
      </Router>
    );
  }
}

export default App;
