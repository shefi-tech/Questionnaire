const initialState = {
    responses: {},
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_RESPONSE':
        return {
          ...state,
          responses: {
            ...state.responses,
            [action.payload.question]: action.payload.answer,
          },
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  