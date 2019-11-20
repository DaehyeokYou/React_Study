import React, { Component } from 'react';
import FuncMyName from './components/FuncMyNameCompo'
import ClsMyName from './components/ClsMyNameCompo'
class App extends Component {
  render() {
    return (
      <div>
      <FuncMyName/>
      <br></br>
      <ClsMyName/>
      </div>
    );
  }
}

export default App;
