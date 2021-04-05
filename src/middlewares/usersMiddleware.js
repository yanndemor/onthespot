import axios from 'axios';

import {
  FETCH_USER, DELETE_USER, deleteUser, saveUser,
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

          store.dispatch(saveUser(response.data));
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
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default usersMiddleware;
