import React from 'react';
import styled from 'styled-components';
import {Link, NavLink} from "react-router-dom";
import Todos from "./Todos";
import Photos from "./Photos";
import {Container} from "./Container";

const HeaderEl = styled.header`
  box-shadow: 0 5px 5px rgba(0, 0, 0, .5);
  background-color: teal;
`;

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  padding: 2rem 0;
`;

const TextEl = styled.div`
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  text-decoration: none;
  margin-right: 20px;
`

const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
            <NavLink to="/">
              <TextEl>
                Home page
              </TextEl>
            </NavLink>
            <NavLink to="/todos">
              <TextEl>
                Todos
              </TextEl>
            </NavLink>
            <NavLink to="/photos">
              <TextEl>
                Photos
              </TextEl>
            </NavLink>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;