import React, { useState, useEffect } from 'react'
// import { connect } from 'react-redux'
import axios from 'axios';
import { Link } from "react-router-dom";
import Global from '../../Global';

const Header = () => {
    const styles = {
        background: 'linear-gradient(20deg, #6813cb, #2575fc)',
        textAlign: 'center',
        borderRadius: '0.2em',
        color: '#FFF',
        padding: '0.3em',
        margin: '0.3em',
        fontSize: '14px'
    }

    return (
        <header style={styles}>
            <h1>
                Hook Personalizado
        <span
                    role='img'
                    aria-label='hook emoji'
                >
                    ⚓
        </span>
            </h1>
        </header>
    )
}


export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [isFetching, setFetching] = useState(true)

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data.result)
                setFetching(false)
            })
    }, [url])
    

    return [
        data,
        isFetching
    ]

}

const AdvDetailHook = (props) => {
    const API_URL = Global.url;
    const id = props.match.params.id;
    const endPoint = `${API_URL}apiv1/anuncios/${id}`;
    const [adv, isLoading] = useFetch(endPoint)

    return (
        <div>
            <Header />
            {isLoading && <h1>Cargando...</h1>}

            <React.Fragment>
                <div key={adv._id} className="movie-detail-container">
                    <div className="movie-card-container">
                        <div className="image-container">
                            <div className="bg-image" style={{ backgroundImage: `url(${API_URL}${adv.photo})` }} />
                        </div>
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={adv.photo ? `${API_URL}${adv.photo}` : 'https://bulma.io/images/placeholders/1280x960.png'} alt="Placeholder" />
                            </figure>
                        </div>
                        <div className="movie-info">
                            <h2>Advert Details</h2>
                            <div>
                                <h1>{adv.name}</h1>
                            </div>
                            <p>{adv.description}</p>
                            <div className="tags-container">
                                {adv.tags && adv.tags.map(tag => <span key={tag}>{tag}</span>)}
                            </div>
                            <div>
                                <Link to={'/editead/' + adv._id} className="button is-primary is-rounded">Editar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}

export default AdvDetailHook;

// export default connect((state) => {
//     return state
// })(AdvDetailHook)