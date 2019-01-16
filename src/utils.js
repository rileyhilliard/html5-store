export const KEY = 'html5-store';
export const keyHash = key => `${KEY}:${key}`;
export const GET_KEY_ERROR = '.get(\'key\') requires a key to look up data';
export const SET_KEY_ERROR = '.set(\'key\', \'{ data }\') needs a key to set data';
export const REMOVE_KEY_ERROR = '.remove(\'key\') requires a key to remove data';
