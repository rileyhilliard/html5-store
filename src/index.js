import { default as CookieStore } from './cookie';
import { default as LocalStore } from './local';
import { default as SessionStore } from './session';

export const Local = new LocalStore();
export const Session = new SessionStore();
export const Cookie = new CookieStore();
