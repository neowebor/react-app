import React from 'react';
import styled from "styled-components";
import completeIcon from "../assets/images/check-mark.png";
import deleteIcon from "../assets/images/delete.png";

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  padding: 5px 15px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const IconsBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`

const Img = styled.img`
  width: 20px;
  height: 20px;
`

const ListItem = ({task, index, setTasks, tasks}) => {
  function removeTask() {
    setTasks(tasks.filter(elem => elem.id !== task.id))
  }

  return (
    <div>
      <Wrapper>
        {index + 1}. {task.text}
        <IconsBlock>
          <Icon>
            <Img src={completeIcon}/>
          </Icon>
          <Icon>
            <Img src={deleteIcon} onClick={removeTask}/>
          </Icon>
        </IconsBlock>
      </Wrapper>
    </div>
  );
};

export default ListItem;