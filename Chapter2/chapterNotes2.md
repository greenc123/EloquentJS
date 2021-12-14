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

```
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


