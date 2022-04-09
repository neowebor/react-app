import React, {useCallback, useEffect, useState} from 'react';
import List from "./List";
import {useDispatch, useSelector} from "react-redux";
import {addTodoActionCreator} from "../../redux/todoReducer";
import { Input } from '../Input'
import SelectTypeFiltered from "./SelectTypeFiltered";
import {filteredByValue} from "../Utils/filteredByValue";



const Todos = () => {
  const dispatch = useDispatch()
  const {tasks, typeValue} = useSelector(state => state.todo);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setFilteredTasks(filteredByValue(tasks, typeValue));
  }, [tasks, typeValue]);

  const addTask = useCallback((value) => {
    const newTask = {
      id: Date.now(),
      name: value,
      status: false,
    }

    dispatch(addTodoActionCreator(newTask));
  }, [])



  return (
    <div>
      <Input executorFunc={addTask}/>
      <SelectTypeFiltered />
      <List filteredTasks={filteredTasks} tasks={tasks}/>
    </div>
  );
};

export default Todos;