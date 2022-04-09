import React, {useState} from 'react';
import styled from "styled-components";
import {editActionCreator} from "../../redux/todoReducer";
import {useDispatch} from "react-redux";

const Task = ({task}) => {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false)

  const [localEditText, setEdit] = useState(task.name);

  const editFlag = () => {
    setFlag(true)

  }

  const editText = (event) => {
    if(event.keyCode === 27) setFlag(false)
    if(event.keyCode === 13) {
      dispatch(editActionCreator(task.id, localEditText))
      setFlag(false)
    }
  }

  return (
    <div>
      {
        flag ? <Input onChange={(event) => setEdit(event.target.value)} value={localEditText} onKeyDown={editText}/> : <TaskElem onClick={editFlag}>{task.name}</TaskElem>
      }
    </div>
  );
};

const TaskElem = styled.div`
  width: 100%;
  padding: 0.5rem;
  font-size: 20px;
  margin-top: 10px;
`

const Input = styled.input`
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  padding: 0.5rem;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 10px;
`

export default Task;