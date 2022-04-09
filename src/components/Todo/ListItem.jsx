import React from 'react';
import styled from "styled-components";
import completeIcon from "../../assets/images/check-mark.png";
import deleteIcon from "../../assets/images/delete.png";
import {useDispatch} from "react-redux";
import {
  removeTodoActionCreator,
  toggleStatusCreator
} from "../../redux/todoReducer";
import {useNavigate} from 'react-router-dom'

const ListItem = ({task, index}) => {
  const dispatch = useDispatch();

  function removeTask() {
    dispatch(removeTodoActionCreator(task.id));
  }

  function toggleHandler() {
    dispatch(toggleStatusCreator(task.id));
  }

  const navigate = useNavigate();

  return (
    <FlexContainer>
      <Wrapper onClick={() => navigate(`/todos/${task.id}`)}>
        <Title flag={task.status}>
          {index + 1}. {task.name}
        </Title>
      </Wrapper>
      <IconsBlock>
        <Icon onClick={toggleHandler}>
          <Img src={completeIcon} />
        </Icon>
        <Icon onClick={removeTask}>
          <Img src={deleteIcon} />
        </Icon>
      </IconsBlock>
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  padding: 5px 15px;
  cursor: pointer;
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
  cursor: pointer;
`

const Title = styled.div`
  width: 100%;
  
  text-decoration: ${(props) => props.flag ? 'line-through' : 'none'};
`;
export default ListItem;