const GET_PHOTOS = 'GET_PHOTOS';
const GET_INPUT_TEXT = 'GET_INPUT_TEXT';

const initialState = {
  photos: [],
  inputText: '',
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: [...action.payload]
      }

    case GET_INPUT_TEXT:
      return {
        ...state,
        inputText: action.payload
      }

    default:
      return state
  }
}

export const getPhotosActionCreator = (photos) => ({type: GET_PHOTOS, payload: photos});
export const getInputTextActionCreator = (albumId) => ({type: GET_INPUT_TEXT, payload: albumId})

export default photoReducer;