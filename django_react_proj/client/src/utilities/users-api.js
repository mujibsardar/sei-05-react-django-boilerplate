// API modules are where the code lives to communicate
// with the server via AJAX
import sendRequest from './send-request';

import { AUTH_URL } from "../constants";

export function signUp(userData) {
  return sendRequest(`${AUTH_URL}/register/`, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${AUTH_URL}/login/`, 'POST', credentials);
}
