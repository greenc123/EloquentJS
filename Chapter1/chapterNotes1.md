# Chapter 1 Notes
## Values, Types and Operators

__"Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below."__


**Master Yuan-Ma, The Book of Programming**

Computers only hold data. Data that you can read, write, create and delete. Bits are typilcally ones and zeros which represent that data. Any piece of discrete information can be tranformed into 1's and 0's. The following bits hold 13:

0  0  0  0  1  1  0  1

128 64 32 16  8  4  2  1

Binary number **00001101** and it adds up to **13**.






### VALUES

There is a sea of bits, a typical modern computer has more than 30 billion bits in its volatile data storage. We must separate the bits into chunks that represent pieces of information. In JavaScript, those chunks are called values. *In order to create a value, you must merely invoke its name. As soon as you no longer use the value, it will dissipate, leaving behind its bits to be recycled as building material for the next generation of values.





### NUMBERS

Numbers are typically represented as numeric values in JavaScript, not binary. 

`13`

Thirteen will cause the bit patter for the #13 to come into existence inside the computer's memory.

JavaScript uses a fixed number of 64 bits.

You can represent up to __2^64__.

Computer memory used to be groups of 8 or 16 bits to represent number. Numbers would overflow or end up with a number that did not fit into the given number of bits. Nowadays we are able to use 64 bit chunks and only need to overflow when dealing with astronomical numbers.

In order to store decimal points bits are usted to store the position of the decimcal point. 

For very big or very small numbers, you may also use scientific notation by adding an e (for exponent), followed by the exponent of the number.

2.998e8

That is 2.998 * 10^8 = 299,800,000

Whote numbers are guaranteed to always be precise. Unfortunately, fractional numbers generally are not. Just as &#928; c(pi) cannot be precisely expressed by a finite number of decimal digits, most numbers lose precision when only 64 bits are available to store them. 

Fractional digital numbers are closer to approximations than precise values.

#### Aritmetic

Numbers are mainly used for arithmetic and operations:

100 + 4 * 11

The + and * symbols are called operators

__P.E.M.D.A.S.__ 
**Order of Operations by priority:**

1. Parentheses
2. Exponents
3. Multiplication
4. Divide
5. Addition
6. Subtract

modulo `%` is the remainer operation after dividing 


#### SPECIAL NUMBERS  

There are three special values in JS that don't behave like normal numbers but are considered numebrs

`Infinity`
`-Infinity`
`NaN` or "Not a number"


### STRINGS 

Strings are used to represent text and are enclosing in quotes.

```
`Down on the sea` "Lie on the beach" 'Float on the ocean'
```

You can use backticks, double quotes or single quotes at the start and end on the string. 

Almost anything can be put between quotes to make string.
Backslash (\) indicates that the character after it has special meaning. This is called *escaping* the character. For example (\n) indicates a new line in the text.

`"This is the first line\nAnd this is the second"`

Is represented as:

```
This is the first line 
And this is the second
```

If two backslashes follow each other, they will collapse together. 


Strings also have to be modeled as a series of bits to be able to exist inside the computer. The way JavaScript does this is based on the Unicode standard. This assigns a number to virtually every character you would ever need.


JavaScript uses 16 bits per string element, which can describe 2^16 different characters.






### UNARY OPERATORS 

```
console.log(typeof 4.5)
// -> number
console.log(typeof "x")
// -> string
```


Operators that use two values are called binary operators, while those that take on are called unary operators.

The minus operator can be used both as a binary operator and as a unary operator.
```
console.log(- (10 - 2))
// -> 8
```





### BOOLEAN VALUES

When programmining it is useful to have a value that distinguishes between only two possibilities, like "yes" and "no" or "on" and "off". For this purpose JavaScript has a boolean type, true and false.

#### Comparison

```
console.log(3 > 2)
// -> true

console.log(3 < 2)
// -> false
```

The > and < signs check whether the values are "greater than" or "less than"

Strings can also be compared in this way.

```
console.log("Aardvark" < "Zoroaster")
// -> true
```

When comparing strings, JavaScript goes over the characters from left to right, comparing Unicode codes one by one.

Other operations include: 
>= (greater than or equal to)
<= (less than or equal to)
== (equal to)
!= (not equal to)


```
console.log("Itchy" != "Scratchy")
// -> true
console.log("Apple" == "Orange")
// -> false
```


There is only one value in JavaScript that is not equal to itself, and that is NaN "not a number"

```
console.log(NaN == NaN)
// -> false
```

#### Logical Operators

There are also some operations that can be applied to boolean values.
JavaScript supports three logical operators: and, or and not.
These can be used to "reason" about booleans.

The && operator represents logical *and*
The result is true only if both the values given to it are true.

```
console.log(true && false)
// -> false
console.log(true && true)
// -> true
```

The || operator denotes logical *or* and produces true if either values are true

```
console.log(false || true)
// -> true
console.log(false || false)
// -> false
```

! or the (NOT) is a unary operator that flips the value given to it:
!true produces false
!false produces true

Ternary operations use three values

```
console.log(true ? 1 : 2)
// -> 1
console.log(false ? 1 : 2)
// -> 2
```

This is sometimes called the conditional operator
When the value before the question mark is true the value to the left of : is chosen
When the value before the question mark is false the value to the right of : is chosen 


#### Empty Values

*null* and *undefined* are used to denote the absence of a meaningful value.
They are values that carry no information.

AUTOMATIC TYPE CONVERSATION

```
console.log(8 * null)
// -> 0
console.log("5" - 1)
// -> 4
console.log("5" + 1)
// -> 51
console.log("five" * 2)
// -> NaN
console.log(false == 0)
// -> true
```

When an operator is applied to the "wrong" type of value,
JavaScript will quietly convert that value to the type
it needs, using a set of rules that often aren't 
what you want or expect.

The `null` in the first expression becomes 0, and "5"
in the second expression becomes 5 (from string to number)

```
console.log(null == undefined)
// -> true
console.log(null == 0)
// -> false
```

#### SHORT - CIRCUITING OF LOGICAL OPERATORS

The logical operators && and || handle values of different
types in a peculiar way. They will convert the value on
their left side to Boolean type in order to decide what

to do, but depending on the operator and the result
of that conversion, they will return either the
*original* left-hand value or the right hand value

```
console.log(null || "user")
// -> user
console.log("Agnes" || "user")
// -> Agnes
```


