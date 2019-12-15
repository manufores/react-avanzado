import React from 'react'
import UserContext from '../../context/user'
import { connect } from 'react-redux'
import { fetchTags } from '../../redux/actions/tagsActions'


const UserForm = (props) => {

  const contex = React.useContext(UserContext);
  
  
  

  const handleChange = (event) =>{
    const { name, value } = event.target;
    contex.session.users = {
      ...contex.session.users,
      [name]: value
    }
  }

  const click = () => {
    props.dispatch(
      fetchTags()
    )
  }
  
  return (
    <form onSubmit={props.onSubmit}>
      <input name= 'name' type='text' placeholder="Insert name" onChange={handleChange}/>
      <input name='surname' type='text' placeholder="Insert surname" onChange={handleChange}/>
      {console.log(contex)}
      <div className="select">
        <select name="tags" onClick={click}>
         {(props.tagR.tags.map(tag => (<option key={tag} >{tag}</option>)))}
         </select>
      </div>
      <button>
        Agregar
      </button>
    </form>
  )
}





export default connect((state) => {
  return state
})(UserForm)
