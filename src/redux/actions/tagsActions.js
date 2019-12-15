import Global from '../../Global';
import axios from 'axios';

export const FETCH_TAGS_REQUEST = 'FETCH_TAGS_REQUEST'
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS'
export const FETCH_TAGS_ERROR = 'FETCH_TAGS_ERROR'

export const fetchTags = () => async (dispatch, getState) => {

  const API_URL = Global.url;
  const endPoint = `${API_URL}apiv1/tags`;

  dispatch({ type: FETCH_TAGS_REQUEST })

  try {
    const { data } = await axios.get(endPoint)
    dispatch({
      type: FETCH_TAGS_SUCCESS,
      payload: {
        tags: data.results
      }
    })
  }catch (error) {
    dispatch({
      type: FETCH_TAGS_ERROR,
      error: error.toString()
    })
  }

  // await axios.get(endPoint)
  //   .then(res => dispatch({
  //       type: FETCH_TAGS_SUCCESS,
  //       payload: {
  //         tags: res.data.results
  //       }
  //     })
  //   )
  //   .catch(error => {
  //     dispatch({
  //       type: FETCH_TAGS_ERROR,
  //       error: error.toString()
  //     })
  //   })
}