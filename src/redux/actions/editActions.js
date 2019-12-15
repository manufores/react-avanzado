// import Global from '../../Global';
import axios from 'axios';

export const FETCH_EDADS_REQUEST = 'FETCH_EDADS_REQUEST'
export const FETCH_EDADS_SUCCESS = 'FETCH_EDADS_SUCCESS'
export const FETCH_EDADS_ERROR = 'FETCH_EDADS_ERROR'

export const fetchEditAdverts = (endpoint, adverts) => (dispatch) => {

  // const API_URL = Global.url;
  // const endPoint = `${API_URL}apiv1/anuncios/${AdId}`;

  dispatch({ type: FETCH_EDADS_REQUEST })

  axios.put(endpoint, adverts)
    .then(res => dispatch({
        type: FETCH_EDADS_SUCCESS,
        payload: {
          adverts: res.data.result
        }
      })
    )
    .catch(error => {
      dispatch({
        type: FETCH_EDADS_ERROR,
        error: error.toString()
      })
    })
}