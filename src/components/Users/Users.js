import React from 'react'
import UserContext from '../../context/user'
import { connect } from 'react-redux'
import { addUser } from '../../redux/actions/userActions'

import UserForm from './UserForm'


const Users = ({ user, addUser, history}) => {

  console.log(user);
  const contex = React.useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = contex.session.users.name;
    const surname = contex.session.users.surname;
    const tags= e.target[2].value;

    addUser({
      name,
      surname,
      tags
    });

    e.target[0].value = '';
    e.target[1].value = '';

    

    history.push('/adslist')
    
  }

  return (
    <div>
      <h1>Login</h1>
      <UserForm onSubmit={handleSubmit} />
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)