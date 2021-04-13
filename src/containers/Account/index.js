import { connect } from 'react-redux';
import { deleteUser, redirectToNull } from 'src/actions/users';

// on importe le composant de présentation
import Account from 'src/components/Account';
// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  
  /* props with the userDetail obtained from the request fetchUser with the 
  token obtained during the authentification */
  userDetail: state.Users.userList,
  /* props needed to execute some actions and display */
  isLogged: state.auth.isLogged,
  /* Props to redirect to a precise page */
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
    dispatch(redirectToNull());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Account);
