import axios from 'axios';

import {
  LOG_IN,
  REGISTRATION,
  LOG_OUT,
  saveUser,
  CHECK_LOG_IN,
  forceLog,
  notWaiting,
  logOut,
} from 'src/actions/auth';
import { fetchUser, flash, resetFlash } from 'src/actions/users';
import { fetchOrders } from 'src/actions/orders';

const API_URL = 'https://api.onthespot.link/api';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware auth: ', action);

  switch (action.type) {
    case LOG_IN: {
      const { username, password } = store.getState().auth;

      // let webApiUrl = 'example.com/abc';
      // let token = localStorage.getItem('token');
      // let headers={headers: {"Authorization" : `Bearer ${token}`} }
      // axios.get(webApiUrl,headers);

      axios.post(`${API_URL}/login`, {
        username: username,
        password: password,

      })
        .then((response) => {
          // console.log('middleware auth : on dispatch les actions');
          // Sotcke le token dans le localStorage
          localStorage.setItem('user', JSON.stringify(response.data.token));
          store.dispatch(fetchOrders());

          console.log(response.data);

          store.dispatch(saveUser(
            response.data.logged,
            response.data.token,
            response.data.user,
          ));
          store.dispatch(fetchUser());
          store.dispatch(notWaiting());
          store.dispatch(resetFlash());
        })

        .catch((error) => {
          if (error.response.data.code === 401) {
            store.dispatch(logOut());
            store.dispatch(flash('danger', 'Identifiant ou mot de passe invalide'));
            store.dispatch(notWaiting());
          }
        });

      next(action);
      break;
    }
    case REGISTRATION: {
      const {
        firstname,
        lastname,
        emailRegister,
        // passwordRegister,
        passwordRegisterCheck,
        phoneNumber,
      } = store.getState().auth;

      axios.post(`${API_URL}/users`, {
        firstname: firstname,
        lastname: lastname,
        email: emailRegister,
        // passwordRegister: passwordRegister,
        password: passwordRegisterCheck,
        telNumber: phoneNumber,
      })
        .then((response) => {
          // console.log('middleware auth : on dispatch les actions');
          // alert('Inscription en cours, vous allez recevoir un mail de validation dans quelques minutes');
          store.dispatch(notWaiting());
          store.dispatch(flash('success', 'Inscription en cours, vous allez recevoir un mail de validation dans quelques minutes'));
        })
        .catch((error) => {
          console.log(error.response.data.detail);
          store.dispatch(flash('danger', error.response.data.detail));
          store.dispatch(notWaiting());
        });

      next(action);
      break;
    }

    case CHECK_LOG_IN: {
      if (localStorage.getItem('user') != null) {
        store.dispatch(fetchUser());
        store.dispatch(fetchOrders());
        store.dispatch(forceLog());
      }

      next(action);
      break;
    }

    case LOG_OUT: {
      localStorage.removeItem('user');

      next(action);
      break;
    }
    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default authMiddleware;
