# Chapter 2 Program Structure





__And my heart glows bright red under my filmy, translucent skin and they have to adminisiter 10cc of JavaScript to get me to come back. (I respond well to toxins in the blood.) Man, that stuff will kick the peaches right out your gills!"__

## EXPRESSIONS AND STATEMENTS

In Chapter 1 , we used values and operators to get new values. A fragments of code that produces a value is called an expression. Every value that is writter literally `22` or `"psychoanalysis"` is considered an expression

Expressions can contain other expressions in a way similar to how subsentences in human languages are nested - a substance can contain its own subsentences, and so on.

This allows us to build expressions that describe arbitrarily complex computations.

If an expression corresponds to a sentence fragment, a JavaScript statement corresponds to a full sentence.
A program is a list of statements.


## BINDINGS 

To catch and hold values, JavaScript provides a thing called a *binding* or variable:

`let caught = 5 * 5;`

`let` indicates that this sentence is going to defind a binding. 
It is followed by the name of the binding and, if we want to immediately give ti a value by an `=` operator and an expression.

The previous statement creates a abinding called `caught` and uses it to grab hold of the number that is produced by multiplying 5 by 5.
After binding has been defined, its name can be used as an expression.
the value of such an expression is the value the binding currently holds.

```
let ten = 10
console.log(ten * ten)
// -> 100
```

When a binding points at a value, that does not mean it is tied to that value forever.
The `=` operator can be used at any time on existing bindings to disconnect them from their current value and have a new one.

 ```
 let mood = "light"
 console.log(mood)
 // -> light
 
 moo = "dark"
 console.log(mood)
 // -> dark
 ```

You can imagine bindings as tentacles, rather than boxes.
The do not *contain* values; they grasp them - two bindings can refer to the same value.
A program can access only the values that it still has reference to.

When you need to remember something, you grow a tentacle to hold on to it or you reattach one of your existing tentacles to it.

```
let luigisDebt = 140
luigisDebt = luigisDebt - 35
console.log(luigisDebt)
// -> 105
```

If you ask for the value of an empty binding, you'll get the value undefined.
A single `let` statement may define multiple bindings.

```javascript
let one = 1
let two = 2
console.log(greeting + name)
// -> Hello Ayda
```

`var` (short for variable) is the way bindings were declared before 2015 in JavaScript
`const` stands for *constant*



## BINDING NAMES

Binding names can be any word, digits can be part of binding names but must not start with a digit.
A binding name may include dollar signs ($) or underscores (_) but no other punctuation or special characters.

words with a special meaning, such as `let` are *keywords* and they may not be used as binding names.
Here are some reserved words:

```
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield
```

No need to memorize the list, you'll see an unexpected
syntax error 


## THE ENVIRONMENT

The collection of bindings and their values exist at a given
time is called the *environment*. When a program runs this
environment is not empty.

It always contains bindings that are part of the language standard,
and most of the time, it also has bindings that provide ways to
interact with the surrounding sytem.


## FUNCTIONS

Values provided in the default environment have the type function.
A function is a piece of program wrapped in a value.

Executing a function is called *invoking*, *calling*, or *applying* it.
You can call a function by putting an expression or `()` after the function.

Values given to functions are called *arguments* and different functions
might need a number or different types of arguments.


## RETURN VALUES

Showing a dialog box or writting text to the screen is a *side effect*.
A lot of functions are useful because of the side effects they produce.
Functions also produce values where they don't need to have side effects.


When a function produces a value, it is said to *return* that value.
Anything that produces a value is an expression in JavaScript, which 
means function calls can be used within larger expressions.*``*

The *next chatper* explains how to wrtie functions


## Control Flow

When your program contains more than one statement,
the statemetns are executed as if they are a story, from top to bottom.

``` 
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber + theNumber);
```

This function __converts__ a value to a number.
We need that converstions because *prompt* is a 
string value, and we want a number.

`String` and `Boolean` that convert values to those types

![conditional-straight](controlflow-straight.svg)

### CONDITIONS EXECUTION

Not all programs are straight roads. We may, for example, want to 
create a branching road, where the program takes the proper branch
based on the situation at hand. This is called **conditional execution**.

![conditional-if](controlflow-if.svg)


Conditional execution is creatd with the `if` keyword in JavaScript.
When we want some code to be executed if, and only if, a certain 
condition holds.

```
let theNumber = Number(prompt("Pick a number"))
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber)
}

```

Thew `if` keyword executes or skips a statement depending on the 
value of a Boolean expression. 

The deciding expression is 
written after the keyword, between parentheses, followed
by the statement to execute.

`Number.isNaN` is a standard JavaScript function that returns `true`
only if the argument it is given is `NaN`.

 The `Number` function happens to return `NaN` when you give it a 
 string that doesn't represent a valid number.
 
 Thus, the condition translates to "unless `theNumber` is not-a-numnber, do this".
 
 The opening ({ and closing }) braces in this example, represent a *block*.
 This helps avoid having to think about whether they are needed.
 
 Most JavaScript programmers use them in every wrapped statement like this.
 
 ```
 if (1 + 1 === 2) console.log("This is true")
 ```
 
 You can also use the `else` keyword, together with `if`, to create
 two seperate, alternative executions paths.
 
```
let theNumber = Number(prompt("Pick a number"));

if (!Number.isNaN(theNumber)) {
  console.log("You")
}
```

If you have more than two paths to choose from, you can "chain" multiple
`if/else` pairs together. Here's an example:

```
let num = Number(prompt("Pick a number"))

if (num < 10) {
  console.log("Small")
} else if (num < 100) {
  console.log("Medium")
} else {
  console.log("Large")
}
```

The program will check whether `num` is less than 10. 

If it is, it chooses that branch, shows "Small", and is done.

If it isn't, it takes the `else` branch, which itself contains a second `if`.


![controlflow-nested-if](controlflow-nested-if.svg)

## WHILE AND FOR LOOPS