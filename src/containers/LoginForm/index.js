import { updateUserField, logIn, logOut } from 'src/actions/auth';

import { connect } from 'react-redux';

// on importe le composant de présentation
import LoginForm from 'src/components/LoginForm';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  username: state.auth.username,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, name) => {
    // console.log(`newValue '${newValue}' for field '${name}'`);
    dispatch(updateUserField(newValue, name));
  },
  handleLogin: () => {
    dispatch(logIn());
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
