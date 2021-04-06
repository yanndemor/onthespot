import { updateUserField, registration } from 'src/actions/auth';

import { connect } from 'react-redux';

// on importe le composant de présentation
import RegistrationForm from 'src/components/RegistrationForm';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  firstname: state.auth.firstname,
  lastname: state.auth.lastname,
  emailRegister: state.auth.emailRegister,
  passwordRegister: state.auth.passwordRegister,
  passwordRegisterCheck: state.auth.passwordRegisterCheck,
  phoneNumber: state.auth.phoneNumber,
  isWaiting: state.auth.isWaiting,
  flashMessage: state.Users.flashMessage,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, name) => {
    // console.log(`newValue '${newValue}' for field '${name}'`);
    dispatch(updateUserField(newValue, name));
  },
  handleRegister: () => {
    dispatch(registration());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
