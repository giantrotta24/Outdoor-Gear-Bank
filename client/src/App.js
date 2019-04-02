import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Main from "./components/pages/Main";
import Maintenance from "./components/pages/Maintenance";
import Rent from "./components/pages/Rent";
import Return from "./components/pages/Return";
import Inventory from "./components/pages/Inventory";

// import About from "./components/pages/About";
// import Blog from "./components/pages/Blog";
// import Contact from "./components/pages/Contact";

class App extends Component {
  
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
      </div>
      </Router>
    );
  }
}

export default App;
