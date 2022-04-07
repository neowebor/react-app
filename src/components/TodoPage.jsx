import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';
import {editActionCreator} from "../redux/todoReducer";
import Task from "./Task";

const TodoPage = () => {
  const params = useParams();
  const tasks = useSelector(state => state.todo.tasks);

  return (
    <div>
      <b>Кликните на текст для редактирования задачи:</b>
      {tasks.map(task =>
        task.id.toString() === params.id ? <Task task={task} key={task.id}/> : ''
      )}
    </div>
  );
};


export default TodoPage;