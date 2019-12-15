import React from 'react'
import { connect } from 'react-redux'
import { fetchAdverts } from '../../redux/actions/createActions'

import CreateForm from './CreateForm'


const Advert = ({ adverts, fetchAdverts, history }) => {

  console.log(adverts);

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target[0].value;
    const description = e.target[1].value;
    const price= e.target[2].value;
    const photo= e.target[3].value;
    const type= e.target[4].value;
    const tags= e.target[5].value;

    fetchAdverts({
      name,
      description,
      price,
      photo,
      type,
      tags
    });

    e.target[0].value = '';
    e.target[1].value = '';

    

    history.push('/adslist')
    
  }

  return (
    <div>
      <h1>Create Advert</h1>
      <CreateForm onSubmit={handleSubmit} />
      
      
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
    fetchAdverts: (adverts) => dispatch(fetchAdverts(adverts))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Advert)