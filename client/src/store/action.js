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
