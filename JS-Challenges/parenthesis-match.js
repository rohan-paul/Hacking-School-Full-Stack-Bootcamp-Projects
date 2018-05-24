/* Write a 'balancedParens' function that takes a string as input and returns a boolean — if the parentheses in the input string are 'balanced', then return true, else return false */

let isParenthesisMatching = (str) => {
    let stack = [];

    let open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closed = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}

console.log(isParenthesisMatching("(){}"));

/* if a closed chr, check if the matching closed parenthesis of the last element that is popped off the stack (the last open parenthesis symbol found in the string) is not equal to the current chr
if the chr isn’t the matching closed parenthesis for the last open parenthesis from the stack, then we return false because we have an imbalanced input.

Our solution iterates the length of the input string, meaning that our time cost will grow in linear proportion to the growth of the string length. Or, for each character that is added to the input string, the algorithm will take 1 time unit longer to complete (worst case). All other operations in our algorithm are constant time because we are using object-property lookup to find our comparison values and the pop method of a Stack data structure to keep track of all the parenthesis pairs that get opened.
 */
