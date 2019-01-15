export const clear = () => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
};

export default class Cookie {
  constructor() {
    this.store = {};
  }

  set(key, value, expires) {
    const DAYS = 60;
    let date;
    if (!key) {
      throw new Error('We need a key to look up data from the Cookies');
    }
    if (!value) {
      throw new Error('We need a value to store in the Cookie');
    }

    if (expires) {
      date = new Date(expires);
    } else {
      // Default expiration date is 60 days
      date = new Date();
      date.setTime(date.getTime() + DAYS * 24 * 60 * 60 * 1000);
    }

    const writeVal = `${key}=${value}; expires=${date.toUTCString()}; path=/`;
    document.cookie = writeVal;
    this.store[key] = value;
  }

  get(key) {
    // get cached value if it exists
    if (this.store[key]) {
      return this.store[key];
    }

    const nameEQ = `${key}=`;
    const ca = document.cookie.split(';');
    for (let i=0; i < ca.length; i++) {
      let c = ca[i];

      while (c.charAt(0)==' ') {
        c = c.substring(1, c.length);
      }

      if (c.indexOf(nameEQ) == 0) {
        // cache the lookup value for faster reads
        this.store[key] = c.substring(nameEQ.length, c.length);
        return this.store[key];
      }
    }
    return null;
  }

  remove(key) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    // remove val from the internal cache
    delete this.store[key];
  }

  clear() {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }

    this.store = {};
  }
}
