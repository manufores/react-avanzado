import Global from '../../Global';
import axios from 'axios';

export const FETCH_CRADS_REQUEST = 'FETCH_CRADS_REQUEST'
export const FETCH_CRADS_SUCCESS = 'FETCH_CRADS_SUCCESS'
export const FETCH_CRADS_ERROR = 'FETCH_CRADS_ERROR'

export const fetchAdverts = (adverts) => (dispatch) => {

  const API_URL = Global.url;
  const endPoint = `${API_URL}apiv1/anuncios`;

  dispatch({ type: FETCH_CRADS_REQUEST })

  axios.post(endPoint, adverts)
    .then(res => dispatch({
        type: FETCH_CRADS_SUCCESS,
        payload: {
          adverts: res.data.results
        }
      })
    )
    .catch(error => {
      dispatch({
        type: FETCH_CRADS_ERROR,
        error: error.toString()
      })
    })
}