/* eslint-disable */
/* global describe, it, before */
import 'mock-local-storage'
import { expect } from 'chai';
import { Local, Session, Cookie } from '../lib/html5-store';
import { keyHash } from '../src/utils';

global.window = {}
window.localStorage = global.localStorage

expect();

const bill = {
  age: 23,
  name: {
    first: 'Bill',
    last: 'McMinster'
  },
};

const steve = {
  age: 34,
  name: {
    first: 'Steve',
    last: 'McMackie'
  }
};

let fetchedBill;

/* LOCAL STORAGE */
describe('Local Storage should behave as expected', () => {
  before(() => {
    Local.set('bill', bill);
    fetchedBill = Local.get('bill');
  });

  describe('Local Storage expected errors are thrown', () => {
    it('.get() without a key should throw an error', () => {
      expect(Local.get).to.throw('.get(\'key\') requires a key to look up data');
    });

    it('.set() without a key should throw an error', () => {
      expect(Local.set).to.throw('.set(\'key\', \'{ data }\') needs a key to set data');
    });

    it('.remove() without a key should throw an error', () => {
      expect(Local.remove).to.throw('.remove(\'key\') requires a key to remove data');
    });
  });

  describe('The Local util type is correct', () => {
    it('should be an object', () => {
      expect(typeof Local).to.be.equal('object');
    });
  });

  describe('.get() is present', () => {
    it('should be a function', () => {
      expect(typeof Local.get).to.be.equal('function');
    });
  });

  describe('.set() is present', () => {
    it('should be a function', () => {
      expect(typeof Local.set).to.be.equal('function');
    });
  });

  describe('.remove() is present', () => {
    it('should be a function', () => {
      expect(typeof Local.remove).to.be.equal('function');
    });
  });

  describe('The stored object is returned as an object', () => {
    it('should return an object', () => {
      expect(typeof fetchedBill).to.be.equal('object');
    });
  });

  describe('The stored object matches the set object', () => {
    it('should return the same set object', () => {
      expect(fetchedBill).to.eql(bill);
    });
  });

  describe('Local Storage can store multiple data types', () => {
    const SKEY = 'stringKey';
    const SVAL = 'string value';
    const NKEY = 'numberKey';
    const NVAL = 24;
    Local.set(SKEY, SVAL);
    Local.set(NKEY, NVAL);

    it('should store a string', () => {
      expect(Local.get(SKEY)).to.be.equal(SVAL);
    });

    it('should store a number', () => {
      expect(Local.get(NKEY)).to.be.equal(NVAL);
    });
  });
});

describe('Local Storage should remove items', () => {
  before(() => {
    Local.set('bill', bill);
    Local.set('steve', steve);

    Local.remove('bill');
  });

  describe('set properties are removed', () => {
    it('does not have bill', () => {
      expect(Local.get('bill')).to.be.equal(null);
    });

    it('has steve', () => {
      expect(typeof Local.get('steve')).to.be.equal('object');
    });
  });
});

describe('Local Storage cache is cleared on clear()', () => {
  before(() => {
    Local.set('bill', bill);
    Local.set('steve', steve);
    Local.clear();
  });

  describe('the cookie cache is correct', () => {
    it('bill should be cleared', () => {
      expect(Local.get('bill')).to.be.equal(null);
    });

    it('steve should be cleared', () => {
      expect(Local.get('steve')).to.be.equal(null);
    });
  });
});

/* SESSION STORAGE */
describe('Session Storage should behave as expected', () => {
  before(() => {
    Session.set('bill', bill);
    fetchedBill = Session.get('bill');
  });

  describe('Session Storage expected errors are thrown', () => {
    it('.get() without a key should throw an error', () => {
      expect(Local.get).to.throw('.get(\'key\') requires a key to look up data');
    });

    it('.set() without a key should throw an error', () => {
      expect(Local.set).to.throw('.set(\'key\', \'{ data }\') needs a key to set data');
    });

    it('.remove() without a key should throw an error', () => {
      expect(Local.remove).to.throw('.remove(\'key\') requires a key to remove data');
    });
  });

  describe('The Session util type is correct', () => {
    it('should be an object', () => {
      expect(typeof Session).to.be.equal('object');
    });
  });

  describe('.get() is present', () => {
    it('should be a function', () => {
      expect(typeof Session.get).to.be.equal('function');
    });
  });

  describe('.set() is present', () => {
    it('should be a function', () => {
      expect(typeof Session.set).to.be.equal('function');
    });
  });

  describe('.remove() is present', () => {
    it('should be a function', () => {
      expect(typeof Session.remove).to.be.equal('function');
    });
  });

  describe('The stored object is returned as an object', () => {
    it('should return an object', () => {
      expect(typeof fetchedBill).to.be.equal('object');
    });
  });

  describe('The stored object matches the set object', () => {
    it('should return the same set object', () => {
      expect(fetchedBill).to.eql(bill);
    });
  });

  describe('Session Storage can store multiple data types', () => {
    const SKEY = 'stringKey';
    const SVAL = 'string value';
    const NKEY = 'numberKey';
    const NVAL = 24;
    Session.set(SKEY, SVAL);
    Session.set(NKEY, NVAL);

    it('should store a string', () => {
      expect(Session.get(SKEY)).to.be.equal(SVAL);
    });

    it('should store a number', () => {
      expect(Session.get(NKEY)).to.be.equal(NVAL);
    });
  });
});

