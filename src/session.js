import {
  keyHash,
  GET_KEY_ERROR,
  SET_KEY_ERROR,
  REMOVE_KEY_ERROR,
} from './utils';
const { sessionStorage } = window;

export default class Session {
  get(key) {
    if (!key) {
      throw new Error(GET_KEY_ERROR);
    }
    const item = sessionStorage.getItem(keyHash(key));

    return item && JSON.parse(item).data;
  }

  set(key, data) {
    if (!key) {
      throw new Error(SET_KEY_ERROR);
    }

    const obj = {
      timestamp: Date.now(),
      data
    };

    return sessionStorage.setItem(keyHash(key), JSON.stringify(obj));
  }

  remove(key) {
    if (!key) {
      throw new Error(REMOVE_KEY_ERROR);
    }

    return sessionStorage.removeItem(keyHash(key));
  }

  clear() {
    sessionStorage.clear();
  }
}
