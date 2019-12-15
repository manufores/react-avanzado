import axios from 'axios';
// const API_URL = 'http://localhost:3001/';

const api = () =>{
    return{
        getTags: () => {
            const API_URL = 'http://localhost:3001/';
            const endPoint = `${API_URL}apiv1/tags`;
            axios.get(endPoint)
              .then(response => response);
          }

    }
}



export default api;