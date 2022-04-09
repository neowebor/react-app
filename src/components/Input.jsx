import React, {useState, memo} from 'react';
import styled from "styled-components";

export const Input = memo(({executorFunc}) => {
  const [textValue, setTextValue] = useState('');

  function setValueInput(event) {
    setTextValue(event.target.value);
  }

  function keyPressHandler(event) {
    if(event.keyCode === 13) {
      executorFunc(textValue)
      setTextValue('')
    }
  }


  return (
    <Wrapper>
      <InputEl onChange={setValueInput} value={textValue} onKeyDown={keyPressHandler} placeholder="Enter a task..."/>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
`

export const InputEl = styled.input`
  width: 100%;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  padding: 1rem;
  border-radius: 10px;
`;

