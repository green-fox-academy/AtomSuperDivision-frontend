import { UPDATE_USERSTATE, RESET_STORE } from '../constants/actionTypes';

export function updateUserStateAction(payload) {
  return {
    type: UPDATE_USERSTATE,
    payload,
  };
}
export function logOut() {
  return {
    type: RESET_STORE,
  };
}