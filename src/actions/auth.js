import axios from 'axios';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from './type.js';

export const login = (email, password) => dispatch => {
  dispatch({ type: LOGIN_START });

  axios
    .post('https://reqres.in/api/login', { email, password })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const register = (first_name, last_name, email, password) => dispatch => {
  dispatch({ type: REGISTER_START });

  axios
    .post('https://reqres.in/api/register', { first_name, last_name, email, password })
    .then(res => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err });
    });
};

