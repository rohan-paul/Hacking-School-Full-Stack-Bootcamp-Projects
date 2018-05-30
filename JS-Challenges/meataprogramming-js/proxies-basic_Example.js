/* Users of the Proxy don't have direct access to the original object, which makes it a good tool for encapsulation, validation, access control, and a whole bunch of other things. Keep on reading to see some interesting examples.

In a nutshell, you can use a Proxy to determine behavior whenever the properties of a target object are accessed. A handler object can be used to configure traps for your Proxy, as we’ll see in a bit.

The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).

There are 3 key terms we need to define before we proceed:

handler — the placeholder object which contains the trap(s). This is an object whose properties are functions which define the behavior of the proxy when an operation is performed on it.

traps — the method(s) that provide property access. Traps allow you to intercept interactions with target in different ways, as long as those interactions happen through proxy.

. This is analogous to the concept of traps in operating systems. In computing and operating systems, a trap, also known as an exception or a fault, is typically[NB 1][1] a type of synchronous interrupt typically caused by an exceptional condition (e.g., breakpoint, division by zero, invalid memory access).

target — object which the proxy virtualizes.  It can be any sort of object, including a native array, a function or even another proxy, which will be wrapped with Proxy.

Proxies enable us to intercept and customize operations performed on objects

*/

//Example-1 - Here I am creating a custom behavior for fundamental operations of simple property access.

const target = { a:1, b:2},

handler = {
    get (obj, prop) {
        const value = obj[prop];
        console.log(`GET ${prop} = ${value}`);
        return value
    }
},

proxy = new Proxy(target, handler);

//Now check the output
console.log(proxy.a);
console.log(proxy.c);


/* When we asking for proxy.a in our example, our handler.get trap will be called.  */

//Example-1