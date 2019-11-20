import React, { Component } from 'react';

class MyName extends Component {
  /*
  // defaultProps 설정 (1)
  static defaultProps = {
    name: '기본이름'
  }
  */
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다. (클래스 컴포넌트)
      </div>
    );
  }
}

// defaultProps 설정 (2)
MyName.defaultProps = {
  name: 'defaultProps'
};

export default MyName;