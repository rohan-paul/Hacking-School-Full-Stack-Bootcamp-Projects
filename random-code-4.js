class Stack {

  //initialize an empty stack
  constructor(){
      this.items = [];
  }

  // push inside stack
  push(value){
      this.items.push(value);
  }

  // pop from stack and return popped value
  pop(){
      return (this.items.length === 0)? "Underflow" : this.items.pop();
  }

  // peek stack
  peek(){
      return this.items[this.items.length - 1];
  }

  // check if stack is empty
  length(){

      return this.items.length;

  }

  // traverse the stack and print all values
  traverse(){

      for(let i = 0, length = this.items.length; i < length; i++){
          console.log(this.items[i]);
      }

  }


  // search a value in stack
  search(value){

      for(let i = 0, length = this.items.length; i < length; i++){

          if(this.items[i] === value) {
              return true;
          }
      }

      return false;

  }
}

function parenthesisMatched(exp) {

  let stack = new Stack();

  let openParentheses = ["[", "(", "{"];

  let closeParentheses = ["]", ")", "}"];

  for(let i = 0, length = exp.length; i < length; i++){
      if(openParentheses.includes(exp[i])){
          stack.push(exp[i]);
          console.log(stack);
      }
      else if(closeParentheses.includes(exp[i])){
          switch (exp[i]){
              case "]":
                  if(stack.peek() === "["){
                      stack.pop();
                  }
                  else {
                      return false;
                  }
                  break;
              case "}":
                  if(stack.peek() === "{"){
                      stack.pop();
                  }
                  else {
                      return false;
                  }
                  break;
              case ")":
                  if(stack.peek() === "("){
                      stack.pop();
                  }
                  else {
                      return false;
                  }
                  break;
          }
      }
  }

  return stack.length() === 0;

}

console.log(parenthesisMatched("{[()]}"));
/*
console.log(parenthesisMatched("{()}[]"));

console.log(parenthesisMatched("{[)]}"));

console.log(parenthesisMatched("[)")); */