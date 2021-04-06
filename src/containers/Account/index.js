import { connect } from 'react-redux';
import { deleteUser, nullifyRedirect } from 'src/actions/users';

// on importe le composant de présentation
import Account from 'src/components/Account';
// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  userDetail: state.Users.userList,
  isLogged: state.auth.isLogged,
  redirect: state.Users.redirect,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  handleDelete: () => {
    // console.log(`newValue '${newValue}' for field '${name}'`);
    dispatch(deleteUser());
  },

  resetRedirect: () => {
    dispatch(nullifyRedirect());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Account);
