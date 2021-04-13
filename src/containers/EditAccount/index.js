import { connect } from 'react-redux';
import { editUser } from 'src/actions/users';
import { updateUserField } from 'src/actions/auth';

// on importe le composant de présentation
import EditAccount from 'src/components/EditAccount';
// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  // send userDetail to editAccount to make the user able to see his details and edit them
  userDetail: state.Users.userList,
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
