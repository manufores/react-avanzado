import React from 'react'
import { connect } from 'react-redux'
import { fetchTags } from '../../redux/actions/tagsActions'

const CreateForm = (props) => {

    const click = () => {
      props.dispatch(
        fetchTags()
      )
    }
    
    return (
      <form onSubmit={props.onSubmit}>
        <input type='name' placeholder="Name of Item" />
        <input type='description' placeholder="Insert description" />
        <input type='price' placeholder="Insert price" />
        <input type='photo' placeholder="Insert url photo" />
        <input type='type' placeholder="Insert buy or sell" />
        <div className="select">
          <select name="tags" onClick={click}>
           {(props.tagR.tags.map(tag => (<option key={tag} >{tag}</option>)))}
           </select>
        </div>
        <button>
          Crear
        </button>
      </form>
    )
  }
  
  
  
  
  
  export default connect((state) => {
    return state
  })(CreateForm)