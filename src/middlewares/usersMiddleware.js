import axios from 'axios';

import {
  FETCH_USER, DELETE_USER, EDIT_USER, deleteUser, retrieveUser, editRedirect,
} from 'src/actions/users';

const API_URL = 'https://onthespot.apotheoz.tech/back/public/api';

const usersMiddleware = (store) => (next) => (action) => {
  console.log('on a intercepté une action dans le middleware user: ', action);

  switch (action.type) {
    case FETCH_USER: {
      const { isLogged } = store.getState().auth;
      const user = JSON.parse(localStorage.getItem('user'));
      // let webApiUrl = 'example.com/abc';
      // let token = localStorage.getItem('token');
      // let headers={headers: {"Authorization" : `Bearer ${token}`} }
      // axios.get(webApiUrl,headers);

      axios.get(`${API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${user}`,
        },

      })
        .then((response) => {
          // console.log('middleware auth : on dispatch les actions');

          store.dispatch(retrieveUser(response.data));
          console.log('reponse du users', response.data);
        })

        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case DELETE_USER: {
      const user = JSON.parse(localStorage.getItem('user'));
      // let webApiUrl = 'example.com/abc';
      // let token = localStorage.getItem('token');
      // let headers={headers: {"Authorization" : `Bearer ${token}`} }
      // axios.get(webApiUrl,headers);

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
            console.log('REDIRECTION avec status => ', res.status);

            window.location = '/';
          }
        })
        .catch((error) => {
          console.log(error);
        });

      next(action);
      break;
    }
    case EDIT_USER: {
      const user = JSON.parse(localStorage.getItem('user'));
      const { userList } = store.getState().Users;
      const { redirect } = store.getState().Users;
      // let webApiUrl = 'example.com/abc';
      // let token = localStorage.getItem('token');
      // let headers={headers: {"Authorization" : `Bearer ${token}`} }
      // axios.get(webApiUrl,headers);

      axios.put(`${API_URL}/users`, { ...userList }, {
        headers: {
          Authorization: `Bearer ${user}`,
        },

      })

        .then((res) => {
          if (res.status === 200) {
            /*  console.log('REDIRECTION avec status => ', res.status); */
            console.log('REDIRECTION avec status => ', res.status);
            /*    store.setState().redirect = '/compte'; */
          /*   window.location = '/'; */
          }
        })
       /*  .then((response) => {
          console.log('middleware auth : on dispatch les actions', response);
          store.dispatch(editRedirect({ redirect }));
        }) */
        .catch((error) => {
          console.log(error);
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
