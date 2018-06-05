// Here 'handler' object is the object named 'variable' - whose properties is the 'set' method is part of the set of trap-methods provided under ES6-Proxy whose purpose is to getting a property value. So, in my below function, I am defining what that get method will do.

/* let validator = {

    set: function (target, property, receiver) {
        if (property === 'age') {
            if (typeof receiver !== 'number' || Number.isNaN(receiver)) {
                console.log("Age must be positive number");
            }
            if (receiver < 0) {
                console.log('Age must be number');
            }
        }

        target[property] = receiver;

        return true;
    }
}

let person = new Proxy({}, validator); */

let person = {}

person.age = 'a string'
console.log(person.age);


// person.age = -30;
// console.log(person.age);

// person.age = 15;
// console.log(person.age);