# store
Browser storage API's are a great way to store local state that you don't need
to persist to a database, however they are more verbose than they need to be.
`LocalStorage` and `SessionStorage` can only store strings, so storing objects
requires manual `JOSN.stringify()` / `JSON.parse()` when setting and getting data.
It would be great if this was done automatically.
Well now it is! With a more streamlined wrapper around these browser API's, `html5-store`
is able to automatically handle things like JSON stringify/parse when setting
and getting data, as well as provide handy utilities like clear key formatting
so you can tell what utility set your local state.
Cookie storage has always been unnecessarily verbose, and `html5-store` cleans
up the Cookie API to behave as a developer would expect with simple `.get()`,
`.set()` and `.remove()` methods.

## Local Storage Example
```javascript
import { Local } from 'html5-store';

const settings = {
  volume: 54,
  currentTrack: '0h141983h8dhwq712873g34-Az',
  position: '1:34'
};

Local.set('settings', settings);

. . .

Local.get('settings');
/**
 * returns:
 * {
 *   volume: 54,
 *   currentTrack: '0h141983h8dhwq712873g34-Az',
 *   position: '1:34'
 * }
 */

 . . .

 Local.remove('settings');
 Local.get('settings'); // returns: false
```

## Session Storage Example
```javascript
import { Session } from 'html5-store';

const settings = {
  volume: 54,
  currentTrack: '0h141983h8dhwq712873g34-Az',
  position: '1:34'
};

Session.set('settings', settings);

. . .

Session.get('settings');
/**
 * returns:
 * {
 *   volume: 54,
 *   currentTrack: '0h141983h8dhwq712873g34-Az',
 *   position: '1:34'
 * }
 */

 . . .

 Session.remove('settings');
 Session.get('settings'); // returns: false
```

## Cookie Storage Example
```javascript
import { Cookie } from 'html5-store';

const token = '0h141983h8dhwq712873g34-Az';

Cookie.set('token', token);

. . .

Cookie.get('token');
/**
 * returns:
 * '0h141983h8dhwq712873g34-Az'
 */

 . . .

 Cookie.remove('settings');
 Cookie.get('settings'); // returns: null
```
