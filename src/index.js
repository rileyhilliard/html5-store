import { default as CookieStore } from './cookie';

export { default as Local } from './local';
export { default as Session } from './session';
export const Cookie = new CookieStore();
