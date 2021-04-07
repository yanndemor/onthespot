import { connect } from 'react-redux';
import { editUser } from 'src/actions/users';
import { updateUserField } from 'src/actions/auth';

// on importe le composant de présentation
import EditAccount from 'src/components/EditAccount';
// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  userDetail: state.Users.userList,
/*   prenom: state.Users.userList.firstname,
  nom: state.Users.userList.lastname,
  email: state.Users.userList.email,
  tel: state.Users.userList.telNumber, */
 redirect: state.Users.redirect,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  changeField: (newValue, name) => {
    // console.log(`newValue '${newValue}' for field '${name}'`);
    dispatch(updateUserField(newValue, name));
  },
  handleEdit: () => {
    // console.log(`newValue '${newValue}' for field '${name}'`);
    dispatch(editUser());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(EditAccount);
