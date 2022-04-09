import React, {useState} from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import {filteredActionCreator} from "../../redux/todoReducer";

const SelectTypeFiltered = () => {
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState('');


  function filteredTask(event) {
    setSelectValue(event.target.value);
    dispatch(filteredActionCreator(event.target.value))
  }


  return (
    <Wrapper>
      <select onChange={filteredTask} value={selectValue}>
        <option value="">Default</option>
        <option value="all">all</option>
        <option value="todo">todo</option>
        <option value="done">done</option>
      </select>
    </Wrapper>

  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`

export default SelectTypeFiltered;