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

// console.log(isParenthesisMatching("(){}"));

/* if a closed chr, check if the matching closed parenthesis of the last element that is popped off the stack (the last open parenthesis symbol found in the string) is not equal to the current chr
if the chr isn’t the matching closed parenthesis for the last open parenthesis from the stack, then we return false because we have an imbalanced input.

Our solution iterates the length of the input string, meaning that our time cost will grow in linear proportion to the growth of the string length. Or, for each character that is added to the input string, the algorithm will take 1 time unit longer to complete (worst case). All other operations in our algorithm are constant time because we are using object-property lookup to find our comparison values and the pop method of a Stack data structure to keep track of all the parenthesis pairs that get opened.
 */

 /* Parenthesis matching with Array.reduce() method
 Basically, this function just increments the variable uptoPrevChar for each opening parenthesis and reduces it for each closing parenthesis. And ultimately I should just get zero for a balance string.

 However, I have to return a boolean output - so I put a logical not ( ! ) at the very front of str. So for numerical return value of 0 for variable 'uptoPrevChar' - I return true.

 So for the below given test-case, the first iteration of the function will return 4, as there are 4 opening brackets. And then it will continue to decrement it and finally return zero.

 Just paste this code, in Chrome DevTool > Source > Snippets > Put a breakpoint at the return value of 'uptoPrevChar' on the second else if iteration > right click on the snippets and run > The continue clicking on 'resume script execution'. NOTE - in Chrome Dev-Tool, use 'var' instead of 'let'

 */
 let isBalancedParenthesis = (str) => {
    return !str.split('').reduce((uptoPrevChar, thisChar) => {
        if(thisChar === '(') {
            return ++uptoPrevChar;
        } else if (thisChar === ')') {
            return --uptoPrevChar;
        }
        else if(thisChar === '{') {
            return ++uptoPrevChar;
        } else if (thisChar === '}') {
            return --uptoPrevChar;
        }
        else if(thisChar === '[') {
            return ++uptoPrevChar;
        } else if (thisChar === ']') {
            return --uptoPrevChar;
        }
        return uptoPrevChar
    }, 0);
}

console.log(isBalancedParenthesis("({(()))}"));
