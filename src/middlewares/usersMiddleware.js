import axios from 'axios';

import { logOut } from 'src/actions/auth';

import {
  FETCH_USER, DELETE_USER, EDIT_USER, deleteUser, retrieveUser, editRedirect,
} from 'src/actions/users';

const API_URL = 'https://api.onthespot.link/api';

const usersMiddleware = (store) => (next) => (action) => {
 /*  console.log('on a intercepté une action dans le middleware user: ', action); */

  switch (action.type) {
    case FETCH_USER: {
      const { isLogged } = store.getState().auth;
      // obtaining the token from the localstorage, 
      // token has been send in the localstorage at the time of the authentification 
      // request because send by the backhanders at that time
      const user = JSON.parse(localStorage.getItem('user'));

      axios.get(`${API_URL}/users`, {
        // provide the token to authentification permission , condition to get access to the request
        headers: {
          Authorization: `Bearer ${user}`,
        },

      })
        .then((response) => {
          // console.log('middleware auth : on dispatch les actions');
          // action creator to call the action which "savetheuserdetail" into the reducer "store"
          store.dispatch(retrieveUser(response.data));
         /*  console.log('reponse du users', response.data); */
        })

        .catch((error) => {
         /*  console.log(error); */
          if (error.response.status === 401) {
            store.dispatch(logOut());
          }
        });

      next(action);
      break;
    }
    case DELETE_USER: {
      const user = JSON.parse(localStorage.getItem('user'));
   
      axios.delete(`${API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${user}`,
        },

      })
        .then((response) => {
          // console.log('middleware auth : on dispatch les actions');

          store.dispatch(deleteUser(response.data));
          localStorage.removeItem('user'); // remove one item;
        })
        .then((res) => {
          if (res.status === 200) {
          /*   console.log('REDIRECTION avec status => ', res.status); */
           // redirection with window.location to the homepage
            window.location = '/';
          }
        })
        .catch((error) => {
         /*  console.log(error); */
          if (error.response.status === 401) {
            store.dispatch(logOut());
          }
        });

      next(action);
      break;
    }
    case EDIT_USER: {
      const user = JSON.parse(localStorage.getItem('user'));
      // to obtain the userlist from the state
      const { userList } = store.getState().Users;
      // we have to spread the content of the tab userList to edit the field changed
      axios.put(`${API_URL}/users`, { ...userList }, {
        headers: {
          Authorization: `Bearer ${user}`,
        },

      })

        .then((res) => {
          if (res.status === 200) {
         /*    console.log('REDIRECTION avec status => ', res.status); */
        
          }
        })

        .catch((error) => {
       /*    console.log(error); */
          if (error.response.status === 401) {
            store.dispatch(logOut());
          }
        });

      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default usersMiddleware;
