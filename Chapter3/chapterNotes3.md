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

Bindings declared with `let` and `const` are in fact local to the *block* that they are declared in, so if you create one of those inside of a loop, the code before and after the loop cannot "see" it. In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, created with the `var` keyword, are visible throughout the whole function that they appear in - or throughout the global scope, if they are not in a function.

```javascript
let x = 10;

if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z); // -> 60
}

// y is not visible here
console.log(x + z); // -> 40
```

Each scope can "look out" into the scope around it, so `x` is visible inside the block in the example. The exception is when multiple bindings have the same name - in that case, code an see only the innermost one. For example, when the code inside the havle function referes to n, it is seeing its own n, not the global n.

```javascript
const halve = function(n) {
  return n / 2
}

let n = 10
console.log(halve(100)) // -> 50
console.log(n) // -> 10
```

### NESTED SCOPE


JavaScript distinguishes not just global and local bindings, Blocks and function can be created inside other blocks and functions, producing multiple degrees of locality.

The following function outputs the ingredients needed to mqke a batch of hummus - has an inner function:

```javascript
const hummus = function(factor){
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor
    if (ingredientAmount > 1) {
      unit += "s"
    }
    console.log(`${ingredientAmount} ${unit} ${name}`)
  }
  
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
}
```

The code inside the `ingredient` function can see the factor binding from the outer function. But its local bindings, such as unit or ingredientAmount, are not visible in the outer function.

The set of bindings visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.

### FUNCTIONS AS VALUES 

A function binding usually simply acts as a name for a specific piece of the program. Such binding is defined once and never changed. This makes it easy to confuse the function and its name.


But the two are different. A function value can do all the things that other values can do - you can use it in arbitrary expressions, not just call it. It is possible to store a function value in a new binding, pass it as an argument to a function, and so on. Similarly, a binding that holds a function is still just a regular binding and can, if not constant, be assigned a new value, like so:

```javascript
let launchMissles = function() {
  missleSystem.launch("now");
}

if (safeMode) {
  launchMissles = function() {/* do nothing */}
}
```

### DECLARATION NOTATION


There is a slightly shorter way to create a function binding. When the `function` keyword is used at the start of a statement, it works differently.

```javascript
function square(x) {
  return x * x;
}
```

This is a function `delcaration`. The statement defines the binding square and points it at the given function. It is slightly easier to write and doesn't require a semicolon after the function.

```javascript
console.log("The future says:", future())

function future() {
  return "You'll never have flying cars"
}
```

This code works, even though the function is defined below the code that uses it.
Function declarations are not part of the regular top-to-bottom flow of control.
They are conceptually moved to the top of their scope and can be used by all the code in that scope.
This is useful when it offers freedom to order code in a way that seems meaningful, without worrying about having to defind all functions before they are used.

### ARROW FUNCTIONS

There's a third notation for functions, which looks very different from the others.
It uses an arrow (=>) made up of an equal sign and a greater-than character.

```javascript
const power = (base, exponenet) => {
  let result = 1
  
  for (let count = 0; count < exponent; count++)  {
    result *= base
  }
  
  return result
}
```

The arrow comes `after` the list of parameters and is followed by the function's body. It expresses something like "this input (the parameters) produces this result (the body)".

When there is only one parameter name, you can omit the parentheses around the parameter list. If the body is a single expression, rather than a blcok in braces, that expression will be returned from the function. So, these two definitions of square do the same thing:

```javascript
const sq1 = x => return x * x
const sq2 = (x) => {return x * x}
```

When an arrow function has no parameters at all, its parameters list is just an empty set of parentheses.

```javascript
const horn = () => {
  console.log("Toot")
}
```

Arrow functions help to write small function expressions in a less verbose way.


### THE CALL STACK


The way control flows through functions is somewhat involved.

```javascript
function greet(who) {
  console.log("Hello " + who)
}

greet("Harry")
console.log("Bye")
```

A run through this program goes roughly like this:
- the call to `greet` causes control to jump to the start of that function (line 2)
- The function calls `console.log`, which takes control, does its job, and then returns control to line 2.
- There it reaches the end of the `greet` function, so it returns to the places that called it, which is line 4
- The line after that calls `console.log` again
- After that returns, the program reaches its end

We could show the flow of control of schematically like this:

> not in function
> > in greet
> > > in console.log
> > 
> > in greet
> 
> not in function
> > in console.log
> 
> not in function

Because a function has to jump back to the place that called it when it returns, the computer must remember the context from which the call happened. In one case, console.log has to return to the `greet` function when it is done. In the other case, it returns to the end of the program.

The place where the computer stores this context is the call stack. Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.

Store this stack requries space in the computer's memory. When the stack grows too big, the computer will fail with a message like "out of stack space" or "too much recursion". The following code illustrates this by asking the computer a really hard question that causes an infinite back-and-forth between two functions. Rather, it `would` be infinit, if the computer had an infinite stack. As it is, we will run out of space, or "blow the stack".

```javascript
function chicken() {
  return egg()
}

function egg() {
  return chicken()
}

console.log(chicken() + " came first.")
// -> ??
```

