import React from 'react';
import ListItem from "./ListItem";

const List = ({tasks, filteredTasks}) => {


  return (
    <div>
      {filteredTasks.map((task, index) =>
        <ListItem key={task.id} task={task} index={index} tasks={tasks}/>
      )}
    </div>
  );
};

export default List;