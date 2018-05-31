/* The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).

In a nutshell, you can use a Proxy to determine behavior whenever the properties of a target object are accessed. A handler object can be used to configure traps for your Proxy, as we’ll see in a bit.

 Users of the Proxy don't have direct access to the original object, which makes it a good tool for encapsulation, validation, access control, and a whole bunch of other things. Keep on reading to see some interesting examples.


There are 3 key terms we need to define before we proceed:

handler — the placeholder object which contains the trap(s). This is an object whose properties are functions which define the behavior of the proxy when an operation is performed on it.

traps — the method(s) that provide property access. Traps allow you to intercept interactions with target in different ways, as long as those interactions happen through proxy.

This is analogous to the concept of traps in operating systems. In computing and operating systems, a trap, also known as an exception or a fault, is typically[NB 1][1] a type of synchronous interrupt typically caused by an exceptional condition (e.g., breakpoint, division by zero, invalid memory access).

target — object which the proxy virtualizes.  It can be any sort of object, including a native array, a function or even another proxy, which will be wrapped with Proxy.

Proxies enable us to intercept and customize operations performed on objects.

*/

//Example-1 - Here I am creating a custom behavior for fundamental operations of simple property access.

/* const originalTargetObject = { prop1: 'Awesome1', prop2: 'Awesome2'},

handler = {
    get (obj, prop, receiver) {
        const value = obj[prop];
        console.log(`GET ${prop} = ${value}`);
        return value;
    }
},

proxiedObject = new Proxy(originalTargetObject, handler);

//Now check the output
console.log(proxiedObject.prop1);
console.log(proxiedObject.prop3); */

/*
Output -

GET key1 = value1
value1
GET key3 = undefined
undefined
*/

/* When we asking forproxiedObject.key1 in our example, our handler.get trap will be called.

The get trap receives three parameters: target, property, receiver.
The target is the original object for which we created the proxy.
The property is the name of the property that is being accessed.
The receiver is either the proxy or an object that inherits from the proxy.*/

/* Example-2

Reflect is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of proxy handlers. Reflect is not a function object, so it's not constructible. */

/* Example - 2
 Now, in the above code, when I want to get a non-existent property from the originalTargetObject (i.e. with proxiedObject.prop3) - I will get 'undefined' . So how to modify the handler to handle non-existent properties. */

const originalTargetObject = { prop1: 'Awesome1', prop2: 'Awesome2'},

modifiedHandler = {
    get (obj, prop, receiver) {
        // const value = obj[prop];
        // console.log(`GET ${prop} = ${value}`);

        if (prop in obj) {
            return obj[prop];
        }
        return 'Sorry ! requested property does not exist';
    }
};

proxiedObject = new Proxy(originalTargetObject, modifiedHandler);

//Now check the output
console.log(proxiedObject.prop1);
console.log(proxiedObject.prop3);

/* Output -
Awesome1
Sorry ! requested property does not exist
*/