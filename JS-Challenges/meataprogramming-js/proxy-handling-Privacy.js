/* Creating truly private properties in JavaScript. Meaning only accessible from within the class as opposite to public (accessible internally or externally).

In JavaScript, it's conventional to use underscores (or other characters) before and/or after a property to signal that it's for internal use only. But that doesn't stop someone from peeking at or changing it anyway.

This is the case below, where we have an apiKey we want to be accessible to the methods in the api object, but we really don't want to be accessible outside of it. */

var api = {
    _apiKey: '123abc456def',
  };

  // However the below codes will work just so as expected, getting or setting the value
  var apiKey = api._apiKey;
  api._apiKey = '5678xyz';

/*   With ES6 proxies, you can achieve true and complete privacy in JavaScript, in a couple ways.

First, you can use a proxy to intercept requests to certain properties and then restrict them or just return undefined. */

var api = {
    _apiKey: '123abc456def',
  };

const RESTRICTED = ['_apiKey'];

api = new Proxy (api, {
    get (target, key, proxy) {
        if (RESTRICTED.indexOf(key) > -1) {
            throw Error(`${key} is restricted. Please see api documentation for details`)
        }
        return Reflect.get(target, key, value, proxy);
    }
})

console.log(api._apiKey);
api._apiKey = '5678xyz';