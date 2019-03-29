import React, { Component } from "react";
import Wrapper from './components/Wrapper';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <SignUp />
      </Wrapper>
    );
  }
}

export default App;
