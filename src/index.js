import Local from './local';
import Session from './session';
import Cookie from './cookie';

const Store = {
  Local,
  Session,
  Cookie: new Cookie()
};

export default Store;