describe('Session Storage should remove items', () => {
  before(() => {
    Session.set('bill', bill);
    Session.set('steve', steve);
    Session.remove('bill');
  });

  describe('removed properties are removed', () => {
    it('does not have bill', () => {
      expect(Session.get('bill')).to.be.equal(null);
    });

    it('has steve', () => {
      expect(Session.get('steve')).to.eql(steve);
    });
  });
});

describe('Session Storage cache is cleared on clear()', () => {
  before(() => {
    Session.set('bill', bill);
    Session.set('steve', steve);
    Session.clear();
  });

  describe('the cookie cache is correct', () => {
    it('bill should be cleared', () => {
      expect(Session.get('bill')).to.be.equal(null);
    });

    it('steve should be cleared', () => {
      expect(Session.get('steve')).to.be.equal(null);
    });
  });
});

/* COOKIE STORAGE */
describe('Cookie Storage should behave as expected', () => {
  const key = '0m2bdh84Jpnxje01-1ndr41h57';
  const token = 'jf92la-H9G26Fsk0jl21m-utA==';

  before(() => {
    Cookie.set('key', key);
    Cookie.set('token', token);
  });

  describe('The Cookie Class type is correct', () => {
    it('should be an object', () => {
      expect(typeof Cookie).to.be.equal('object');
    });
  });

  describe('.get() is present', () => {
    it('should be a function', () => {
      expect(typeof Cookie.get).to.be.equal('function');
    });
  });

  describe('.set() is present', () => {
    it('should be a function', () => {
      expect(typeof Cookie.set).to.be.equal('function');
    });
  });

  describe('.remove() is present', () => {
    it('should be a function', () => {
      expect(typeof Cookie.remove).to.be.equal('function');
    });
  });

  describe('The stored strings should be able to be retreived', () => {
    it('should return the key', () => {
      expect(Cookie.get('key')).to.be.equal(key);
    });

    it('should return the token', () => {
      expect(Cookie.get('token')).to.be.equal(token);
    });
  });
});

describe('Cookie Storage should remove items', () => {
  const key = '0m2bdh84Jpnxje01-1ndr41h57';
  const token = 'jf92la-H9G26Fsk0jl21m-utA==';

  before(() => {
    Cookie.set('key', key);
    Cookie.set('token', token);
    Cookie.remove('token');
  });

  describe('removed properties are removed', () => {
    it('should return the key', () => {
      expect(Cookie.get('key')).to.be.equal(key);
    });

    it('should not return the token', () => {
      expect(Cookie.get('token')).to.be.equal(null);
    });
  });
});

describe('Cookie clearStorage should remove all items', () => {
  const key = '0m2bdh84Jpnxje01-1ndr41h57';
  const token = 'jf92la-H9G26Fsk0jl21m-utA==';

  before(() => {
    Cookie.set('key', key);
    Cookie.set('token', token);
    Cookie.clear();
  });

  describe('removed properties are removed', () => {
    it('should not return the key', () => {
      expect(Cookie.get('key')).to.be.equal(null);
    });

    it('should not return the token', () => {
      expect(Cookie.get('token')).to.be.equal(null);
    });
  });
});

describe('Cookie Storage cache is hydrated on set()', () => {
  const key = '0m2bdh84Jpnxje01-1ndr41h57';
  const token = 'jf92la-H9G26Fsk0jl21m-utA==';

  before(() => {
    Cookie.set('key', key);
    Cookie.set('token', token);
  });

  describe('the cookie cache is correct', () => {
    it('should return the key', () => {
      expect(Cookie.store).to.eql({
        key,
        token
      });
    });
  });
});

describe('Cookie Storage cache is removed on remove()', () => {
  const key = '0m2bdh84Jpnxje01-1ndr41h57';
  const token = 'jf92la-H9G26Fsk0jl21m-utA==';

  before(() => {
    Cookie.set('key', key);
    Cookie.set('token', token);
    Cookie.remove('token');
  });

  describe('the cookie cache is correct', () => {
    it('should return the key', () => {
      expect(Cookie.store).to.eql({
        key
      });
    });
  });
});

describe('Cookie Storage cache is cleared on clear()', () => {
  const key = '0m2bdh84Jpnxje01-1ndr41h57';
  const token = 'jf92la-H9G26Fsk0jl21m-utA==';

  before(() => {
    Cookie.set('key', key);
    Cookie.set('token', token);
    Cookie.clear();
  });

  describe('the cookie cache is correct', () => {
    it('should return the key', () => {
      expect(Cookie.store).to.eql({});
    });
  });
});

describe('Key generates expected key', () => {
  it('should generate a key', () => {
    expect(keyHash('test')).to.eql('html5-store:test');
  });
});
