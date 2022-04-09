import React, {useEffect, useState} from 'react';
import {Input, InputEl} from "../Input";
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {getPhotosActionCreator} from "../../redux/photoReducer";
import {API} from "../Service/API/API";


const Photos = () => {
  const [inputValue, setInputValue] = useState({
    current: '',
    prev: ''
  });

  window.inputValue = inputValue;

  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos.photos)

  useEffect(() => {
    dispatch(getPhotosActionCreator([]))
  }, [])

  function setText(event) {
    setInputValue({...inputValue, current: event.target.value})
  }

  function getPhotos(event) {
    if (inputValue < 0 || inputValue > 100) return
    if((event.keyCode === 13 || event.type === 'click') && inputValue.prev !== inputValue.current) {
      API.get(`https://jsonplaceholder.typicode.com/photos?albumId=${inputValue.current}`)
        .then(({data}) => dispatch(getPhotosActionCreator(data)));
      setInputValue({...inputValue, current: '', prev: inputValue.current});
    }
  }


  return (
    <div>
      <Wrapper>
        <InputEl type="number" onChange={setText} value={inputValue.current} placeholder="Enter number..." onKeyDown={getPhotos}/>
        <Button disabled={inputValue.prev === inputValue.current} onClick={getPhotos}>Get photos</Button>
      </Wrapper>
      <FlexContainer>
        {
          photos.length > 0
          ? photos.map(photo =>
            <Img key={photo.id} src={photo.url}/>
          )
          : <div>Enter correct number 1 to 100...</div>
        }
      </FlexContainer>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
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
  background-color: #fff;
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