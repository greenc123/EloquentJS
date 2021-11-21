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

13

Thirteen will cause the bit patter for the #13 to come into existence inside the computer's memory.

JavaScript uses a fixed number of 64 bits.

You can represent up to 2^64.

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
