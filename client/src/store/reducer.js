const initialState = {
    comments : [],
  }
  
  const reducer = (state = initialState,action) =>{
    switch (action.type){
      case "GET_COMMENTS":
        return{...state, comments : action.payload.comments};
      case "EDIT_VOTE":
        console.log(action.payload.editedVote)
        let newEditedVote = state.comments.map(obj=>action.payload.editedVote.find(o=>o.id === obj.id)||obj);
        return {...state, comments: newEditedVote}
      default:
        return state
    }
  }
  
  export default reducer