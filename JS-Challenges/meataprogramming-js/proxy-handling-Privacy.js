/* Creating truly private properties in JavaScript. Meaning only accessible from within the class as opposite to public (accessible internally or externally).

In JavaScript, it's conventional to use underscores (or other characters) before and/or after a property to signal that it's for internal use only. But that doesn't stop someone from peeking at or changing it anyway.

This is the case below, where we have an apiKey we want to be accessible to the methods in the api object, but we really don't want to be accessible outside of it. */

var api = {
    _apiKey: '123abc456def',
  };

  // However the below codes will work just so as expected, getting or setting the value

  var apiKey = api._apiKey; // Which is the equivalent get method of Proxy
  api._apiKey = '5678xyz';  // Which is the equivalent set method of Proxy

/*   With ES6 proxies, you can achieve true and complete privacy in JavaScript, in a couple ways.

First, you can use a proxy to intercept requests to certain properties and then restrict them or just return undefined. */

var api = {
    _apiKey: '123abc456def',
  };

const RESTRICTED = ['_apiKey'];

api = new Proxy (api, {
    get: function (target, key, proxy) {
        if (RESTRICTED.indexOf(key) > -1) {
            throw Error(`${key} is restricted. Please see api documentation for details`)
        }
        return Reflect.get(target, key, value, proxy);
    }
})

console.log(api._apiKey);
api._apiKey = '5678xyz';

/* A note on Reflect -
Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of proxy handlers. Reflect is not a function object, so it's not constructible.

We are using Reflect because it gives us a programmatic way of manipulating an object. It’s not that different from obj.prob = 'newly Assigned value' type of property assignment.

When using Proxy objects to wrap existing objects, it is very common to intercept an operation, do something, and then to "do the default thing", which is typically to apply the intercepted operation to the wrapped object. For example, say I want to simply log all property accesses to an object obj:

var loggedObj = new Proxy(obj, {
  get: function(target, name) {
    console.log("get", target, name);
    // now do the default thing
  }
});

So I would handle the defalut thing of getting as below

var loggedObj = new Proxy(obj, {
  get: function(target, name) {
    console.log("get", target, name);
    return Reflect.get(target, name);
  }
});

The Reflect and Proxy APIs were designed in tandem, such that for each Proxy trap, there exists a corresponding method on Reflect that "does the default thing". Hence, whenever you find yourself wanting to "do the default" thing inside a Proxy handler, the correct thing to do is to always call the corresponding method in the Reflect object:

Since we are using Reflect API, I’m going to replace target[property] with its equivalent Reflect function in the get trap as well.

*/