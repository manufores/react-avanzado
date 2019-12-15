import Global from '../../Global';
import axios from 'axios';

export const FETCH_ADS_REQUEST = 'FETCH_ADS_REQUEST'
export const FETCH_ADS_SUCCESS = 'FETCH_ADS_SUCCESS'
export const FETCH_ADS_ERROR = 'FETCH_ADS_ERROR'

export const fetchAds = () => (dispatch) => {

  const API_URL = Global.url;
  const endPoint = `${API_URL}apiv1/anuncios`;

  dispatch({ type: FETCH_ADS_REQUEST })

  axios.get(endPoint)
    .then(res => dispatch({
        type: FETCH_ADS_SUCCESS,
        payload: {
          ads: res.data.results
        }
      })
    )
    .catch(error => {
      dispatch({
        type: FETCH_ADS_ERROR,
        error: error.toString()
      })
    })
}