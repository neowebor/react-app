import React, {useState} from 'react';
import {InputEl} from "./Input";
import styled from 'styled-components'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getPhotosActionCreator} from "../redux/photoReducer";

const Photos = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos.photos)
  const [flag, setFlag] = useState(false)

  function setText(event) {
    setInputValue(event.target.value)
  }

  const API = {
    get(value) {
      return axios.get(value);
    }
  }

  function getPhotos() {
    if(inputValue < 1 || inputValue > 100) {
      setFlag(true);
    } else {
      setFlag(false)
    }
    
    API.get(`https://jsonplaceholder.typicode.com/photos?albumId=${inputValue}`)
      .then(({data}) => dispatch(getPhotosActionCreator(data)));
  }

  return (
    <div>
      <Wrapper>
        <InputEl type="number" onChange={setText} value={inputValue} placeholder="Enter album id 1 to 100..."/>
        <Button disabled={!inputValue} onClick={getPhotos}>Get photos</Button>
      </Wrapper>
      <FlexContainer>
        {
          flag
            ? <div>Incorrectly album number</div>
            : photos.map(photo =>
              <Img src={photo.url}/>
            )
        }
      </FlexContainer>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
  position: relative;
`

const Button = styled.button`
  box-shadow: 0 0 5px rgba(0, 0, 0, .5);
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`

const Img = styled.img`
  width: 200px;
  height: 100px;
  object-fit: cover;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
`

export default Photos;