import { keyHash } from './utils';

const { localStorage } = window;

export default {
  get(key) {
    if (!key) {
      throw new Error('We need a key to look up data from Local Storage');
    }
    const item = localStorage.getItem(keyHash(key));
    return item ? JSON.parse(item).data : false;
  },

  set(key, data) {
    if (!key) {
      throw new Error('We need a key to set data to Local Storage');
    }

    const obj = {
      timestamp: Date.now(),
      data
    };
    return localStorage.setItem(keyHash(key), JSON.stringify(obj));
  },

  remove(key) {
    if (!key) {
      throw new Error('We need a key to look up data from Local Storage');
    }
    return localStorage.removeItem(keyHash(key));
  },

  clear() {
    localStorage.clear();
  }
};
