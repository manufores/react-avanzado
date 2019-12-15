import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { saveUser } from '../../utils/storage';
import { SyncLoader } from 'react-spinners'
import { fetchAds } from '../../redux/actions/adsActions'
import Global from '../../Global';

const Ads = (props) => {
  const API_URL = Global.url;
  console.log(props)
  
  saveUser(props.user);

  const click = () => {
    props.dispatch(
      fetchAds()
    )
  }

  const clickCrear = () => {
   
    props.history.push('/createad')
  }


  return (
    <div>
      <h1>Listado de Anuncios</h1>
      <button onClick={click}>
        Cargar Anuncios
      </button>
      <button onClick={clickCrear}>
        Crear Anuncios
      </button>
      {props.ads.isFetching
        ? <SyncLoader />
        : (
          <div>
            {props.ads.ads.map(adv => (
              <div key={adv._id}>
                <div className="column is-one-quarter-desktop is-half-tablet">
                  <div className="card"></div>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={!(adv.photo).includes("http") ? `${API_URL}${adv.photo}` : `${adv.photo}`} alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p className="title is-4">{adv.name}</p>
                      {adv.description.substring(0, 150)}
                      <div className="movie-info">
                        <div className="tags-container">
                          {adv.tags && adv.tags.map(tag => <span key={tag}>{tag}</span>)}
                        </div>
                      </div>
                      <p>Es del tipo: {adv.type}</p>
                      <p>Precio ={adv.price}</p>
                      <br />
                      <Link to={`/detailad/${adv._id}`} className="button is-primary is-rounded">read more...</Link>
                      <br />
                      <Link to={`/editead/${adv._id}`} className="button is-primary is-rounded">Editar</Link>
                    </div>
                  </div>
                </div>
              </div >
            ))}
          </div>
        )
      }

    </div>
  )
}

export default connect((state) => {
  return state
})(Ads)