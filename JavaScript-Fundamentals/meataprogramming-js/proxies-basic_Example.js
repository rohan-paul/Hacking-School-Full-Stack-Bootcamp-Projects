/* The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).

In a nutshell, you can use a Proxy to determine behavior whenever the properties of a target object are accessed. A handler object can be used to configure traps for your Proxy, as we’ll see in a bit.

 Users of the Proxy don't have direct access to the original object, which makes it a good tool for encapsulation, validation, access control, and a whole bunch of other things. Keep on reading to see some interesting examples.


There are 3 key terms we need to define before we proceed:

handler — the placeholder object which contains the trap(s). This is just a regular object whose properties are functions which define the behavior of the proxy when an operation is performed on it.

traps — the method(s) that provide property access. Traps allow you to intercept interactions with target in different ways, as long as those interactions happen through proxy.

This is analogous to the concept of traps in operating systems. In computing and operating systems, a trap, also known as an exception or a fault, is typically a type of synchronous interrupt typically caused by an exceptional condition (e.g., breakpoint, division by zero, invalid memory access).

target — object which the proxy virtualizes.  It can be any sort of object, including a native array, a function or even another proxy, which will be wrapped with Proxy.

Proxies enable us to intercept and customize operations performed on objects.

My Blog Post on Proxy - https://medium.com/@paulrohan/understanding-proxy-metaprogramming-in-javascript-b1c727b747f2
*/

// ***************************************Example-1***************************************


// Here I am creating a custom behavior for fundamental operations of simple property access.

const originalTargetObject = { prop1: 'Awesome1', prop2: 'Awesome2'};

//The default way access i.e. to get the value of prop1 for 'originalTargetObject' is to do as below.

console.log(originalTargetObject.prop1);

console.log(originalTargetObject.prop2);

// Here, the console.log() statement performs a get operation on the object 'originalTargetObject' to get the value of the property 'prop1'.

// 'handler' is a normal object whose properties are functions which define the behavior of the proxy when an operation is performed on it. And the 'get' method is part of the set of trap-methods provided under ES6-Proxy whose purpose is to getting a property value. So, in my below function, I am defining what that get method will do.


const handler = {
    get: function (obj, prop, receiver) {
        const value = obj[prop];
        console.log(`GET ${prop} = ${value}`);
        return value;
    }
};

// Instantiate a new Proxy
const proxiedObject = new Proxy(originalTargetObject, handler);

//Now check the output
// proxiedObject.prop1;   // Will output - GET prop1 = Awesome1
// proxiedObject.prop2    // Will output - GET prop1 = Awesome2
// proxiedObject.prop3;   // Will output - GET prop3 = undefined


/* When we asking for proxiedObject.key1 in our example, our handler.get trap will be called.

The get trap receives three parameters: target, property, receiver.
    The target is the original object for which we created the proxy.
    The property is the name of the property that is being accessed.
    The receiver is either the proxy or an object that inherits from the proxy.*/



// ***************************************Example-2***************************************

/*
 Now, in the above code, when I want to get a non-existent property from the originalTargetObject (i.e. with proxiedObject.prop3) - I will get 'undefined' . So how to modify the handler to handle non-existent properties. */


modifiedHandler = {
    get: function (obj, prop, receiver) {
        // const value = obj[prop];
        // console.log(`GET ${prop} = ${value}`);

        if (prop in obj) {
            return obj[prop];
        }
        return 'Sorry ! requested property does not exist';
    }
};

newProxiedObject = new Proxy(originalTargetObject, modifiedHandler);

//Now check the output
// console.log(newProxiedObject.prop1);   // Will output - GET prop1 = Awesome1
// console.log(newProxiedObject.prop3);   // Will output - Sorry ! requested property does not exist
