import React from 'react';

// 함수형 컴포넌트 (1)
function MyName(props) {
  return (
    <div>
      안녕하세요! 제 이름은 <b>{props.name}</b> 입니다. (함수형 컴포넌트)
    </div>
  );
};

/*
// 함수형 컴포넌트 (2)
const MyName = (props) => {
  return (
    <div>
      안녕하세요! 제 이름은 <b>{props.name}</b> 입니다. (함수형 컴포넌트)
    </div>
  );
};
*/
/*
// 함수형 컴포넌트 (3)
const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 <b>{name}</b> 입니다. (함수형 컴포넌트)
    </div>
  );
};
*/

// defaultProps 설정
MyName.defaultProps = {
  name: 'defaultProps'
};


export default MyName;