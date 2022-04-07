import React, {useCallback, useEffect, useState} from 'react';
import List from "./List";
import {useDispatch, useSelector} from "react-redux";
import {addTodoActionCreator} from "../redux/todoReducer";
import { Input } from './Input'



const Todos = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.todo.tasks);
  const state = useSelector(state => state);

  function saveToLocalStorage(state) {
    try {
      const prevState = JSON.stringify(state);
      localStorage.setItem("localState", prevState);
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    saveToLocalStorage(state);
  }, [tasks])

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
      <List tasks={tasks}/>
    </div>
  );
};

export default Todos;