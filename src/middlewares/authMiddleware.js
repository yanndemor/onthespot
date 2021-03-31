import axios from 'axios';

import { LOG_IN, REGISTRATION, saveUser } from 'src/actions/auth';

const API_URL = 'https://onthespot.apotheoz.tech/back/public/api';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware auth: ', action);

  switch (action.type) {
    case LOG_IN: {
      const { username, password } = store.getState().auth;

      axios.post(`${API_URL}/login`, {
        username: username,
        password: password,
      })
        .then((response) => {
          // console.log('middleware auth : on dispatch les actions');
          store.dispatch(saveUser(response.data.token));
          // on prévient axuios que l'on a maintenant un header
          // par default sur toutes nos futures requetes
          // axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
          // Sotcke le token dans le localStorage
          if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data.token));
          }
          const user = JSON.parse(localStorage.getItem('user'));
          axios.defaults.headers.Authorization = `Bearer ${user}`;
          return response.data;
        })

        .catch((error) => {
          console.log(error);
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
          alert('Inscription en cours, vous allez recevoir un mail de validation dans quelques minutes');
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

export default authMiddleware;
