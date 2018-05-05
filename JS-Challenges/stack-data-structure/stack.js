class Stack {
    constructor () {
        this.data = [];
        this.top = () => this.data.length;
        this.push = (...element) => {
            for (var i of element) {
                this.data.push(i)
            }
        }
        this.pop = () => {
            this.data.pop();
        }
        // peek() method looks at the object at the top of this stack without removing it from the stack.  The stack is not modified (it does not remove the element; it only returns the element for information purposes).
        this.peek = () => {
            this.data[this.data.length - 1];
        }
        this.clear = () => {
            this.data = [];
        }
    }
}
module.exports = Stack;