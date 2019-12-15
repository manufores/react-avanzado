import React from 'react'
import { connect } from 'react-redux'
import { fetchEditAdverts } from '../../redux/actions/editActions'
import { useFetch } from '../AdvDetailHook/AdvDetailHook'
import Global from '../../Global'

import EditForm from './EditForm'

const EditAdvert = ( { adverts, fetchEditAdverts, history, match }) => {

    const API_URL = Global.url;
    const id = match.params.id;
    const endPoint = `${API_URL}apiv1/anuncios/${id}`;
    const [advert, isLoading] = useFetch(endPoint)

    
  
    const handleSubmit = (e) => {
      e.preventDefault()
  
      const name = e.target[0].value;
      const description = e.target[1].value;
      const price= e.target[2].value;
      const photo= e.target[3].value;
      const type= e.target[4].value;
      const tags= e.target[5].value;

      console.log(name, description, price, photo, type, tags);
      console.log(endPoint);
  
      fetchEditAdverts(endPoint, {
        name,
        description,
        price,
        photo,
        type,
        tags
      });
      
  
      history.push('/adslist')
      
    }
  
    return (
      <div>
        <h1>Edit Advert</h1>
        <EditForm advert={advert} isLoading={isLoading} onSubmit={handleSubmit} />
        
        
      </div>
    )
  }
  
  
  const mapStateToProps = (state) => {
    return {
      adverts: state.adverts
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchEditAdverts: (adverts) => dispatch(fetchEditAdverts(adverts))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditAdvert)