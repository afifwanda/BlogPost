const baseUrl = 'http://localhost:4000/';


export const getData = () => {
  return async dispatch => {
    const result = await fetch(`${baseUrl}comments`)
    const dataResult = await result.json()
    dispatch({
      type: 'GET_COMMENTS',
      payload: {
        comments : dataResult
      }
    })
  }
}

export const updateData = (id,author,avatar,date,message,point,replies) =>{
  const obj = {
    "id": id,
    "author": author,
    "avatar": avatar,
    "date": date,
    "message": message,
    "point": point,
    "replies": replies
  }
  console.log(obj)
  return async dispatch => {
    const result = await fetch(`${baseUrl}comments/${id}`,{
      method: "PUT",
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(obj)
    })
    dispatch({
      type: 'EDIT_VOTE',
      payload:{
        editedVote : [obj]
      }
    })
  }
}
