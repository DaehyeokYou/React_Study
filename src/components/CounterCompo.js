import React, { Component } from 'react';

class Counter extends Component {
  /*
  // classfield X
  // constructor 사용해야하고, 함수에 bind걸어줘야 해서 소스가 뚱뚱해지고, 불필요한 코드 증가
  constructor(props) {
    super(props);
    this.state = {
      number: props.value
    }
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }
  handleIncrease() {
    this.setState({
      number: this.state.number + 1
    });
  }
  handleDecrease() {
    this.setState({
      number: this.state.number - 1
    });
  }
  */

  // classfield 사용
  // constructor 사용안함, bind 코드와 같은 불필요한 코드 감소
  state = {
    number: this.props.value,
    foo: {
      bar: 0,
      foobar: 1
    }
  }
  // 화살표 함수 사용하면 this를 잃지 않음
  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  }
  handleDecrease = () => {
    // setState에 객체 대신 함수 전달
    this.setState((state) => ({
      number: state.number - 1
    })
    );
    /*
    // 비구조화 할당
    this.setState(
      ({ number }) => ({
        number: 1
      })
    );
    */
    /*
    this.setState({
      number: this.state.number - 1
    });
    */
  }

  settingStateOriginal = () => {
    this.setState({
      number: this.props.value,
      foo: {
        bar: 0,
        foobar: 1
      }
    });
  }

  settingState = () => {
    this.setState({
      foo: {
        foobar: 2 // foobar이 업데이트 되는 것이 아닌, 기존의 foo 객체가 변경됨.
      }
    });
  }

  settingState2 = () => {
    this.setState({
      foo: {
        ...this.state.foo,
        foobar: 2 // foobar이 업데이트! 기존의 foo 객체가 변경 X
      }
    });
  }

  render() {
    return (
      <div>
        <h1>2. state값 변경</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        <br></br>
        <br></br>
        <div>
          State값: number : {this.state.number},
                   foo : bar : {this.state.foo.bar},
                   foo : foobar : {this.state.foo.foobar}.
        </div>
        <button onClick={this.settingStateOriginal}>InitState</button>
        <br></br>
        <button onClick={this.settingState}>SetState(foo.foobar:2)</button>
        <br></br>
        <button onClick={this.settingState2}>SetState(...this.state.foo, foo.foobar:2)</button>
      </div>
    );
  }
}
// defaultProps 설정 
Counter.defaultProps = {
  value: 1
};
export default Counter;