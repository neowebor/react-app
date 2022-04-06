import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../assets/images/delete.png';
import completeIcon from '../assets/images/check-mark.png';
import ListItem from "./ListItem";



const List = ({tasks, setTasks}) => {

  return (
    <div>
      {tasks.map((task, index) =>
        <ListItem key={task.id} task={task} index={index} setTasks={setTasks} tasks={tasks}/>
      )}
    </div>
  );
};

export default List;