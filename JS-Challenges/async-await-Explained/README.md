Async/await is a language structure that complements promises. It allows us to work with promises with less boilerplate.

For example, the following definitions are equivalent:

```
function f() {
    return Promise.resolve('TEST');
}

// asyncF is equivalent to f!
async function asyncF() {
    return 'TEST';
}
```
## Async - declares an asynchronous function (async function someName(){...}).
- Automatically transforms a regular function into a Promise.
- When called async functions resolve with whatever is returned in their body.
- Async functions enable the use of await.

## Await - pauses the execution of async functions. (var result = await someAsyncCall();).
- When placed in front of a Promise call, await forces the rest of the code to wait until that Promise finishes and returns a result.
- Await works only with Promises, it does not work with callbacks.
- Await can only be used inside async functions.

## Significance of Await

When we spawn a promise we can’t synchronously wait for it to finish. We can only pass a callback via then. Waiting for a promise is disallowed to encourage the development of non-blocking code. Otherwise, developers would be tempted to perform blocking operations because it’s easier than working with promises and callbacks.

However, in order to synchronise promises we need to allow them to wait for each other. In other words, if an operation is asynchronous (i.e. encapsulated in a promise) it should be able to wait for another asynchronous operation to finish. But how would the JavaScript interpreter know if an operation is running within a promise or not?

The answer is in the async keyword. Every async function returns a promise. Thus, the JavaScript interpreter knows that all operations in async functions will be encapsulated in promises and run asynchronously. Therefore, it can allow them to wait for other promises to finish.

Enter the await keyword. It can only be used in async functions, and allows us to synchronously wait on a promise. If we use promises outside of async functions we will still need to use then callbacks:

```
async function f(){
    // response will evaluate as the resolved value of the promise
    const response = await rp('http://example.com/');
    console.log(response);
}
```

## Error Handling

In most previous examples, we assumed that the promises resolve successfully. Hence, await-ing on a promise returned a value. If a promise we await for fails, this will result in an exception within the async function. We can use standard try/catch to handle it:

```
async function f() {
    try {
        const promiseResult = await Promise.reject('Error');
    } catch (e){
        console.log(e);
    }
}
```

If the async function does not handle an exception, whether it is caused by a rejected promise or another bug, it will return a rejected promise:

```
async function f() {
    // Throws an exception
    const promiseResult = await Promise.reject('Error');
}

// Will print "Error"
f().
    then(() => console.log('Success')).
    catch(err => console.log(err))

async function g() {
    // Throws an error
    throw "Error";
}

// This also will print "Error"
g().
    then(() => console.log('Success')).
    catch(err => console.log(err))

```
This gives us handy way to work with rejected promises via well the known exception handling mechanism.