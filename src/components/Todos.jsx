import React, {useRef, useState} from 'react';
import styled from 'styled-components'
import List from "./List";

const InputEl = styled.input.attrs({
  type: 'text',
  placeholder: 'Enter a task...'
})`
  width: 100%;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const inputText = useRef(null);

  function addTask(event) {
    if(inputText.current.value === '') return;
    if(event.keyCode === 13) {
      const text = inputText.current.value;
      let newTask = {
        text,
        id: Date.now(),
        complete: false
      };
      setTasks([...tasks, newTask]);
      inputText.current.value = '';
    }
  }


  return (
    <div>
      <InputEl ref={inputText} onKeyDown={addTask}/>
      <List tasks={tasks} setTasks={setTasks}/>
    </div>
  );
};

export default Todos;