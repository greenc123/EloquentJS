# Chapter 3 FUNCTIONS





__"People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones." 
- Donald Knuth__


Functions are the bread and butter of JavaScript programming. The concept of wrapping a piece of program in a values has many uses. The concept of wrapping a piece of program in a value has many values. It gives us a way to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other. 

The most obvious application of functions is defining new vocabulary. Creating new words in prose is usually bad style. But in programming, it is indispensable.

Typical adult English speakers have some 20,000 words in their vocalbulary. Few programming languages come with 20,000 commands built in. And the vocabulary that is available tends to be more precisely defined, and thus less flexible, than in human language. There fore, we usually have to introduce new concepts to avoid repeating ourselves too much.

## DEFINING A FUNCTION

A function definition is a regular binding where the value of bindings is a function. For example, this code defines `square` to refer to a function that produces the square of a given number:

```javascript
const square = function(x){
  return x * x;
}

console.log(square(12)); // -> 144
```


A function is created with an expresssion that starts with the keyword function. Functions have a set of *parameters* (in this case, only x) and body, which contains the statements that are to be executed when the function is called. The function body of a function created this way must always be wrapped in braces, even when it consists of only a single statement.

A function can have multiple parameters or no paramters at all. In the following example, makeNoise does not list any parameter names, whereas power lists two:


```javascript
const makeNoise = function(){
  console.log("Pling!")
}

makeNoise(); // -> Pling!

const power = function(base, exponent){
  let result = 1
  
   for (let count = 0; count < exponent; count++) {
     result *= base
   }
   return result
}

console.log(power(2,10))

```

Some functions produce a value, such as power and square, and some don't such as makeNoise, whose only result is a side effect. A return statement determines the value the functions returns. When control comes across such a statement, it immediately jumps out of the current function and gives the returned value to the code that called the function. A return keyword without and expression after it will cause the function to return undefined. 

Parameters to a function behave like regular bindings, but their initial values are given by the caller of the function, not the code in the function itself.




### BINDINGS AND SCOPES

Each binding has a scope, which is the part of the program in which the bindings is visible. For bindings defined outside of any function or block, the scope is the whole program -- you can refer to such bindings whereever you want. These are called global.

But bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known as local bindings. Every time the function is called, new instances of these bindings are creaeted. This provides some isolation between functions -- each function call acts in its own little world (local environment) and can often be understood without knowing a lot about what's going on in the global environment.