---
sidebar_position: 0
layout: default
description: CAQL supports functions to allow more complex computations. Functions can be called at any query position where an expression is allowed. 
title: Introduction
license: |
    Adapted from https://github.com/arangodb/docs
    Under Apache License, Version 2.0, January 2004
    Full license https://github.com/arangodb/docs/blob/main/LICENSE
---

Functions
=========

CAQL supports functions to allow more complex computations. Functions can be
called at any query position where an expression is allowed. The general
function call syntax is:

```js
FUNCTIONNAME(arguments)
```

where *FUNCTIONNAME* is the name of the function to be called, and *arguments*
is a comma-separated list of function arguments. If a function does not need any
arguments, the argument list can be left empty. However, even if the argument
list is empty the parentheses around it are still mandatory to make function
calls distinguishable from variable names.

Some example function calls:

```js
HAS(user, "name")
LENGTH(friends)
MAX( [5, 9, -2, 1] )
```

In contrast to collection and variable names, function names are case-insensitive, 
i.e. *LENGTH(foo)* and *length(foo)* are equivalent.
