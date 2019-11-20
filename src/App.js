import React, { Component } from 'react';
import FuncMyName from './components/FuncMyNameCompo'
import ClsMyName from './components/ClsMyNameCompo'
import Counter from './components/CounterCompo'
import LifeCycle from './components/LifeCycleCompo'
class App extends Component {
  render() {
    return (
      <div>
      <h1>1. Component 생성 방법</h1>
      <FuncMyName name='deliveredProps'/>
      <ClsMyName/>
      <br></br>
      <hr></hr>
      <Counter/>
      <br></br>
      <hr></hr>
      <LifeCycle/>
      </div>
    );
  }
}

export default App;
