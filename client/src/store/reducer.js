const initialState = {
    comments : [],
  }
  
  const reducer = (state = initialState,action) =>{
    switch (action.type){
      case "GET_COMMENTS":
        return{...state, comments : action.payload.comments};
      default:
        return state
    }
  }
  
  export default reducer