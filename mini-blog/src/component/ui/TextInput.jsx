import React from 'react';
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${props =>
        props.height &&
        `
        height: ${props.height}px;
        `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
  `;

  function TextInput(props){
    const {height, value, onChange} = props;

    return <StyledTextarea height={height} value={value} onChange={onChange} />;
  }
//높이 설정을 위한 height, 입력된 값을 표시하기 위한 value, 변경된 값을 상위 컴포넌트로 전달하기 위한 onChange가 있다.
  export default TextInput;