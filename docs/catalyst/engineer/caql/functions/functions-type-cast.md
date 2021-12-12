---
title: Type check & cast
layout: default
description: Some operators expect their operands to have a certain data type
license: |
  Adapted from https://github.com/arangodb/docs
  Under Apache License, Version 2.0, January 2004
  Full license https://github.com/arangodb/docs/blob/main/LICENSE
---

Type check and cast functions
=============================

Some operators expect their operands to have a certain data type. For example,
logical operators expect their operands to be boolean values, and the arithmetic
operators expect their operands to be numeric values. If an operation is performed
with operands of other types, an automatic conversion to the expected types is
tried. This is called implicit type casting. It helps to avoid query
aborts.

Type casts can also be performed upon request by invoking a type cast function.
This is called explicit type casting. CAQL offers several functions for this.
Each of the these functions takes an operand of any data type and returns a result
value with the type corresponding to the function name. For example, *TO_NUMBER()*
will return a numeric value.

Type casting functions
----------------------

### TO_BOOL()

`TO_BOOL(value) → bool`

Take an input *value* of any type and convert it into the appropriate
boolean value.

- **value** (any): input of arbitrary type
- returns **bool** (boolean):
  - *null* is converted to *false*
  - Numbers are converted to *true*, except for 0, which is converted to *false*
  - Strings are converted to *true* if they are non-empty, and to *false* otherwise
  - Arrays are always converted to *true* (even if empty)
  - Objects / documents are always converted to *true*

It's also possible to use double negation to cast to boolean:

```js
!!1 // true
!!0 // false
!!-0.0 // false
not not 1 // true
!!"non-empty string" // true
!!"" // false
```

`TO_BOOL()` is preferred however, because it states the intention clearer.

### TO_NUMBER()

`TO_NUMBER(value) → number`

Take an input *value* of any type and convert it into a numeric value.

- **value** (any): input of arbitrary type
- returns **number** (number):
  - *null* and *false* are converted to the value *0*
  - *true* is converted to *1*
  - Numbers keep their original value
  - Strings are converted to their numeric equivalent if the string contains a
    valid representation of a number. Whitespace at the start and end of the string
    is allowed. String values that do not contain any valid representation of a number
    will be converted to the number *0*.
  - An empty array is converted to *0*, an array with one member is converted into the
    result of `TO_NUMBER()` for its sole member. An array with two or more members is
    converted to the number *0*.
  - An object / document is converted to the number *0*.
  
    A unary plus will also cast to a number, but `TO_NUMBER()` is the preferred way:
    
```js
+'5' // 5
+[8] // 8
+[8,9] // 0
+{} // 0
```

A unary minus works likewise, except that a numeric value is also negated:

```js
-'5' // -5
-[8] // -8
-[8,9] // 0
-{} // 0
```
