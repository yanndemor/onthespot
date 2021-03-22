import axios from 'axios';

import { LOG_IN, saveUser } from 'src/actions/auth';

const API_URL = 'http://ec2-3-85-110-30.compute-1.amazonaws.com/OnTheSpot-Unofficial/Backend/public/api/user';

const authMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware auth: ', action);

  switch (action.type) {
    case LOG_IN: {
      const { email, password } = store.getState().auth;

      axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      })
        .then((response) => {
          // console.log('middleware auth : on dispatch les actions');
          store.dispatch(saveUser(response.data.logged, response.data.token));
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
