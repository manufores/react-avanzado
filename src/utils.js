import axios from 'axios';
import Global from './Global';

const API_URL = Global.url;
const tags = {};

export const getTags = () => {
    const endPoint = `${API_URL}apiv1/tags`;
    axios.get(endPoint)
      .then(res => this.setState({
        tags: res.data.results,
      }))
      return tags;
  }