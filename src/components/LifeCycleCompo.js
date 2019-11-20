import React, { Component } from 'react';

const Problematic = (errThrow) => {
  if (errThrow) {
    console.log('Problematic');
    throw (new Error('버그가 나타났다!'));
  } else {
    return (
      <div>

      </div>
    );
  }
};

class LifeCycle extends Component {
  state = {
    number: this.props.value
  }
  // constructor - 컴포넌트 생성시 호출
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 여기서는 setState 를 하는 것이 아니라 특정 props 가 바뀔 때
    // 설정하고 싶은 state 값을 리턴하는 형태로 사용됩니다.
    console.log('getDerivedStateFromProps');
    if (nextProps.value !== prevState.value) {
      return { value: nextProps.value };
    }
    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
  }
  /*
  // 현재 X 
  componentWillMount() {
    console.log('componentWillMount (deprecated)');
  }
  */
  // componentDidMount - 컴포넌트가 화면에 나타나게 됐을 때 호출
  componentDidMount() {
    // 주로, 해당 컴포넌트에서 필요로하는 데이터를 요청하기 위해 axios, fetch 등을 통하여 
    // ajax 요청을 하거나, DOM 의 속성을 읽거나 직접 변경하는 작업을 진행합니다.
    console.log('componentDidMount');
  }

  // render함수 호출 여부 결정 (기본적으로 return true;)
  shouldComponentUpdate(nextProps, nextState) {
    // state.number값이 변경되지 않았으면 false; render() X
    console.log('shouldComponentUpdate');
    if (nextState.number === this.state.number && !nextState.errorBtn) return false;
    return true;
  }

  // getSnapshotBeforeUpdate() - 실제 DOM 업데이트 바로 전 실행
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 여기서 return값은 componentDidUpdate 세번째 param값인 snapshot에서 사용됨.
    console.log('getSnapshotBeforeUpdate');
    return 'fromSnapshotBeforeUpdate';
  }
  // componentDidUpdate - component Updated 
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate',', snapshot: ',snapshot);
  }
  /*
  // 현재 X
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }
  */

  /************** 컴포넌트 에러 핸들링 *******************/
  componentDidCatch(error, info) {
    console.log('componentDidCatch');
    this.setState({
      error: true
    });
  }

  handleChange = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleStay = () => {
    this.setState({
        number: this.state.number
      });
  }

  handleError = () => {
    console.log('handleError');
    this.setState({
        errorBtn: true
      });
  }
  
  render() {
    console.log('render');
    if (this.state.error) return (<h1>에러발생!</h1>);
    return (
      <div>
        <h1>3. Component Life Cycle</h1>
        <div>Number 값 : {this.state.number}</div>
        <button onClick={this.handleChange}>state값 변경</button>
        <button onClick={this.handleStay}>state값 유지</button>
        <button onClick={this.handleError}>Error 발생</button>
        { this.state.errorBtn && <Problematic errThrow='true'/> }
        <div>
          <p><b>Componet 생성시 Life Cycle</b></p>
          <ol> 
            <li>constructor</li>
            <li>getDerivedStateFromProps</li>
            <li>render</li>
            <li>componentDidMount</li>
          </ol>
          <p><b>Componet 업데이트시 Life Cycle</b></p>
          <ol> 
            <li>getDerivedStateFromProps</li>
            <li>shouldComponentUpdate</li>
            <li>↑return ture이면 ↓, return false이면 끝 </li>
            <li>render</li>
            <li>getSnapshotBeforeUpdate</li>
            <li>componentDidUpdate</li>
          </ol>
        </div>
      </div>
    );
  }
}

LifeCycle.defaultProps = {
  value: 1
}

export default LifeCycle;