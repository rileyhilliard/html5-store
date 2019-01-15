import { keyHash } from './utils';

const { sessionStorage } = window;

export default {
  get(key, includeMeta = false) {
    if (!key) {
      throw new Error('We need a key to look up data from Session Storage');
    }
    const item = sessionStorage.getItem(keyHash(key));
    const parsedJSON = item ? JSON.parse(item) : false;
    if (parsedJSON) {
      return includeMeta ? parsedJSON : parsedJSON.data;
    }

    return false;
  },

  set(key, data) {
    if (!key) {
      throw new Error('We need a key to set data to Session Storage');
    }
    if (!(typeof data === 'object' || typeof data === 'string')) {
      throw new Error(`We can only store JS objects or stings to Session Storage. '${typeof data}' was passed in.`);
    }
    const dataString = `{
      "data": ${typeof data === 'object' ? JSON.stringify(data) : data},
      "meta": {
        "timestamp": ${Date.now()}
      }
    }`;

    return sessionStorage.setItem(keyHash(key), dataString);
  },

  remove(key) {
    if (!key) {
      throw new Error('We need a key to look up data from Local Storage');
    }
    return sessionStorage.removeItem(keyHash(key));
  },
};
