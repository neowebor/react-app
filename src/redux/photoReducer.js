const GET_PHOTOS = 'GET_PHOTOS';

const initialState = {
  photos: [],
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: [...action.payload]
      }

    default:
      return state
  }
}

export const getPhotosActionCreator = (photos) => ({type: GET_PHOTOS, payload: photos})

export default photoReducer;