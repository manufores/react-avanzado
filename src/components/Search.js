import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import UserConsumer from "../context/user";
import Global from '../Global';

class Search extends Component {

    API_URL = Global.url;

    static contextType = UserConsumer;


    state = {
        articles: [],
        status: null
    }


    adSearched = this.props.match.params.search;



    getAds = (url) => {
        axios.get(url)
            .then(res => {

                this.setState({
                    articles: res.data.results,
                    status: 'success'
                });
            })
            .catch(err => {
                this.setState({
                    articles: [],
                    status: 'success'
                })

            });
    }

    componentDidMount() {
        //Chequeo sesion del contexto, si no existe redirijo a register

        const session = this.context.session
        if (!session) {
            return this.props.history.push('/register');
        } else {
            this.search();
        }
    }



    search = () => {
        let baseURL = `${this.API_URL}apiv1/anuncios`;
        if (this.adSearched) {
            baseURL = `${baseURL}?${this.adSearched}`;
        }
        return this.getAds(baseURL);
    }


    render() {
        if (this.state.articles.length >= 1) {
            var listAdverts = this.state.articles.map((adv) => {
                return (
                    <div className="tile is-ancestor" key={adv._id}>
                        <div className="tile is-vertical is-2">
                            <div className="tile">
                                <div className="tile is-parent">
                                    <article className="tile is-child notification is-info">
                                        <p className="title">{adv.name}</p>
                                        <figure className="image is-4by3">
                                            <img src={!(adv.photo).includes("http") ? `${this.API_URL}${adv.photo}` : `${adv.photo}`} alt="Placeholder" />
                                        </figure>
                                        <p className="subtitle">{adv.description.substring(0, 150)}</p>
                                        <p className="subtitle">{adv.type}</p>
                                        <p className="subtitle">{adv.price}</p>
                                        <div>{adv.tags && adv.tags.map(tag => <span className="tag is-light" key={tag}>{tag}</span>)}</div>
                                        <br></br>
                                        <div>
                                            <Link to={`/detail/${adv._id}`} className="button is-primary is-rounded">read more...</Link>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });

            return (

                <div>

                    <div className="buttons">
                        <Link to={'/api'} className="button is-link is-light">Volver a la Home</Link>
                    </div>
                    <div>{listAdverts}</div>
                </div>
            );
        } else if (this.state.articles.length === 0 && this.state.status === 'success') {
            return (
                <div>
                    <div className="buttons">
                        <Link to={'/api'} className="button is-link is-light">Volver a la Home</Link>
                    </div>
                    <p>No hay artículos para mostrar</p>
                </div>
            );

        } else {
            return (
                <div>
                    <h2>Cargando...</h2>
                    <p>Espere mientras se cargan los artículos</p>
                </div>
            )
        }

    }
}

export default Search;