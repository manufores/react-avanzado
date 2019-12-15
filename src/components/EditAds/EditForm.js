import React from 'react'
import { connect } from 'react-redux'
import { fetchTags } from '../../redux/actions/tagsActions'


const EditForm = (props) => {   


    const click = () => {
        props.dispatch(
            fetchTags()
        )
    }

    return (
        <div>
            {props.isLoading && <h1>Cargando...</h1>}
            
                <form className="box" onSubmit={props.onSubmit}>
                    <div className="field">
                        <label className="label">Nombre Artículo a editar</label>
                        <div className="control">
                            <input type="name" name="title" defaultValue={props.advert.name} className="input" placeholder="Poner el nombre del artículo" />
                        </div>

                    </div>
                    <div className="field">
                        <label className="label">Descripción</label>
                        <div className="control">
                            <input type="description"name="content" defaultValue={props.advert.description} className="input" placeholder="Describe como es el artículo" ></input>
                        </div>

                    </div>

                    <div className="field">
                        <label className="label">Precio Artículo</label>
                        <div className="control">
                            <input type="price" name="title" defaultValue={props.advert.price} className="input" placeholder="Pon un precio" />
                        </div>

                        <div className="field">
                            <label className="label">Foto Artículo</label>
                            <div className="control">
                                <input type="photo" name="title" defaultValue={props.advert.photo} className="input" placeholder="Para la foto pon una url" />
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">¿Buy or Sell? Artículo</label>
                        <div className="select">

                            <select type="type">
                                <option value="buy">buy</option>
                                <option value="sell">sell</option>
                            </select>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Tag del Artículo</label>

                        <div className="select">
                            <select name="tags" onClick={click}>
                                {(props.tagR.tags.map(tag => (<option key={tag} >{tag}</option>)))}
                            </select>
                        </div>
                    </div>

                    <button>
                        Actualizar
                    </button>
                </form>
           
        </div>
    )
}

export default connect((state) => {
    return state
  })(EditForm)