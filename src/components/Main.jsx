import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Todos from "./Todo/Todos";
import Photos from "./Photos/Photos";
import NotFound from "./pages/NotFound";
import Home_page from "./pages/Home_page";
import styled from 'styled-components'
import {Container} from "./Container";
import TodoPage from "./Todo/TodoPage";


const Wrapper = styled.div`
  padding: 2rem 0;
`

const Main = () => {
  return (
    <Wrapper>
      <Container>
        <Routes>
          <Route path="/" element={<Home_page/>}/>
          <Route path="/todos" element={<Todos />}/>
          <Route path="/todos/:id" element={<TodoPage />}/>
          <Route path="/photos" element={<Photos />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Container>
    </Wrapper>
  );
};

export default Main;